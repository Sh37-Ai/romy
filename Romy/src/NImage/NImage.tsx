import './NImage.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import img from '../assets/img_8.png';
import { useChoices } from '../ChoiceContext/ChoiceContext.tsx';

function NImage() {
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
        <Link to="/TTImage">
          <button
            className={`px-4 py-2 rounded ${choices.includes("Animaux") ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => addChoice("Animaux")}
          >
            Animaux
          </button>

          <button
            className={`px-4 py-2 rounded ${choices.includes("Trois personnes") ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => addChoice("Deux personnes")}
          >
            Deux personnes
          </button>

          <button
            className={`px-4 py-2 rounded ${choices.includes("Masque") ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => addChoice("Masque")}
          >
            Masque
          </button>

        </Link>
      </div>
    </motion.div>
  );
}

export default NImage;
