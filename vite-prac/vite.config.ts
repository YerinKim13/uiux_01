import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages: 저장소 이름(uiux_01) 하위 경로에서 서빙되므로 base 지정
  base: '/uiux_01/',
})
