const express = require('express')

const app = express()

const port = process.env.PORT ||5000;
app.get('/',(req,res) =>{
    res.send('news going on the way ')
});

app.listen(port,()=>{
    console.log(` its worked ${port}`)
})