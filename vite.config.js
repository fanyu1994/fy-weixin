import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import EnvironmentPlugs from 'vite-plugin-environment'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    // EnvironmentPlugs('all')
  ],
})
