import './FirstImage.css';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/img.png';
import { auth } from "../Firebase";
import { db } from "../Firebase";
import { collection, addDoc } from "firebase/firestore";
import { useChoices } from '../ChoiceContext/ChoiceContext.tsx';




function FirstImage() {
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
        <Link to="/SecondImage">
          <button
            className={`px-4 py-2 rounded ${choices.includes("Deux ours") ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => addChoice("Animaux")}
          >
            Animaux
          </button>

          <button
            className={`px-4 py-2 rounded ${choices.includes("Deux chiens") ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => addChoice("Deux personnages")}
          >
            Deux personnages
          </button>

          <button
            className={`px-4 py-2 rounded ${choices.includes("Un papillon") ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => addChoice("Figures humaines")}
          >
            Figures humaines
          </button>

          <button
            className={`px-4 py-2 rounded ${choices.includes("Deux personnes assises") ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => addChoice("Visages")}
          >
            Visages
          </button>
          <h1></h1>
        </Link>
      </div>
    </motion.div>
  );
}

export default FirstImage;