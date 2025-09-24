import { useState } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth,db } from "../Firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { useNavigate } from 'react-router-dom';
import './Connexion.css'
import {Link} from "react-router-dom";
import { motion } from 'framer-motion'
import {  doc, setDoc, addDoc, collection  } from "firebase/firestore";
import { useChoices } from '../ChoiceContext/ChoiceContext';

function Connexion() {
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [userr , SetUserr] = useState(null);
  const { choices ,addChoice ,resetChoices } = useChoices();
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    SetUserr(user);  // met à jour l'état
    console.log("Utilisateur connecté :", user.uid); // utilise `user`, pas `userr`
    alert("Connexion via Google réussie !");
    handleGetPrediction(user);
    navigate("/Result");
    return user; // retourne l'utilisateur pour l'utiliser ensuite
  } catch (error) {
    console.error(error);
    alert("Erreur lors de la connexion Google");
    return null;
  }
};
 const handleGetPrediction = async (user) => {
  const user_uid = user.uid ; 

  try {
    const response = await fetch("http://localhost:5000/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_uid })
    });

    const data = await response.json();

    if (data.prediction) {
      alert("Résultat : " + data.prediction);
      addChoice(data.prediction);
    } else {
      alert("Erreur : " + data.error);
    }
  } catch (error) {
    console.error("Erreur lors de la requête :", error);
    alert("Impossible de récupérer la prédiction.");
  }
};



  const Sauvgerder = async (user) => {
  if (!choices || !user) return;
  try {
    await addDoc(collection(db, "choixxx"), {
      valeur: choices,
      date: new Date(),
      UserId: user.uid
    });
    console.log("Choix ajouté dans Firebase ✅");
    resetChoices();
  } catch (error) {
    console.error("Erreur Firebase ❌", error);
  }
};


  const sauvegardeEtconnexion = async () => {
  const user = await handleGoogleLogin();
  if (user) {
    await Sauvgerder(user);
  }
};



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
      <h2> Connectez vous pour voir votre résultat</h2>
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

                 <button onClick={sauvegardeEtconnexion}>Se connecter avec Google</button>

          </div>
       </div>

      </div>
    </motion.div>
  )
}

export default Connexion
