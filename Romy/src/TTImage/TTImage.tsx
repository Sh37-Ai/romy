import './TTImage.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import img from '../assets/img_9.png'; // remplace par le vrai chemin de ton image
import { useChoices } from '../ChoiceContext/ChoiceContext.tsx';

function TTImage() {
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
        <Link to="/SImage">
          <button
            className={`px-4 py-2 rounded ${choices.includes("Créatures") ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => addChoice("Figures menaçantes")}
          >
            Créature démoniaque
          </button>

          <button
            className={`px-4 py-2 rounded ${choices.includes("Figures menaçantes") ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => addChoice("Figures menaçantes")}
          >
            Figures menaçantes
          </button>

          <button
            className={`px-4 py-2 rounded ${choices.includes("Formes agressives") ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => addChoice("Animaux puissants")}
          >
            Bactérie
          </button>

          <button
            className={`px-4 py-2 rounded ${choices.includes("Animaux puissants") ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => addChoice("Animaux puissants")}
          >
            Animaux puissants
          </button>
        </Link>
      </div>
    </motion.div>
  );
}

export default TTImage;
