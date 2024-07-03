import { useState } from 'react'
import './base.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Toppings=()=>{
    const navigate=useNavigate()
    const  items=['pineapple',
        'fresh basil',
        'tomatoes',
        'olives',
        'onions',
        'parsley',
        'mushrooms',
        'bell peppers']
        const [selectedtoppings,setSelectedToppings]=useState([])
        const handleSubmit=()=>{
            axios.post("http://localhost:5000/api/toppings",{toppings:selectedtoppings}).then(res=>{
                console.log("toppings selected:",selectedtoppings),
                console.log(res.data),
                navigate('/recipe')
            }
                
            )
        }
        const handleSelect=(toppings)=>{
            if(!selectedtoppings.includes(toppings)){
               setSelectedToppings( selectedtoppings.concat(toppings))
            }
        }

    return(
        <div className='container'>
            <h1>Choose your toppings</h1>
            <ul>
                {
                    items.map((item)=>(<li key={item}
                    onClick={()=>{
                        handleSelect(item)
                    }}
                    style={{
                        cursor:'pointer',
                        color:selectedtoppings.includes(item)?'green':'black'
                    }}
                    >{item}</li>))
                }
            </ul>
            <button onClick={handleSubmit}>Generate Recipe</button>
        </div>
       

    )
}
export default Toppings