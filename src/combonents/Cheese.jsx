import { useNavigate } from 'react-router-dom';
import './base.css'
import axios from 'axios';
import { useState } from 'react';
import { motion } from 'framer-motion';
const Cheese=()=>{
    const [SelectedCheese,setSelectedCheese]=useState('')
    const navigate=useNavigate();
   
    const handleSubmit=()=>{
       axios.post("http://localhost:5000/api/cheese",{cheese:SelectedCheese}).then(res=>{
        navigate('/meat')
        console.log('cheese selected',SelectedCheese)
       })
    }
    return(
        <motion.div className='container'>
            <h1>Choose a cheese</h1>
            <ul>
                <li onClick={()=>{
                    setSelectedCheese('cheddar')
                }}
                style={{
                    cursor:'pointer',
                    color:SelectedCheese=='cheddar'?'green':'black'
                }}
                >cheddar</li>
                <li onClick={()=>{
                    setSelectedCheese('Mozzarella')
                }}
                style={{
                    cursor:'pointer',
                    color:SelectedCheese=='Mozzarella'?'green':'black'
                }}
                >Mozzarella</li>
                <li onClick={()=>{
                    setSelectedCheese('Parmesan')
                }}
                style={{
                    cursor:'pointer',
                    color:SelectedCheese=='Parmesan'?'green':'black'
                }}
                
                >Parmesan</li>
            </ul>
            <button onClick={handleSubmit}>Next</button>
        </motion.div>
    )
}
export default Cheese