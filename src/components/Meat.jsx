import { useNavigate } from 'react-router-dom';
import './base.css'
import { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
const Meat=()=>{
    const navigate=useNavigate();
    const [selectedMeat,setSelectedMeat]=useState([])
    const handleSubmit=()=>{
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/meat`,{meat:selectedMeat}).then(
            console.log("meat selected:",selectedMeat),
        navigate('/toppings')
    
    )
    }
    const handleSelect=(meat)=>{
        if(!selectedMeat.includes(meat)){
            setSelectedMeat(selectedMeat.concat(meat))
        }
    }
    return(
        <motion.div className='container'
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:1}}
       
        >
            <h1>Choose some Meat</h1>
            <ul>
                <li onClick={()=>{handleSelect('pepporoni')
                   
                }

                
                    
                }
                style={{
                    cursor:'pointer',
                    color:selectedMeat.includes('pepporoni')?'green':'black'
                }}
                >pepperoni</li>
                <li onClick={()=>{handleSelect('Canadian bacon')}}
                style={{
                    cursor:'pointer',
                    color:selectedMeat.includes('Canadian bacon')?'green':'black'
                }}
                >Canadian bacon</li>
                <li onClick={()=>{handleSelect('chicken')}}
                style={{
                    cursor:'pointer',
                    color:selectedMeat.includes('chicken')?'green':'black'
                }}
                >chicken</li>
            </ul>
            <button onClick={handleSubmit}>Next</button>

        </motion.div>
    )
}
export default Meat