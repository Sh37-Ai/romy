import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './FirstPage/App.tsx'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import HomePage from './HomePage/HomePage.tsx'
import { AnimatePresence } from 'framer-motion'
import SeconePage from './SecondePage/SeconePage'
import ThirdePage from './ThirdePage/ThirdePage'
import Conversation from './Conversation/CNV'
import FirstImage from "./FisrtImage/FirstImage";
import SecondImage from "./SecondImage/SecondImage";
import TImage from "./TImage/TImage";
import FImage from "./FImage/FImage";
import FFImage from "./FFImage/FFImage";
import SImage from "./SImage/SImage";
import SSImage from "./SSImage/SSImage";
import EImage from "./EImage/EImage";
import NImage from "./NImage/NImage";
import TTImage from "./TTImage/TTImage";
import Connexion from './Connexion/Connexion'
import Result from './Result/Result'
import Reconnexion from './Reconnexion/Reconnexion'
import CreationCompte from './CreationCompte/CreationCompte'
import Map from './Map/Map'
import { ChoiceProvider } from './ChoiceContext/ChoiceContext';



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
          <Route path="/FirstImage" element={<FirstImage />} />
          <Route path="/SecondImage" element={<SecondImage />} />
          <Route path="/Result" element={<Result />} />
          <Route path="/TImage" element={<TImage />} />
          <Route path="/FImage" element={<FImage />} />
          <Route path="/FFImage" element={<FFImage />} />
          <Route path="/SSImage" element={<SSImage />} />
          <Route path="/SImage" element={<SImage />} />
          <Route path="/EImage" element={<EImage />} />
          <Route path="/NImage" element={<NImage />} />
          <Route path="/TTImage" element={<TTImage />} />
          <Route path="/Connexion" element={<Connexion />} />
          <Route path="/CreationCompte" element={<CreationCompte />} />
          <Route path="/Reconnexion" element={<Reconnexion />} />
          <Route path="/Conversation" element={<Conversation />} />
      </Routes>
    </AnimatePresence>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ChoiceProvider>
        <AnimatedRoutes />
      </ChoiceProvider>
    </BrowserRouter>
  </StrictMode>,
);
