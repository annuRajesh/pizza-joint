import axios from "axios"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
const Recipe=()=>{

    const [recipe,setRecipe]=useState({
        base:'',
        sauce:'',
        cheese:'',
        meat:[],
        toppings:[]
    })
    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/recipe`
        ).then(res=>{
            setRecipe(res.data)
        }).catch(err=>{
            console.log("error in fetching data")
        })
    },[])
    return(
        <motion.div className='container'
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:1}}
       
        >
            <h1>Make Your Custom Pizza</h1>
            <ol>
                <li>
                Preheat your oven to 475°F (245°C)

                </li>
                <li>
                Roll out the {recipe.base} and place it on a pizza stone or baking sheet.
                </li>
                <li>
                Spread the {recipe.sauce} evenly over the base.
                </li>
                <li>Sprinkle {recipe.cheese} over the sauce.</li>
            <li>{recipe.meat.length > 0 ? `Add your chosen meats: ${recipe.meat.join(', ')}.` : ''}</li>
            <li>{recipe.toppings.length > 0 ? `Top with the following toppings: ${recipe.toppings.join(', ')}.` : ''}</li>
            <li>Bake in the preheated oven for 12-15 minutes, or until the crust is golden brown and the cheese is bubbly and slightly browned.</li>
            <li>Remove from the oven, let it cool for a few minutes, then slice and enjoy your custom pizza!</li>
                
            </ol>

        </motion.div>
    )

}
export default Recipe