import { useState } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";

import './Connexion.css'
import {Link} from "react-router-dom";
import { motion } from 'framer-motion'

function Connexion() {
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async() => {
      try{
          await signInWithEmailAndPassword(auth, email, password);
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

      <div className="BOX-general">
       <div className="BOX-container">
          <label htmlFor="email">Identifiant :</label>
          <input  id="email" type="email" value={email} placeholder="Entrez votre mail"  onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor="password">Mot de passe :</label>
          <input  id="password" type="password" value={password} placeholder="Entrez votre Mot de passe " onChange={(e) => setPassword(e.target.value)} />
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <div className="Connexion">
             <button onClick={handleLogin}>Connexion</button>
          </div>
          <div className="button-group">

                <Link to="/Reconnexion">
                  <button type="button"  >Mot de passe oublié ?</button>
                </Link>
                <Link to="/CreationCompte">
                  <button type="button">Créer un compte</button>
                </Link>
          </div>
       </div>

      </div>
    </motion.div>
  )
}

export default Connexion
