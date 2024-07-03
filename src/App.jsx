import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Toppings from './combonents/Toppings'
import { BrowserRouter as Router,Route,Routes,useNavigate} from 'react-router-dom'
import Base from './combonents/Base'
import Sauce from './combonents/Sauce'
import Cheese from './combonents/Cheese'
import Meat from './combonents/Meat'
import Recipe from './combonents/Recipe'
import { motion } from 'framer-motion'

function App() {
 


  return (
    <Router>
      
       
       <div >
       
       <div className='content'>
       
     
      
     

   
   
  <Routes>
    <Route path='/' element={<Home/>}/>
  <Route path="/base" element={<Base/>}/>
  <Route path="/sauce" element={<Sauce/>}/>
  <Route path='/cheese' element={<Cheese/>}/>
  <Route path="/meat" element={<Meat/>}/>
  <Route path="/toppings" element={<Toppings/>}/>
  <Route path='/recipe' element={<Recipe/>}/>
</Routes>
</div>
</div>
</Router>
  
    
   
 
  )
}
function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/base'); // Navigate to the base selection page
  };
  
  return (
    <motion.div className='container'
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{delay:1}}
   
    
    >
      <motion.h1 animate={
        {fontSize:100,
          
        }
      }>Welcome to the Pizza Builder!</motion.h1>
      <motion.button onClick={handleClick}
      animate={{

      }}
      
      >Start Building Your Pizza</motion.button>
    </motion.div>
  );
}

export default App
