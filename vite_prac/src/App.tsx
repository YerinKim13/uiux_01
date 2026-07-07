import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
// 상단 아이콘: 강아지(dog1,dog2) → 바닐라/잭슨/쭈니/탁호로 교체
import vanilla from './assets/바닐라.png'
import jackson from './assets/잭슨.png'
import Lichard from './assets/리처드.png'
import takho from './assets/탁호.png'
import nyc1 from './assets/NYC1.jpg'
import nyc2 from './assets/NYC2.jpg'
import './App.css'

type AppProps = {title?: string}

function App({ title }: AppProps) {
  const [count, setCount] = useState(0)
  const [likes, setLikes] = useState(0)
  return (
    <>
      
      <div>
        <h1 className="app-title">{title}</h1>
        {/* [수정] 상단 아이콘: 강아지 → 바닐라/잭슨/리처드/탁호 4마리로 교체.
            hover 시 흔들림은 App.css의 .dog-band .logo:hover */}
        <div className="dog-band">
          <img src={jackson} className="logo" alt="잭슨" />
          <img src={vanilla} className="logo" alt="바닐라" />
          <img src={Lichard} className="logo" alt="리처드" />
          <img src={takho} className="logo" alt="탁호" />
        </div>
      </div>
      <section id="center">
        <div>
          {/* [수정] Get started: 글자를 하나씩 span으로 쪼개고 animationDelay를
              0.08초씩 밀어서 왼쪽부터 순차로 점프하는 물결 효과(App.css의 letter-jump) */}
          <h1 className="jump-title">
            {'Hi, Visitor!'.split('').map((ch, i) => (
              <span key={i} style={{ animationDelay: `${i * 0.08}s` }}>
                {ch === ' ' ? ' ' : ch}
              </span>
            ))}
          </h1>
          <p>
            {/* [수정] 기존 <code> 태그 제거 → 회색 네모칸 없이 일반 텍스트로 표시 */}
            저희는 바닐라, 잭슨, 리차드, 탁호와 함께하는 작은 마을입니다. <br />
          </p>
        </div>
        {/* [수정] '방문자 숫자'는 볼드(count-text), 숫자만 span으로 감싸 크게/형광색 강조(count-number) */}
        {/* [수정] Visitor Count + count 버튼 + reset를 하나의 카드로 묶음(배경 밝은 회색) */}
        {/* [수정] 카드 + NYC 사진을 가로로 나란히 배치하는 행 */}
        <div className="counter-row">
        <div className="counter-card">
        <p className="count-text">
          이번 달의 방문자 수: <span className="count-number">{count}</span>
        </p>
        <div className="button-row">
          <button
            type="button"
            className="count-btn"
            onClick={() => setCount((count) => count + 1)}
          >
            같이 살래!😊
          </button>
          <button
            type="button"
            className="count-btn"
            onClick={() => setCount((count) => Math.max(0, count - 1))}
          >
            다른 마을로 갈래🥲
          </button>
        </div>
      <div> <button className="reset-btn" onClick={() => setCount(0)}>reset</button> </div>
        </div>
        <div className="counter-photos">
          <div className="photo-images">
            <img src={nyc1} className="side-photo" alt="NYC1" />
            <img src={nyc2} className="side-photo" alt="NYC2" />
          </div>
          <p className="photo-caption">우리 마을의 모습</p>
        </div>
      </div>
      </section>
      {/* [수정] 두 요약 카드를 색상 상자로 구분 + 여백 추가.
          card-sky=하늘색, card-yellow=노란색 (스타일은 App.css) */}
      {/* [수정] Summary·Likes 카드를 가로로 나란히 배치하는 행 */}
      <div className="card-row">
      <div className="card card-sky">
        <h2 className="card-title"> 🐾 외부 방문자 출입가능요건 </h2>
        <p className="card-text">반드시 맛난 것 혹은 멋진 것을 준비하세요!<br></br>
          마을 전입을 원할 경우, 마을 주민들과 친해져야 신청이 가능합니다.
        </p>
      </div>
      <div className="card card-yellow">
        <h2 className="card-title"> ❤️ : {likes}</h2>
        <button className="like-btn" onClick={() => setLikes((likes) => likes + 1)}>이 마을이<br></br>마음에 들어요!</button>
      </div>
      </div>
      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">  {/* 여기서 target="_blank" 있으면 새탭에서, 없으면 기존탭에서 열림 */}
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App