import { useState } from 'react'
import './CNV.css'
import { motion } from 'framer-motion'

function CNV() {
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState([
    { sender: 'romy', text: "Je suis Romy ton assistante. Comment vas-tu aujourd'hui ?" }
  ]);

  const filtrage = () => {

    const newmessage = userInput.trim().toLowerCase();
    if(newmessage.includes("hamdoulilah")){
        console.log("Bien");
        }else{
            console.log("Pas trouvée");
            }


  };

  const discusion = () => {
    if (userInput.trim() === '') return;

    const newMessages = [...messages, { sender: 'user', text: userInput }];
    const romyResponse = {
      sender: 'romy',
      text: "Merci pour ton message ! 😊"
    };

    setMessages([...newMessages, romyResponse]);
    setUserInput('');
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
