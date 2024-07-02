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
import HeaderContainer from './combonents/Header'

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
    <div>
      <h1>Welcome to the Pizza Builder!</h1>
      <button onClick={handleClick}>Start Building Your Pizza</button>
    </div>
  );
}

export default App
