const express = require('express');

const bookRoutes = require('./routes/book'); 

const app = express();

app.use((request, response, next)=>{
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    response.setHeader('Access-Control-Allow-Methods','*');
    next();
})

app.use(express.json());

app.use('/book',bookRoutes);

app.listen(9999, ()=>{console.log("Server is live at port:9999")});