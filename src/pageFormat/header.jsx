import { Link } from 'react-router-dom'

export default function GlobalHeader() {
    return <>
    <header className="home-header">
        <Link className="logo" to="/">SIC BLAST!</Link>
        <nav className="nav" aria-label="주요 메뉴">
          <Link to="/home">게임소개</Link>
          <Link to="/sic-blast">플레이!</Link>
        </nav>
      </header>
    </>
}