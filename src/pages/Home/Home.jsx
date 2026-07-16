import '../../index.css'
import { Link } from 'react-router-dom'
import GlobalHeader from '../../pageFormat/header'
import GlobalFooter from '../../pageFormat/footer'

export default function Home() {
    return <>

      <GlobalHeader />

      <main id="top">
        <section className="hero">
          <div className="hero-inner">
            <p className="hero-label">두뇌를 이용하여, 한계를 돌파하라</p>
            <h1>여러분의 뇌를 꺠우는 SIC BLAST!</h1>
            <br />
            <Link className="hero-button" to="/game01">게임 시작하기</Link>
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

        
      </main>

      <GlobalFooter />
    </>
}
