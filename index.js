const express = require('express');
const hotels = require('./data/destination.json')
const category = require('./data/category.json')
const app = express()
const cors = require('cors');
app.use(cors());

app.get('/hotel',(req,res)=>{
    res.send(hotels)
})
app.get('/category',(req,res)=>{
    res.send(category)
})
app.get('/hotel/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const selectHotel = hotels.find(hotel => hotel.id === id)
    res.send(selectHotel);
})
app.get('/category/:id',(req,res)=>{
    const id = parseInt(req.params.id)
    console.log(id);
    const hotelCategory = hotels.filter(hotel => parseInt(hotel.category_id) === id);
    res.send(hotelCategory)
})

app.listen(5000,()=>{
    console.log('listening port 5000');
})