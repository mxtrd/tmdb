import { createRoot } from 'react-dom/client'
import App from './app/ui/App/App.tsx'
import { BrowserRouter } from 'react-router'
import { HelmetProvider } from 'react-helmet-async'
import './app/styles/global.scss'

createRoot(document.getElementById('root')!).render(
  <HelmetProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>
)
