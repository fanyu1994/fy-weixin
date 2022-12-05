import { createSSRApp } from 'vue'
import App from './App.vue'
import fetch from '../utils/fetch'
export function createApp() {
  const app = createSSRApp(App)
  app.config.globalProperties.fetch = fetch
  return {
    app,
  }
}
