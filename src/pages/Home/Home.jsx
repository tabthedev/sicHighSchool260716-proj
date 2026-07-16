import '../../index.css'

const notices = [
  { id: 1, title: '2026학년도 신입생 입학 안내', date: '2026.07.16' },
  { id: 2, title: '여름방학 학사 일정 안내', date: '2026.07.12' },
  { id: 3, title: '교내 동아리 활동 안내', date: '2026.07.08' },
]

export default function Home() {
  return (
    <div className="home">
      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { font-family: Arial, sans-serif; color: #172033; background: #fff; }
        a { color: inherit; text-decoration: none; }
        button { font: inherit; }

        .home-header {
          display: flex; align-items: center; justify-content: space-between;
          max-width: 1180px; margin: 0 auto; padding: 20px 24px;
        }
        .logo { font-size: 23px; font-weight: 800; color: #174ea6; }
        .nav { display: flex; gap: 30px; font-weight: 600; color: #4b5563; }
        .nav a:hover { color: #174ea6; }

        .hero { background: linear-gradient(135deg, #174ea6, #3b82f6); color: white; }
        .hero-inner { max-width: 1180px; margin: 0 auto; padding: 100px 24px; }
        .hero-label { margin: 0 0 14px; font-weight: 700; color: #dbeafe; }
        .hero h1 { margin: 0; max-width: 700px; font-size: clamp(38px, 6vw, 64px); line-height: 1.15; }
        .hero-description { max-width: 570px; margin: 24px 0 32px; font-size: 18px; line-height: 1.7; color: #eaf2ff; }
        .hero-button { display: inline-block; padding: 14px 22px; border-radius: 10px; background: white; color: #174ea6; font-weight: 800; }

        .section { max-width: 1180px; margin: 0 auto; padding: 80px 24px; }
        .section-heading { margin-bottom: 32px; }
        .section-heading h2 { margin: 0 0 10px; font-size: 32px; }
        .section-heading p { margin: 0; color: #6b7280; }
        .cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .card { padding: 28px; border: 1px solid #e5e7eb; border-radius: 16px; background: #fff; box-shadow: 0 8px 24px rgba(15, 23, 42, .06); }
        .card-icon { display: grid; place-items: center; width: 48px; height: 48px; margin-bottom: 20px; border-radius: 12px; background: #eaf2ff; font-size: 23px; }
        .card h3 { margin: 0 0 10px; }
        .card p { margin: 0; line-height: 1.7; color: #6b7280; }

        .notice-wrap { background: #f7f9fc; }
        .notice-header { display: flex; justify-content: space-between; align-items: end; }
        .more { color: #174ea6; font-weight: 700; }
        .notice-list { margin: 0; padding: 0; list-style: none; border-top: 2px solid #172033; }
        .notice-list li { display: flex; justify-content: space-between; gap: 20px; padding: 20px 8px; border-bottom: 1px solid #dfe3ea; }
        .notice-list time { flex-shrink: 0; color: #6b7280; }

        .home-footer { padding: 30px 24px; text-align: center; color: #9ca3af; background: #172033; }

        @media (max-width: 720px) {
          .home-header { align-items: flex-start; flex-direction: column; gap: 16px; }
          .nav { width: 100%; justify-content: space-between; gap: 12px; font-size: 14px; }
          .hero-inner { padding-top: 72px; padding-bottom: 72px; }
          .cards { grid-template-columns: 1fr; }
          .section { padding-top: 60px; padding-bottom: 60px; }
          .notice-list li { flex-direction: column; gap: 8px; }
        }
      `}</style>

      <header className="home-header">
        <a className="logo" href="#top">SIC HIGH SCHOOL</a>
        <nav className="nav" aria-label="주요 메뉴">
          <a href="#about">학교소개</a>
          <a href="#programs">교육활동</a>
          <a href="#notice">학교소식</a>
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
            <a className="hero-button" href="#about">학교 알아보기</a>
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
              <a className="more" href="#notice">전체보기 →</a>
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
        <p>© 2026 SIC High School. All rights reserved.</p>
      </footer>
    </div>
  )
}
    return <>
    <h1>BLOCK BLAST</h1>
    <h2></h2>
    <h3>게임 시작하기</h3>
    </>
}
