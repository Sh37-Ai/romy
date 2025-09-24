import './SSImage.css';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/img_6.png';
import { auth } from "../Firebase";
import { db } from "../Firebase";
import { collection, addDoc } from "firebase/firestore";
import { useChoices } from '../ChoiceContext/ChoiceContext.tsx';

function SSImage() {
  const [userChoice, setUserChoice] = useState('');
  const { choices, addChoice } = useChoices();

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5 }}
    >
      <img src={img} className="img" alt="img" />

      <div className="gap-16 mt-4">
        <Link to="/EImage">
          <button
            className={`px-4 py-2 rounded ${choices === 'Figures humaines' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => { addChoice("Figures humaines"); setUserChoice("Figures humaines"); }}
          >
            Figures humaines
          </button>

          <button
            className={`px-4 py-2 rounded ${choices === 'Deux personnages' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => { addChoice("Deux personnages"); setUserChoice("Deux personnages"); }}
          >
            Deux personnages
          </button>

          <button
            className={`px-4 py-2 rounded ${choices === 'Papillons' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => { addChoice("Visages"); setUserChoice("Papillons"); }}
          >
            Visages
          </button>

          <button
            className={`px-4 py-2 rounded ${choices === 'Interaction' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => { addChoice("Interaction"); setUserChoice("Interaction"); }}
          >
            Crâne
          </button>
        </Link>
      </div>
    </motion.div>
  );
}

export default SSImage;
