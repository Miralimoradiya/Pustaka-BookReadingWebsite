import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "./assets/styles/main.css"
import "./assets/styles/576max.css"
import "./assets/styles/576min.css"
import "./assets/styles/768min.css"
import "./assets/styles/992min.css"
import "./assets/styles/1200min.css"
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
