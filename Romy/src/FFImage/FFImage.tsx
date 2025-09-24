import './FFImage.css';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/img_4.png';
import { auth } from "../Firebase";
import { db } from "../Firebase";
import { collection, addDoc } from "firebase/firestore";
import { useChoices } from '../ChoiceContext/ChoiceContext.tsx';

function FFImage() {
  const [userChoice, setUserChoice] = useState('');
   const { choices, addChoice } = useChoices();

  const Sauvgerder = async () => {
    if (!userChoice) return;
    try {
      await addDoc(collection(db, "choix"), {
        valeur: userChoice,
        date: new Date()
      });
      console.log("Choix ajouté dans Firebase ✅");
    } catch (error) {
      console.error("Erreur Firebase ❌", error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5 }}
    >
      <img src={img} className="img" alt="img" />

      <div className="gap-4 mt-4">
      <Link to="/SSImage">
        <button
          className={`px-4 py-2 rounded ${userChoice === 'bonjour' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}

          onClick={() => addChoice("Animaux puissants")}
        >
          Deux chauves souris
        </button>

        <button
          className={`px-4 py-2 rounded ${userChoice === 'merci' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}

          onClick={() => addChoice("Créatures")}
        >
          Créatures
        </button>

        <button
          className={`px-4 py-2 rounded ${userChoice === 'au_revoir' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}

          onClick={() => addChoice("Papillons")}
        >
          Papillons
        </button>

        <button
          className={`px-4 py-2 rounded ${userChoice === 'au_revoir' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}

          onClick={() => addChoice("Figures menaçantes ")}
        >
          Figures menaçantes
        </button>


        </Link>
      </div>


    </motion.div>
  );
}

export default FFImage;
