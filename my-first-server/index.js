const express = require('express');
const app = express();
const port = 5000;

app.get('/',(req,res) =>{
    res.send('Hello from my first ever server');
})

app.get('/data', (req,res)=>{
    res.send('More data comming soon')
})

app.listen(port, () => {
    console.log(`example of my first ever server ${port} `);
})