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

                }
                style={{
                    cursor:'pointer',
                    color:selecetSauce=='Marinara'?'green':'black'
                }}
                >Marinara</li>
                <li onClick={()=>setSelectedsauce('Alfredo')}
                    style={{
                        cursor:'pointer',
                        color:selecetSauce=='Alfredo'?'green':'black'
                    }}
                    >Alfredo</li>
                <li onClick={()=>setSelectedsauce('BBQ')}
                 style={{
                    cursor:'pointer',
                    color:selecetSauce=='BBQ'?'green':'black'
                }}
                    
                    >BBQ</li>
                <li onClick={()=>setSelectedsauce('Cheese')}
                 style={{
                    cursor:'pointer',
                    color:selecetSauce=='Cheese'?'green':'black'
                }}
                    
                    >Cheese</li>
                <li onClick={()=>setSelectedsauce('Pesto')}
                     style={{
                        cursor:'pointer',
                        color:selecetSauce=='Pesto'?'green':'black'
                    }}
                    >Pesto</li>
            </ul>
            <button onClick={handleSubmit}>Next</button>
        </div>
    )
}
export default Sauce