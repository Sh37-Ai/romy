import { useState } from 'react'
import { auth } from "../Firebase";
import { db } from "../Firebase"; // Assure-toi que ceci est bien défini dans Firebase.ts
import { motion } from 'framer-motion'
import { createUserWithEmailAndPassword, fetchSignInMethodsForEmail } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import './CreationCompte.css'
import { Link } from "react-router-dom";

function CreationCompte() {
  const [email, setEmail] = useState('');
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [numero, setNumero] = useState('');
  const [age, setAge] = useState('');
  const [password1, setPassword1] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [message1, setMessage1] = useState('');
  const [situation, setSituation] = useState(true);
  const [situation1, setSituation1] = useState(false);

  const checkPasswordlenght = () =>{
    if(password.length<120 && password.length>6){
      setPassword(password);}
    else{
        setPassword('');
        setMessage('le mot de passe doit etre composé de 6 caractères');
      }
  }

  const checkPassword = () => {
    if (password !== password1) {
      setMessage('Les deux mots de passe ne correspondent pas');
      setSituation(false);
    } else {
      setMessage('');
      setSituation(true);
    }
  }

  const checkEmail = async () => {
    if (!email) return;

    try {
      const methods = await fetchSignInMethodsForEmail(auth, email);
      if (methods.length !== 0) {
        setMessage1('Ce compte existe déjà');
        setSituation1(false);
      } else {
        setMessage1('');
        setSituation1(true);
      }
    } catch (error) {
      console.error("Erreur lors de la vérification de l'email :", error);
      setMessage1("Erreur lors de la vérification de l'email");
      setSituation1(false);
    }
  }

  const CreatUser = async () => {
   
    if (!email || !nom || !prenom || !numero || !age || !password  || !password1) {
      setMessage('Veuillez remplir tous les champs correctement');
      return;
    }

    try {
      const Newuser = await createUserWithEmailAndPassword(auth, email, password);
      const user = Newuser.user;
      await setDoc(doc(db, "users", user.uid), {
        nom,
        prenom,
        numero,
        age,
        email,
        createdAt: new Date()
      });
      alert("Compte créé avec succès !");
    } catch (error) {
      console.error("Erreur lors de la création du compte :", error);
      setMessage("Erreur lors de la création du compte");
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5 }}>

      <div className="BOX-general">
        <div className="BOX-container">
          <label htmlFor="nom">Nom :</label>
          <input id="nom" type="text" value={nom} placeholder="Entrez votre nom..." onChange={(e) => setNom(e.target.value)} />

          <label htmlFor="prenom">Prénom :</label>
          <input id="prenom" type="text" value={prenom} placeholder="Entrez votre prénom..." onChange={(e) => setPrenom(e.target.value)} />

          <label htmlFor="numero">Numéro :</label>
          <input id="numero" type="number" value={numero} placeholder="Entrez votre numéro..." max={999999999} onChange={(e) => {
            const value = e.target.value;
            if (value === "") {
              setNumero("");
            } else if (Number(value) <= 999999999) {
              setNumero(value);
            }
          }} />

          <label htmlFor="age">Âge :</label>
          <input id="age" type="number" value={age} placeholder="Entrez votre âge..." min={0} max={120} onChange={(e) => {
            const value = e.target.value;
            if (value === "") {
              setAge("");
            } else if (Number(value) <= 120 && Number(value) >= 0) {
              setAge(value);
            }
          }} />

          <label htmlFor="email">Email :</label>
          <input id="email" type="email" value={email} placeholder="Entrez votre adresse email" onChange={(e) => setEmail(e.target.value)} onBlur={checkEmail} />
          {!situation1 && <p style={{ color: 'red', fontSize: '0.9rem' }}>{message1}</p>}

          <label htmlFor="password">Mot de passe :</label>
          <input id="password" type="password" value={password} placeholder="Entrez votre mot de passe"  onChange={(e) => setPassword(e.target.value)} onBlur={checkPasswordlenght} />

          <label htmlFor="password1">Confirmer le mot de passe :</label>
          <input id="password1" type="password" value={password1} placeholder="Confirmez votre mot de passe" onChange={(e) => {
            setPassword1(e.target.value)}}
            onBlur={checkPassword} />

          {!situation && <p style={{ color: 'red', fontSize: '0.9rem' }}>{message}</p>}

          <button onClick={CreatUser}>Créer le compte</button>
        </div>
      </div>
    </motion.div>
  )
}

export default CreationCompte;
