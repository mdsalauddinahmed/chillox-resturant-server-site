const express = require('express')

const app = express()
const chefs = require('./data/chefInfo.json');
const port = process.env.PORT ||5000;
// app.get('/',(req,res) =>{
//     res.send('news going on the way the way too ')
// });


app.get('/',(req,res) =>{
    res.send(chefs)
});

app.listen(port,()=>{
    console.log(` its worked ${port}`)
})