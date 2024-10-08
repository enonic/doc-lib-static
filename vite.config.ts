import type { UserConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default {
  base: '/webapp/com.example.static/',
  build: {
    outDir: 'build/resources/main/webapp/files',
  },
  plugins: [react()],
} satisfies UserConfig
