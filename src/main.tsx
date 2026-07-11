import React from 'react'
import ReactDOM from 'react-dom/client'
import { applyStoredCookieConsent } from './utils/cookieConsent';
import App from './App.tsx'
import './index.css'

applyStoredCookieConsent();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
