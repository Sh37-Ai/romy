import { useState } from 'react'
import reactLogo from '../assets/react.svg'
//import viteLogo from '/vite.svg'
import icons8 from '../assets/icons8.svg';

import './CNV.css'
import {Link} from "react-router-dom";
import { motion } from 'framer-motion'

function CNV() {



  return (
    < motion.div
       initial={{ opacity: 0, y: 100 }} // commence en haut
       animate={{ opacity: 1, y: 0 }}     // arrive au centre
       exit={{ opacity: 0, y: -100 }}      // sort vers le bas
       transition={{ duration: 0.5 }}>

     <div className="chat-container">
      <div className="chat-box">
        <label htmlFor="texte">Votre message :</label>
        <input id="texte" type="text" placeholder="Écrivez ici..." />
      </div>
    </div>


    </motion.div>
  )
}

export default CNV
