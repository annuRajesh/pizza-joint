import { useNavigate } from 'react-router-dom';
import './base.css'
const Cheese=()=>{
    const navigate=useNavigate();
    const handleSubmit=()=>{
        navigate('/meat')
    }
    return(
        <div className='container'>
            <h1>Choose a cheese</h1>
            <ul>
                <li>cheddar</li>
                <li>Mozzarella</li>
                <li>Parmesan</li>
            </ul>
            <button onClick={handleSubmit}>Next</button>
        </div>
    )
}
export default Cheese