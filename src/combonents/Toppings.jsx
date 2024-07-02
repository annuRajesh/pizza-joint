import './base.css'
const Toppings=()=>{
    const  items=['pineapple',
        'fresh basil',
        'tomatoes',
        'olives',
        'onions',
        'parsley',
        'mushrooms',
        'bell peppers']
    return(
        <div className='container'>
            <h1>Choose your toppings</h1>
            <ul>
                {
                    items.map((item)=>(<li>{item}</li>))
                }
            </ul>
            <button>Order</button>
        </div>
       

    )
}
export default Toppings