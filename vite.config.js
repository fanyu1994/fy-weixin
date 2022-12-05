import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import EnvironmentPlugs from 'vite-plugin-environment'

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: ['@dcloudio/uni-ui'],
  plugins: [
    uni(),
    // EnvironmentPlugs('all')
  ],
  resolve:{
    alias:{
      "@":'/src',
      "comp":'/src/components',
      "static":'/src/static',
    }
  }
})
