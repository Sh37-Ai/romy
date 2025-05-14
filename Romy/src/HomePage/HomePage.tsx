import './HomePage.css'
import { motion } from 'framer-motion'
import feamme from '../assets/Feamme.jpg';
import {type JSX, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import BarreRecherche from "../BarreRecherche/BarreRecherche.tsx";


function HomePage(): JSX.Element {


   const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 50

      if (isAtBottom) {
        navigate('/SeconePage') // ✅ Remplace avec ta route cible
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [navigate])

  return (

   <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.6 }}
    >
    <div className="container" >
      <BarreRecherche/>
      <div className="modele">
        <h1><strong>
          MENTAL HEALTH
          IS JUST AS IMPORTANT AS
          PHYSICAL HEALTH </strong>
        </h1>
        <p>
          Yet,it often unnoticed,pushed asde,
          or misunderstood.

          Takking care of your mind is not a
          luxury-it's a necessitu.

          Open up,seek support, and remebmer:
          you are never alone in this journey.
        </p>
        <img src={feamme} alt="Mental health" className="img" />
      </div>

    </div>

   </motion.div>
  )
}

export default HomePage
