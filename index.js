const express = require('express')
const cors = require('cors')
const app = express()
const chefs = require('./data/chefInfo.json');
const port = process.env.PORT ||5000;
 
app.use(cors())

// app.get('/',(req,res) =>{
//     res.send(' going on the way the way too ')
// });


app.get('/',(req,res) =>{
    res.send(chefs)
});

app.listen(port,()=>{
    console.log(` its worked ${port}`)
})