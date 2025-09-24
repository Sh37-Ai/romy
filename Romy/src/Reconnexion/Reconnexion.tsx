import { useState } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import './Reconnexion.css'
import {Link} from "react-router-dom";
import { motion } from 'framer-motion'
import { useChoices } from '../ChoiceContext/ChoiceContext.tsx';
function Reconnexion() {
  const [email,setEmail] = useState('');
  const [err,setError] = useState('');
  const { choices, addChoice } = useChoices();

  const Sauvgerder = async () => {
    if (!choices) return;
    try {
      await addDoc(collection(db, "choixx"), {
        valeur: choices,
        date: new Date()
      });
      console.log("Choix ajouté dans Firebase ✅");
      resetChoices();
    } catch (error) {
      console.error("Erreur Firebase ❌", error);
    }
  };

  const handleLogin = async() => {
      try{
          await sendPasswordResetEmail(auth, email);
          alert("Connexion réussie !");
          }
      catch( err: any){
          setError("Email ou mot de passe incorrect.");
          }

  };



  return (
    < motion.div
       initial={{ opacity: 0, y: 100 }} // commence en haut
       animate={{ opacity: 1, y: 0 }}     // arrive au centre
       exit={{ opacity: 0, y: -100 }}      // sort vers le bas
       transition={{ duration: 0.5 }}>

      <div className="Container-Box">
        <div className="Box">
          <label htmlFor="email">Identifiant : </label>
          <input id="email" type="email" value={email} placeholder=" Entrez votre email"  onChange={(e) => setEmail(e.target.value)}  />
        </div>
        <div className>
           <button onClick={handleLogin}>Réinitialiser</button>
           {err && <p>{err}</p>}
        </div>


      </div>
    </motion.div>
  )
}

export default Reconnexion
