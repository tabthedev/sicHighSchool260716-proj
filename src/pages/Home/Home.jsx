import '../../index.css'
import { Link } from 'react-router-dom'

const notices = [
  { id: 1, title: '2026학년도 신입생 입학 안내', date: '2026.07.16' },
  { id: 2, title: '여름방학 학사 일정 안내', date: '2026.07.12' },
  { id: 3, title: '교내 동아리 활동 안내', date: '2026.07.08' },
]

export default function Home() {
    return <>

      <header className="home-header">
        <Link className="logo" to="/"></Link>
        <nav className="nav" aria-label="주요 메뉴">
          <Link to="/about">학교소개</Link>
          <Link to="/programs">교육활동</Link>
          <Link to="/notice">학교소식</Link>
          <Link to="/game01">게임</Link>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-inner">
            <p className="hero-label">배움으로 성장하고, 함께 미래를 만듭니다</p>
            <h1>학생의 꿈이 시작되는 즐거운 학교</h1>
            <p className="hero-description">
              서로를 존중하며 배우고 도전하는 교육 공동체,
              SIC 고등학교에 오신 것을 환영합니다.
            </p>
            <Link className="hero-button" to="/about">학교 알아보기</Link>
          </div>
        </section>

        <section className="section" id="about">
          <div className="section-heading">
            <h2>우리 학교 이야기</h2>
            <p>학생 한 명 한 명의 가능성을 키우는 교육을 만들어갑니다.</p>
          </div>

          <div className="cards" id="programs">
            <article className="card">
              <div className="card-icon" aria-hidden="true">📚</div>
              <h3>깊이 있는 배움</h3>
              <p>학생 중심 수업과 다양한 탐구 활동으로 스스로 생각하는 힘을 기릅니다.</p>
            </article>
            <article className="card">
              <div className="card-icon" aria-hidden="true">🚀</div>
              <h3>미래를 향한 도전</h3>
              <p>진로 체험과 프로젝트 활동을 통해 자신의 꿈을 구체적으로 설계합니다.</p>
            </article>
            <article className="card">
              <div className="card-icon" aria-hidden="true">🤝</div>
              <h3>함께하는 공동체</h3>
              <p>존중과 소통을 바탕으로 모두가 행복한 학교 문화를 만들어갑니다.</p>
            </article>
          </div>
        </section>

        <div className="notice-wrap" id="notice">
          <section className="section">
            <div className="section-heading notice-header">
              <div>
                <h2>공지사항</h2>
                <p>학교의 새로운 소식을 확인하세요.</p>
              </div>
              <Link className="more" to="/notice">전체보기 →</Link>
            </div>
            <ul className="notice-list">
              {notices.map((notice) => (
                <li key={notice.id}>
                  <span>{notice.title}</span>
                  <time dateTime={notice.date.replaceAll('.', '-')}>{notice.date}</time>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>

      <footer className="home-footer">
        <p>© 2026 서인천고등학교. All rights reserved.</p>
      </footer>
    </>
}
