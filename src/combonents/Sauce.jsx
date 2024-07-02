import { useNavigate } from 'react-router-dom';
import './base.css'
const Sauce=()=>{
    const navigate=useNavigate();
    const handleSubmit=()=>{
        navigate('/cheese')
    }
    return(
        <div className='container'>
            <h1>Choose a sauce</h1>
            <ul>
                <li>Marinara</li>
                <li>Alfredo</li>
                <li>BBQ</li>
                <li>Cheese</li>
                <li>Pesto</li>
            </ul>
            <button onClick={handleSubmit}>Next</button>
        </div>
    )
}
export default Sauce