import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from "./components/ThemeContext"
import { LangProvider } from "./components/LangContext"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <LangProvider>
        <App />
      </LangProvider>
    </ThemeProvider>
  </StrictMode>
)

import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()