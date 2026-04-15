import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// 👇 Importar registro del Service Worker (PWA)
import { registerSW } from 'virtual:pwa-register'

// 👇 Activar PWA
registerSW({
  onNeedRefresh() {
    console.log('Nueva versión disponible 🔄')
  },
  onOfflineReady() {
    console.log('App lista para trabajar offline 📱')
  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)