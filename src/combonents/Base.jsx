import { useNavigate } from 'react-router-dom'
import './base.css'
import axios from 'axios';
import { useState } from 'react';
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
        <div className="container">
            <h1>Choose a crust</h1>
            <ul>
                <li onClick={()=>{
                    setselectedbase('store-bought dough');

                }}>store-bought dough</li>
                <li onClick={()=>{
                    setselectedbase('biscuits')
                }}
                style={{
                    cursor:'pointer',
                    color:selectedBase=='biscuits'?'green':'black'
                }}>biscuits</li>
                <li onClick={()=>setselectedbase('hoagies')}
                style={{
                    cursor:'pointer',
                    color:selectedBase=='hoagies'?'green':'black'
                }}
                >hoagies</li>
                <li onClick={()=>{
                    setselectedbase('English muffins')
                }}
                style={{
                    cursor:'pointer',
                    color:selectedBase=='English muffins'?'green':'black'
                }}
                >English muffins</li>
                <li onClick={()=>{
                    setselectedbase('flatbread')
                }}
                style={{
                    cursor:'pointer',
                    color:selectedBase=='flatbread'?'green':'black'
                }}
                >flatbread</li>
            </ul>
            <button onClick={handleSubmit}>Next</button>
        </div>
    )
}
export default Base