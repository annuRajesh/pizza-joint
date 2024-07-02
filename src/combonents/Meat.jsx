import { useNavigate } from 'react-router-dom';
import './base.css'
const Meat=()=>{
    const navigate=useNavigate();
    const handleSubmit=()=>{
        navigate('/toppings')
    }
    return(
        <div className='container'>
            <h1>Choose some Meat</h1>
            <ul>
                <li>pepperoni</li>
                <li>Canadian bacon</li>
                <li>chicken</li>
            </ul>
            <button onClick={handleSubmit}>Next</button>

        </div>
    )
}
export default Meat