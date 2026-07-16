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
            <Link className="hero-button" to="/sic-blast">게임 시작하기</Link>
          </div>
        </section>

        <section className="section" id="about">
          <div className="section-heading">
            <h2>우리 학교 이야기</h2>
            <p>남녀 노소 즐길 수 있는 전체 이용가 게임.</p>
          </div>

          <div className="cards" id="programs">
            <article className="card">
              <div className="card-icon" aria-hidden="true">📚</div>
              <h3>두뇌 사고력 UP!</h3>
              <p>두뇌 사고력을 키워 학습 활동에 도움을 준다.</p>
            </article>
            <article className="card">
              <div className="card-icon" aria-hidden="true">🚀</div>
              <h3>예측하는 설계</h3>
              <p>어떤 블럭이 나오고 어떻게 함정을 뚫을지  구체적으로 설계합니다.</p>
            </article>
            <article className="card">
              <div className="card-icon" aria-hidden="true">🤝</div>
              <h3>자신의 한계 넘기</h3>
              <p>자신의 기록을 넘어서며 한계를 돌파하라</p>
            </article>
          </div>
        </section>

        
      </main>

      <GlobalFooter />
    </>
}
