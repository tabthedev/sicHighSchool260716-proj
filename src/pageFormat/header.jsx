import { Link } from 'react-router-dom'

export default function GlobalHeader() {
    return <>
    <header className="home-header">
        <Link className="logo" to="/">SIC BLAST!</Link>
        <nav className="nav" aria-label="주요 메뉴">
          <Link to="/home">게임소개</Link>
          <Link to="/sic-blast">플레이!</Link>
          <Link to="https://github.com/tabthedev/sicHighSchool260716-proj"><img src="/GitHub_Invertocat_White.svg" alt="프로젝트 리포지토리" style={{height:"16px", filter: "brightness(40%)"}}/> 소스코드</Link>
          
        </nav>
      </header>
    </>
}