import './SecondImage.css';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../assets/img_1.png';
import { auth } from "../Firebase";
import { db } from "../Firebase";
import { collection, addDoc } from "firebase/firestore";
import { useChoices } from '../ChoiceContext/ChoiceContext.tsx';

function SecondImage() {
  const [userChoice, setUserChoice] = useState('');
   const { choices, addChoice } = useChoices();



  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5 }}
    >
      <img src={img1} className="img1" alt="img1" />
      <div className=" gap-16 mt-4">
      <Link to="/TImage">
        <button
          className={`px-4 py-2 rounded ${choices === 'Créatures' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          onClick={() => addChoice("Créatures")}
        >
          Créatures
        </button>

        <button
          className={`px-4 py-2 rounded ${choices === 'Interaction' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}

          onClick={() => addChoice("Formes agressives")}
        >
          Formes agressives
        </button>


        <button
          className={`px-4 py-2 rounded ${userChoice === 'au_revoir' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}

          onClick={() => addChoice("Animaux puissants")}
        >
          Animaux puissants
        </button>

        <button
          className={`px-4 py-2 rounded ${userChoice === 'au_revoir' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}

          onClick={() => addChoice("Deux personnages")}

        >
          Personne
        </button>
        </Link>
        </div>


    </motion.div>
  );
}

export default SecondImage;
