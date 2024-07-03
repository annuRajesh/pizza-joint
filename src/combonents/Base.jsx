import { useNavigate } from 'react-router-dom'
import './base.css'
import axios from 'axios';
import { useState } from 'react';
import { motion } from 'framer-motion';
const Base=()=>{
    const [selectedBase,setselectedbase]=useState('')
    const navigate=useNavigate();
    
   const handleSubmit=()=>{
    axios.post('http://localhost:5000/api/base',{base:selectedBase}).then(res=>{ navigate('/sauce')
        console.log({selectedBase})
    }
       

    )

   }
    return(
        <motion.div className="container"
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:1}}
       
        
        
        >
            <h1>Choose a crust</h1>
            <ul>
                <li onClick={()=>{
                    setselectedbase('store-bought dough');

                }}
                style={{
                    
                    color:selectedBase=='store-bought dough'?'green':'black'
                }}
                
                >store-bought dough</li>
                <li onClick={()=>{
                    setselectedbase('biscuits')
                }}
                style={{
                    
                    color:selectedBase=='biscuits'?'green':'black'
                }}>biscuits</li>
                <li onClick={()=>setselectedbase('hoagies')}
                style={{
                    
                    color:selectedBase=='hoagies'?'green':'black'
                }}
                >hoagies</li>
                <li onClick={()=>{
                    setselectedbase('English muffins')
                }}
                style={{
                   
                    color:selectedBase=='English muffins'?'green':'black'
                }}
                >English muffins</li>
                <li onClick={()=>{
                    setselectedbase('flatbread')
                }}
                style={{
                   
                    color:selectedBase=='flatbread'?'green':'black'
                }}
                >flatbread</li>
            </ul>
            <button onClick={handleSubmit}>Next</button>
        </motion.div>
    )
}
export default Base