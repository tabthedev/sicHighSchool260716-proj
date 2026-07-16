import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import '../../index.css'
import GlobalHeader from '../../pageFormat/header'

const BOARD_SIZE = 8
const COLORS = ['blue', 'purple', 'orange', 'green', 'pink']
const SHAPES = [
  [[0, 0]],
  [[0, 0], [0, 1]],
  [[0, 0], [0, 1], [0, 2]],
  [[0, 0], [1, 0], [2, 0]],
  [[0, 0], [0, 1], [1, 0], [1, 1]],
  [[0, 0], [1, 0], [1, 1]],
  [[0, 0], [0, 1], [1, 1]],
  [[0, 0], [1, 0], [2, 0], [2, 1]],
  [[0, 0], [0, 1], [0, 2], [1, 1]],
]

function emptyBoard() {
  return Array.from({ length: BOARD_SIZE }, () => Array(BOARD_SIZE).fill(null))
}

function makePiece() {
  return {
    id: crypto.randomUUID(),
    cells: SHAPES[Math.floor(Math.random() * SHAPES.length)],
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
  }
}

function makeTray() {
  return [makePiece(), makePiece(), makePiece()]
}

function canPlace(board, piece, row, col) {
  return piece.cells.every(([rowOffset, colOffset]) => {
    const nextRow = row + rowOffset
    const nextCol = col + colOffset
    return nextRow >= 0 && nextRow < BOARD_SIZE &&
      nextCol >= 0 && nextCol < BOARD_SIZE &&
      !board[nextRow][nextCol]
  })
}

function hasMove(board, pieces) {
  return pieces.some((piece) =>
    board.some((row, rowIndex) =>
      row.some((_, colIndex) => canPlace(board, piece, rowIndex, colIndex)),
    ),
  )
}

function getPieceAnchor(piece) {
  const rows = Math.max(...piece.cells.map(([row]) => row)) + 1
  const columns = Math.max(...piece.cells.map(([, col]) => col)) + 1

  return {
    row: Math.floor(rows / 2),
    col: Math.floor(columns / 2),
  }
}

function clearLines(board) {
  const fullRows = board
    .map((row, index) => (row.every(Boolean) ? index : -1))
    .filter((index) => index !== -1)
  const fullColumns = Array.from({ length: BOARD_SIZE }, (_, col) => col)
    .filter((col) => board.every((row) => row[col]))

  const nextBoard = board.map((row) => [...row])
  fullRows.forEach((row) => nextBoard[row].fill(null))
  fullColumns.forEach((col) => nextBoard.forEach((row) => { row[col] = null }))

  return { board: nextBoard, lines: fullRows.length + fullColumns.length }
}

export default function Game01() {
  const [board, setBoard] = useState(emptyBoard)
  const [pieces, setPieces] = useState(makeTray)
  const [selectedId, setSelectedId] = useState(null)
  const [drag, setDrag] = useState(null)
  const [preview, setPreview] = useState(null)
  const [score, setScore] = useState(0)
  const [best, setBest] = useState(() => Number(localStorage.getItem('block-best') || 0))
  const [message, setMessage] = useState('블록을 선택하고 보드에 놓아보세요!')

  const selectedPiece = useMemo(
    () => pieces.find((piece) => piece.id === selectedId),
    [pieces, selectedId],
  )
  const gameOver = !hasMove(board, pieces)
  const previewCells = useMemo(() => {
    if (!preview || !drag) return new Set()
    const piece = pieces.find((item) => item.id === drag.pieceId)
    if (!piece) return new Set()
    return new Set(piece.cells.map(([row, col]) => `${preview.row + row}-${preview.col + col}`))
  }, [drag, pieces, preview])

  function restart() {
    setBoard(emptyBoard())
    setPieces(makeTray())
    setSelectedId(null)
    setDrag(null)
    setPreview(null)
    setScore(0)
    setMessage('새 게임이 시작되었습니다!')
  }

  function placePiece(row, col, piece = selectedPiece) {
    if (!piece) {
      setMessage('먼저 아래 블록을 선택하세요.')
      return
    }
    if (!canPlace(board, piece, row, col)) {
      setMessage('그곳에는 블록을 놓을 수 없어요.')
      return
    }

    const placedBoard = board.map((boardRow) => [...boardRow])
    piece.cells.forEach(([rowOffset, colOffset]) => {
      placedBoard[row + rowOffset][col + colOffset] = piece.color
    })

    const result = clearLines(placedBoard)
    const gained = piece.cells.length * 10 + result.lines * 100
    const nextScore = score + gained
    const remaining = pieces.filter((item) => item.id !== piece.id)
    const nextPieces = remaining.length ? remaining : makeTray()

    setBoard(result.board)
    setPieces(nextPieces)
    setSelectedId(null)
    setScore(nextScore)
    setMessage(result.lines ? `${result.lines}줄 완성! +${gained}점` : `좋아요! +${gained}점`)

    if (nextScore > best) {
      setBest(nextScore)
      localStorage.setItem('block-best', String(nextScore))
    }
  }

  function updateDragPosition(event) {
    if (!drag) return
    const target = document.elementFromPoint(event.clientX, event.clientY)
    const cell = target?.closest('.board-cell')
    setDrag((current) => current && ({ ...current, x: event.clientX, y: event.clientY }))

    if (cell) {
      const piece = pieces.find((item) => item.id === drag.pieceId)
      if (!piece) return
      const anchor = getPieceAnchor(piece)
      setPreview({
        row: Number(cell.dataset.row) - anchor.row,
        col: Number(cell.dataset.col) - anchor.col,
      })
    } else {
      setPreview(null)
    }
  }

  function finishDrag(event) {
    if (!drag) return
    const piece = pieces.find((item) => item.id === drag.pieceId)
    if (piece && preview && canPlace(board, piece, preview.row, preview.col)) {
      placePiece(preview.row, preview.col, piece)
    } else if (preview) {
      setMessage('그곳에는 블록을 놓을 수 없어요.')
    }
    event.currentTarget.releasePointerCapture?.(event.pointerId)
    setDrag(null)
    setPreview(null)
  }

  return (
    <>
      <GlobalHeader />

      <main className="game-page">
        <section className="game-intro">
          <p className="hero-label">SIC MINI GAME</p>
          <h1>BLOCK<br /><span>BLAST</span></h1>
          <p>가로 또는 세로 한 줄을 블록으로 채우면 점수를 얻습니다.</p>
        </section>

        <section className="game-shell" aria-label="Block Blast 게임">
          <div className="score-row">
            <div><span>현재 점수</span><strong>{score}</strong></div>
            <div><span>최고 점수</span><strong>{best}</strong></div>
            <button type="button" onClick={restart}>다시 시작</button>
          </div>

          <p className={`game-message ${gameOver ? 'danger' : ''}`}>
            {gameOver ? '놓을 수 있는 블록이 없습니다. 다시 도전해 보세요!' : message}
          </p>

          <div className="block-board">
            {board.map((row, rowIndex) =>
              row.map((color, colIndex) => {
                const isPreview = previewCells.has(`${rowIndex}-${colIndex}`)
                const previewValid = drag && preview &&
                  canPlace(board, pieces.find((item) => item.id === drag.pieceId), preview.row, preview.col)
                return (
                  <button
                    className={`board-cell ${color ? `filled ${color}` : ''} ${isPreview ? (previewValid ? 'preview-valid' : 'preview-invalid') : ''}`}
                    data-row={rowIndex}
                    data-col={colIndex}
                    key={`${rowIndex}-${colIndex}`}
                    onClick={() => placePiece(rowIndex, colIndex)}
                    aria-label={`${rowIndex + 1}행 ${colIndex + 1}열`}
                    type="button"
                  />
                )
              }),
            )}
          </div>

          <div className="piece-tray" aria-label="사용 가능한 블록">
            {pieces.map((piece) => {
              const rows = Math.max(...piece.cells.map(([row]) => row)) + 1
              const columns = Math.max(...piece.cells.map(([, col]) => col)) + 1
              return (
                <button
                  type="button"
                  className={`piece-option ${selectedId === piece.id ? 'selected' : ''}`}
                  key={piece.id}
                  onClick={() => {
                    setSelectedId(piece.id)
                    setMessage('보드에서 블록의 시작 위치를 선택하세요.')
                  }}
                  onPointerDown={(event) => {
                    event.preventDefault()
                    event.currentTarget.setPointerCapture(event.pointerId)
                    setSelectedId(piece.id)
                    setDrag({ pieceId: piece.id, x: event.clientX, y: event.clientY })
                    setMessage('블록을 보드 위로 끌어다 놓으세요.')
                  }}
                  onPointerMove={updateDragPosition}
                  onPointerUp={finishDrag}
                  onPointerCancel={() => {
                    setDrag(null)
                    setPreview(null)
                  }}
                  aria-label="블록 선택"
                >
                  <span
                    className="piece-grid"
                    style={{ gridTemplateRows: `repeat(${rows}, 18px)`, gridTemplateColumns: `repeat(${columns}, 18px)` }}
                  >
                    {piece.cells.map(([row, col]) => (
                      <i
                        className={`piece-cell ${piece.color}`}
                        key={`${row}-${col}`}
                        style={{ gridRow: row + 1, gridColumn: col + 1 }}
                      />
                    ))}
                  </span>
                </button>
              )
            })}
          </div>

          {drag && (() => {
            const piece = pieces.find((item) => item.id === drag.pieceId)
            if (!piece) return null
            const rows = Math.max(...piece.cells.map(([row]) => row)) + 1
            const columns = Math.max(...piece.cells.map(([, col]) => col)) + 1
            return (
              <span
                className="drag-piece"
                style={{
                  left: drag.x,
                  top: drag.y,
                  gridTemplateRows: `repeat(${rows}, 24px)`,
                  gridTemplateColumns: `repeat(${columns}, 24px)`,
                }}
              >
                {piece.cells.map(([row, col]) => (
                  <i
                    className={`piece-cell ${piece.color}`}
                    key={`${row}-${col}`}
                    style={{ gridRow: row + 1, gridColumn: col + 1 }}
                  />
                ))}
              </span>
            )
          })()}
        </section>
      </main>

      <footer className="home-footer">
        <p>© 2026 서인천고등학교. All rights reserved.</p>
      </footer>
    </>
  )
}
