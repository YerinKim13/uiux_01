import { useState, useEffect, useRef } from 'react'
// 상단 아이콘: 강아지(dog1,dog2) → 바닐라/잭슨/리차드/탁호로 교체
import vanilla from './assets/바닐라.png'
import jackson from './assets/잭슨.png'
import Lichard from './assets/리처드.png'
import takho from './assets/탁호.png'
import vanillaFace from './assets/바닐라_얼굴.png'
import jacksonFace from './assets/잭슨_얼굴.png'
import lichardFace from './assets/리처드_얼굴.png'
import takhoFace from './assets/탁호_얼굴.png'
import nyc1 from './assets/NYC1.jpg'
import nyc2 from './assets/NYC2.jpg'
import leaf from './assets/leaf_transparent.png'
import nintendo from './assets/nintendo.svg'
import './App.css'

type AppProps = {title?: string}

function App({ title }: AppProps) {
  const [visitors, setVisitors] = useState<number | null>(null)
  const [likes, setLikes] = useState(0)
  const bumpedRef = useRef(false)

  // 사이트 방문 시 방문자 수 자동 증가(전역 카운터 API, 실패하면 localStorage로 대체)
  useEffect(() => {
    if (bumpedRef.current) return // StrictMode 중복 실행 방지
    bumpedRef.current = true

    const KEY = 'village-visitors'
    ;(async () => {
      try {
        const res = await fetch(
          'https://api.counterapi.dev/v1/yerinkim-uiux01/village-visitors/up'
        )
        const data = await res.json()
        if (typeof data?.count === 'number') {
          setVisitors(data.count)
          return
        }
      } catch {
        /* 네트워크/서비스 실패 시 아래 localStorage 사용 */
      }
      const local = Number(localStorage.getItem(KEY) ?? '0') + 1
      localStorage.setItem(KEY, String(local))
      setVisitors(local)
    })()
  }, [])
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
            {'Hi, Visitors!!'.split('').map((ch, i) => (
              <span key={i} style={{ animationDelay: `${i * 0.08}s` }}>
                {ch === ' ' ? ' ' : ch}
              </span>
            ))}
          </h1>
          <p>
            {/* [수정] 기존 <code> 태그 제거 → 회색 네모칸 없이 일반 텍스트로 표시 */}
            이곳은 바닐라, 잭슨, 리처드, 탁호와 함께하는 작은 마을입니다. <br />
          </p>
        </div>
        {/* [수정] '방문자 숫자'는 볼드(count-text), 숫자만 span으로 감싸 크게/형광색 강조(count-number) */}
        {/* [수정] Visitor Count + count 버튼 + reset를 하나의 카드로 묶음(배경 밝은 회색) */}
        {/* [수정] 카드 + NYC 사진을 가로로 나란히 배치하는 행 */}
        <div className="counter-row">
        {/* 마을 사진: 왼쪽에 크게 배치 */}
        <div className="counter-photos">
          <div className="photo-images">
            <img src={nyc1} className="side-photo" alt="NYC1" />
            <img src={nyc2} className="side-photo" alt="NYC2" />
          </div>
          <p className="photo-caption"> [  마을 사진  ]</p>
        </div>
        {/* 방문자 수: 연두색 카드 — 좌상단 텍스트 + 우하단 나뭇잎 + 세로 테이프 */}
        <div className="visitor-card">
          <span className="tape"></span>
          <p className="visitor-label">오늘의 방문자</p>
          <span className="visitor-num">{visitors ?? '…'}</span>
          <img className="leaf-deco" src={leaf} alt="" />
        </div>
      </div>
      </section>
      {/* [수정] 두 요약 카드를 색상 상자로 구분 + 여백 추가.
          card-sky=하늘색, card-yellow=노란색 (스타일은 App.css) */}
      {/* [수정] Summary·Likes 카드를 가로로 나란히 배치하는 행 */}
      <div className="card-row">
      <div className="card card-sky">
        <h2 className="card-title"> 🦁🐯🐻‍❄️🐨 외부 방문자 출입가능요건 🐷🐻🐱🐮</h2>
        <p className="card-text"> 🐾 반드시 맛난 것 혹은 멋진 것을 준비하세요!<br></br>
          🐾 마을 전입을 원할 경우, 마을 주민들과 친해져야 신청이 가능합니다.
        </p>
      </div>
      <div className="card card-yellow">
        <h2 className="card-title"> ❤️ : {likes}</h2>
        <div className="button-row">
          <button
            type="button"
            className="count-btn"
            onClick={() => setLikes((likes) => likes + 1)}
          >
            이 마을에<br />같이 살래!<br />😊
          </button>
          <button
            type="button"
            className="count-btn"
            onClick={() => setLikes((likes) => likes - 1)}
          >
            다른 마을로<br />갈래<br />🥲
          </button>
        </div>
        <button className="reset-btn" onClick={() => setLikes(0)}>reset</button>
      </div>
      </div>
      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Thank you for visiting!</h2>
          <p>Have a great day!</p>
          <ul>
            <li>
              <a href="https://www.animal-crossing.com/" target="_blank">
                <img className="logo" src={leaf} alt="Animal Crossing" />
                Animal Crossing
              </a>
            </li>
            <li>
              <a href="https://www.nintendo.com/" target="_blank">
                <img className="logo" src={nintendo} alt="Nintendo" />
                Nintendo
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the 'Animal Crossing' community</p>
          <ul>
            <li>
              <a href="https://namu.wiki/w/바닐라(동물의%20숲%20시리즈)" target="_blank">
                <img className="button-icon face-icon" src={vanillaFace} alt="바닐라" />
                Vanilla
              </a>
            </li>
            <li>
              <a href="https://namu.wiki/w/잭슨(동물의%20숲%20시리즈)" target="_blank">
                <img className="button-icon face-icon" src={jacksonFace} alt="잭슨" />
                Jackson
              </a>
            </li>
            <li>
              <a href="https://namu.wiki/w/리처드(동물의%20숲%20시리즈)" target="_blank">
                <img className="button-icon face-icon" src={lichardFace} alt="리처드" />
                Richard
              </a>
            </li>
            <li>
              <a href="https://namu.wiki/w/탁호" target="_blank">
                <img className="button-icon face-icon" src={takhoFace} alt="탁호" />
                Takho
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