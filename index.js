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
app.get('/recipe',(req,res) =>{
    res.send(chefs)
});
app.get('/recipe/:id',(req,res) =>{
    const id= req.params.id
    console.log(id)
    const selectedRecipe= chefs.find(n=>n.id==id)
    res.send(selectedRecipe)
});

app.listen(port,()=>{
    console.log(` its worked ${port}`)
})