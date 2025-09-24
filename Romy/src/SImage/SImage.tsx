import './SImage.css';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/img_5.png';
import { auth } from "../Firebase";
import { db } from "../Firebase";
import { collection, addDoc } from "firebase/firestore";
import { useChoices } from '../ChoiceContext/ChoiceContext.tsx';

function SImage() {
  const [userChoice, setUserChoice] = useState('');
  const { choices, resetChoices , addChoice } = useChoices();


  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5 }}
    >
      <img src={img} className="img" alt="img" />

      <div className="gap-4 mt-4">
      <Link to="/Connexion">
        <button
          className={`px-4 py-2 rounded ${userChoice === 'bonjour' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}

          onClick={() =>  addChoice("Papillons ") }
        >
          Papillons
        </button>

        <button
          className={`px-4 py-2 rounded ${userChoice === 'merci' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          onClick={() =>  addChoice("Animaux puissants") }
        >
          Animale
        </button>

        <button
          className={`px-4 py-2 rounded ${userChoice === 'au_revoir' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}

          onClick={() => addChoice("Créatures")  }
        >
          Créatures
        </button>

        <button
          className={`px-4 py-2 rounded ${userChoice === 'au_revoir' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}

          onClick={() => addChoice("Créatures")  }
        >
          Figures inventées
        </button>


        </Link>
      </div>


    </motion.div>
  );
}

export default SImage;
