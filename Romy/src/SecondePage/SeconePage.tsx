import './SeconePage.css'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import feamme from "../assets/Feamme.jpg";

function SeconePage(): JSX.Element {
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 50

      if (isAtBottom) {
        navigate('/ThirdePage') // ✅ Remplace avec ta route cible
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

export default SeconePage
