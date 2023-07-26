const express = require('express')
const app = express()
const geoip = require('geoip-lite');
const port = process.env.PORT || 3000
app.get('/',(req,res)=>{
    const ip = req.ip || "216.156.136.64"
    const geo = geoip.lookup(ip);
    res.status(200).json(geo)
})

app.get('/greet',(req,res)=>{
   res.send('Welcome to my wesbite, I made this website to learn deployment and for no any other purpose')
})

app.get('/sank',(req,res)=>{
   res.send('SaNk is here!!!')
})



app.listen(port,()=>{
    console.log('Listening at port 3000')
})