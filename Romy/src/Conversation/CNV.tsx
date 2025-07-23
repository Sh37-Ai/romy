import { useState } from 'react'
import './CNV.css'
import { motion } from 'framer-motion'
import { option } from 'framer-motion/m';


function CNV() {
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState([
    { sender: 'romy', text: "Je suis Romy ton assistante. Comment vas-tu aujourd'hui ?" }
  ]);
  const [showquestionnaire,setShowquestionnaire] = useState(false);
  const [questionIndex,setQuestionIndex] = useState(0);

  const filtrage = () => {

    const newmessage = userInput.trim().toLowerCase();
    if(newmessage.includes("hamdoulilah") || newmessage.includes("Bikheir") ){
        console.log("Bien");
        }else{
            console.log("Pas trouvée");
            }


  };

  const questionnaire = [
    {sender :'romy',
      texte :" tu te sens coupable de ta première relation ou t'a jamais osé" ,
    option : ['Oui','Non','Je n’ai jamais osé']
   },
   {
    sender:'user',
    option:[" tu assume","Parfait","tu dois agir"]
   },

   {sender :'romy',
    texte :" En ce moment dans ta tête, c’est plutôt : " ,
    option : [' Grand soleil ☀️','Nuages passagers ☁️' ,'Tempête totale 🌪️' ]
   },
   
   {sender :'romy',
    texte :" Tu te sens seul : " ,
    option : ['Oui' , 'Non' ]
   },

   {sender :'romy',
    texte :" Combien t'as de vrai ami(e)s " ,
    option : ['1' , '3', '5' , '>5']
   },

   {sender :'romy',
    texte :" Tu dors combien d'heure par jour " ,
    option : [' >6' , '6< <8' , ' >8' ]
   },
   
  ]



  

  const handleOptionClick = (option) => {
  
    const messagecurrent = option ;
    const index = questionnaire[questionIndex].option.indexOf(messagecurrent);
    const romyReply = questionnaire[questionIndex+1].option[index] || "Merci pour ta réponse " ;
    const newMessages = [
      ...messages,
      { sender: 'user', text: option },
      { sender: 'romy', text: romyReply }
    ];

    if (questionIndex +2 < questionnaire.length ) {
      setQuestionIndex(prev => prev + 2);
    } else {
      setShowquestionnaire(false);
      newMessages.push({ sender: 'romy', text: "Merci d'avoir complété le test 🎉" });
    }

    setMessages(newMessages);
  };


  const discusion = () => {
    if (userInput.trim() === '') return;

    const newMessages = [...messages, { sender: 'user', text: userInput }];
    const romyResponse = {
      sender: 'romy',
      text: "Merci pour ton message ! 😊 , et mainetenant on va passer un petit test pour analyser ta situation ,"
    };
    

    setMessages([...newMessages, romyResponse]);
    setUserInput('');
    setShowquestionnaire(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5 }}
    >
      <div className="chat-container">
        <div className="chat-box">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
        </div>
        {showquestionnaire && (
          <div className="questionnaire">
            <p>{questionnaire[questionIndex].texte}</p>
            {questionnaire[questionIndex].option.map((opt,i) => ( 
              <button key={i} onClick={ () => handleOptionClick(opt)}>{opt}</button>
            ) )}
            
          </div>
        )}

        <div className="chat-box">
          <label htmlFor="texte">Votre message :</label>
          <input
            id="texte"
            type="text"
            value={userInput}
            placeholder="Écrivez ici..."
            onChange={e => setUserInput(e.target.value)} // ici aussi il y avait une faute : `onChage` → `onChange`
          />
          <button onClick={()=> {discusion();filtrage();} }>Envoyer</button>
        </div>
      </div>
    </motion.div>
  );
}

export default CNV;
