import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './FirstPage/App.tsx'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import HomePage from './HomePage/HomePage.tsx'
import { AnimatePresence } from 'framer-motion'
import SeconePage from './SecondePage/SeconePage.tsx'
import ThirdePage from './ThirdePage/ThirdePage.tsx'
import Conversation from './Conversation/CNV.tsx'
import Connexion from './Connexion/Connexion.tsx'
import Reconnexion from './Reconnexion/Reconnexion.tsx'
import CreationCompte from './CreationCompte/CreationCompte.tsx'
import Map from './Map/Map.tsx'

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<HomePage />} />
          <Route path="/SeconePage" element={<SeconePage />} />
          <Route path="/ThirdePage" element={<ThirdePage />} />
          <Route path="/Map" element={<Map />} />
      </Routes>
    </AnimatePresence>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  </StrictMode>,
)
