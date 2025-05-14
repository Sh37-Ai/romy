import { useState } from 'react'
import reactLogo from '../assets/react.svg'
//import viteLogo from '/vite.svg'
import icons8 from '../assets/icons8.svg';

import './App.css'
import {Link} from "react-router-dom";
import { motion } from 'framer-motion'

function App() {
  const [count, setCount] = useState(0)



  return (
    < motion.div
       initial={{ opacity: 0, y: 100 }} // commence en haut
       animate={{ opacity: 1, y: 0 }}     // arrive au centre
       exit={{ opacity: 0, y: -100 }}      // sort vers le bas
       transition={{ duration: 0.5 }}>
      <div className="flex">
        <Link to="/about" >
          <img src={icons8} className="logo" alt="Icons8 logo" />
        </Link>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Home + Romy</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Visits : {count}
        </button>
        <p>
            Health care is so important for you and your family        </p>
      </div>
      <p className="read-the-docs">
        Speak with Romy, and she can describe your situation and give advice.
      </p>
    </motion.div>
  )
}

export default App
