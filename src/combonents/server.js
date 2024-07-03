import express from 'express';
import cors from 'cors';

const app=express();
const PORT=process.env.PORT||5000
app.use(express.json())
app.use(cors())
let selectedItems={
    base:" ",
    sauce:" ",
    cheese:" ",
    meat:[],
    toppings:[]
}
app.listen(PORT,()=>{
    console.log("listening")
})
app.post('/api/base',(req,res)=>{
    const {base}=req.body
    selectedItems.base=base
    res.json({message:"base selected successfully"})
})
app.post('/api/sauce',(req,res)=>{
    const {sauce}=req.body
    selectedItems.sauce=sauce
    res.json({message:"sauce slected"})
})
app.post('/api/cheese',(req,res)=>{
    const {cheese}=req.body
    selectedItems.cheese=cheese
    res.json({message:"sauce slected"})
})
app.post('/api/meat',(req,res)=>{
    const {meat}=req.body
    selectedItems.meat=meat
    res.json({message:'meat selected'})
})
app.post('/api/toppings',(req,res)=>{
    const {toppings}=req.body
    selectedItems.toppings=toppings
    res.json({message:'toppings selected'})
})
