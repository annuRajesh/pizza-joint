import { useNavigate } from 'react-router-dom';
import './base.css'
import { useState } from 'react';
import axios from 'axios';
const Meat=()=>{
    const navigate=useNavigate();
    const [selectedMeat,setSelectedMeat]=useState([])
    const handleSubmit=()=>{
        axios.post("http://localhost:5000/api/meat",{meat:selectedMeat}).then(
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
        <div className='container'>
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

        </div>
    )
}
export default Meat