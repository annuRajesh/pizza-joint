import { useNavigate } from 'react-router-dom';
import './base.css'
import { useState } from 'react';
import axios from 'axios';
const Sauce=()=>{
    const [selecetSauce,setSelectedsauce]=useState('')
    const navigate=useNavigate();
    const handleSubmit=()=>{
       axios.post("http://localhost:5000/api/sauce",{sauce:selecetSauce}).then(
        res=>{
            navigate('/cheese')
            console.log("sauce chosen:",selecetSauce)
        }
       )
    }
    return(
        <div className='container'>
            <h1>Choose a sauce</h1>
            <ul>
                <li onClick={()=>setSelectedsauce('Marinara')

                }>Marinara</li>
                <li onClick={()=>setSelectedsauce('Alfredo')}>Alfredo</li>
                <li onClick={()=>setSelectedsauce('BBQ')}>BBQ</li>
                <li onClick={()=>setSelectedsauce('Cheese')}>Cheese</li>
                <li onClick={()=>setSelectedsauce('Pesto')}>Pesto</li>
            </ul>
            <button onClick={handleSubmit}>Next</button>
        </div>
    )
}
export default Sauce