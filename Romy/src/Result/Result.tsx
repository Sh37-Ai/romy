import './Result.css'
import { motion } from 'framer-motion'
import feamme from '../assets/Feamme.jpg';
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useChoices } from '../ChoiceContext/ChoiceContext.tsx';

// --- Explications détaillées par résultat ---
const explanations: { [key: string]: { cause: string, conseil: string } } = {
  "Anxiété": {
    cause: "Vos réponses révèlent une attention accrue aux stimuli menaçants ou stressants. Vous pouvez ressentir une vigilance constante et des inquiétudes persistantes, souvent liées à la peur de l'échec ou à des situations incertaines.",
    conseil: "Pratiquez des techniques de relaxation et de respiration profonde. Tenez un journal de vos pensées anxieuses et essayez de les confronter rationnellement. Consulter un professionnel peut aussi être bénéfique."
  },
  "Confiance": {
    cause: "Vous avez tendance à percevoir les situations de manière positive et à avoir confiance en vos interactions sociales. Vos réponses indiquent un sentiment de sécurité et d’optimisme vis-à-vis des autres.",
    conseil: "Continuez à renforcer votre estime personnelle, poursuivez vos routines positives, et maintenez des interactions sociales régulières qui vous apportent satisfaction."
  },
  "Dépression": {
    cause: "Vos réponses montrent un retrait émotionnel ou une baisse de motivation. Vous pouvez ressentir tristesse persistante, perte d'intérêt pour des activités habituellement plaisantes et fatigue émotionnelle.",
    conseil: "Cherchez un soutien psychologique, maintenez une activité physique régulière, établissez des routines quotidiennes et restez en contact avec votre réseau social."
  },
  "Humeur instable": {
    cause: "Vos réponses révèlent une variabilité émotionnelle marquée. Vous pouvez passer rapidement d'un état émotionnel à un autre, avec des réactions imprévisibles aux situations quotidiennes.",
    conseil: "Tenez un journal de vos émotions pour identifier les déclencheurs. Pratiquez des techniques de régulation émotionnelle comme la méditation, et consultez un professionnel si nécessaire."
  },
  "Impulsivité": {
    cause: "Vos réponses indiquent des réactions rapides et peu filtrées aux stimuli. Vous pouvez agir sans réfléchir aux conséquences, ce qui peut générer des situations conflictuelles ou stressantes.",
    conseil: "Avant de réagir, prenez quelques instants pour réfléchir. Planifiez vos actions et exercez des techniques de contrôle de l'impulsivité. Un accompagnement thérapeutique peut être utile."
  },
  "Paranoïa": {
    cause: "Vos réponses montrent une méfiance accrue et une interprétation des situations comme potentiellement hostiles. Vous pouvez percevoir des intentions négatives là où elles n'existent pas.",
    conseil: "Essayez de vérifier objectivement vos perceptions et parlez de vos inquiétudes avec un professionnel. Des exercices de remise en question des pensées peuvent aider à réduire la méfiance excessive."
  }
};

function Result() {
  const { choices } = useChoices();
  const lastChoice = choices.length > 0 ? choices[choices.length - 1] : null;

  const navigate = useNavigate()

  const navigation = () =>{
      navigate('/map');
      };



  const explanation = lastChoice ? explanations[lastChoice] : null;

  return (
   <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.6 }}
    >
    <div className="container" >
      <div className="modele">
        <h1><strong>{lastChoice}</strong></h1>

        {explanation && (
          <>
            <h3>Cause :</h3>
            <p>{explanation.cause}</p>
            <h3>Conseil :</h3>
            <p>{explanation.conseil}</p>
          </>
        )}

        <img src={feamme} alt="Mental health" className="img" />
        <button onClick={navigation}>Consultez nos psychologues partenaires  </button>

      </div>
    </div>
   </motion.div>
  )
}

export default Result
