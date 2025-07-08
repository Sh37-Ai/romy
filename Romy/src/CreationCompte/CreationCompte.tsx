import { useState } from 'react'
import reactLogo from '../assets/react.svg'
//import viteLogo from '/vite.svg'
import icons8 from '../assets/icons8.svg';

import './CreationCompte.css'
import {Link} from "react-router-dom";
import { motion } from 'framer-motion'

function CreationCompte() {

  const [email,setEmail] = useState('');
  const [name,setName] = useState('');
  const [lastname,setLastname] = useState('');
  const [number,setNumber] = useState('');
  const [year,setYear] = useState('');
  const [password1,setPassword1] = useState('');
  const [password,setPassword] = useState('');


  return (
    < motion.div
       initial={{ opacity: 0, y: 100 }} // commence en haut
       animate={{ opacity: 1, y: 0 }}     // arrive au centre
       exit={{ opacity: 0, y: -100 }}      // sort vers le bas
       transition={{ duration: 0.5 }}>


      <div className="BOX-general">
        <div className="BOX-container" >
            <label htmlFor="name">Nom :</label>
            <input id="name" type="text" value={name} placeHolder="Entrez votre nom... " onChange={(e) => setName(e.target.value)}  />
            <label htmlFor="lastname">Prénom :</label>
            <input id="lastname" type="text" value={lastname} placeHolder="Entrez votre lastname... " onChange={(e) => setLastname(e.target.value)}   />
            <label htmlFor="numero">numero :</label>
            <input
  id="numero"
  type="number"
  value={number}
  placeholder="Entrez votre numéro..."
  max={999999999}
  onChange={(e) => {
    const value = e.target.value;
    if (value === "") {
      setNumber("");
    } else if (Number(value) <= 999999999) {
      setNumber(Number(value));
    }
  }}
/>


            <label htmlFor="year">Age :</label>
            <input
  id="year"
  type="number"
  value={year}
  placeholder="Entrez votre âge..."
  min={0}
  max={120}
  onChange={(e) => {
    const value = e.target.value;
    if (value === "") {
      setYear("");
    } else if (Number(value) <= 120 && Number(value) >= 0) {
      setYear(Number(value));
    }
  }}
/>

            <label htmlFor="email">Identifiant :</label>
            <input  id="email" type="email" value={email} placeholder="Entrez votre mail"  onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="password">Mot de passe :</label>
            <input  id="password" type="password" value={password} placeholder="Entrez votre Mot de passe " onChange={(e) => setPassword(e.target.value)} />
            <label htmlFor="password1">Mot de passe :</label>
            <input  id="password1" type="password1" value={password1} placeholder="Entrez votre Mot de passe " onChange={(e) => setPassword1(e.target.value)} />


        </div>
      </div>
    </motion.div>
  )
}

export default CreationCompte
