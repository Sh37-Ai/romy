import './EImage.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import img from '../assets/img_7.png';
import { useChoices } from '../ChoiceContext/ChoiceContext.tsx';

function EImage() {
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
        <Link to="/NImage">
          <button
            className={`px-4 py-2 rounded ${choices.includes("Figures humaines") ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => addChoice("Figures humaines")}
          >
            Figures humaines
          </button>

          <button
            className={`px-4 py-2 rounded ${choices.includes("Deux personnages") ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => addChoice("Figures menaçantes")}
          >
            Créature démoniaque
          </button>

          <button
            className={`px-4 py-2 rounded ${choices.includes("Visages") ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => addChoice("Visages")}
          >
            Visages
          </button>

          <button
            className={`px-4 py-2 rounded ${choices.includes("Interaction") ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => addChoice("Interaction")}
          >
            Masque
          </button>
        </Link>
      </div>
    </motion.div>
  );
}

export default EImage;
