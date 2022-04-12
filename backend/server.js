//Server is configured here 
const express = require('express');
const bodyparser = require('body-parser');
const userRoutes = require('./routes/userRoutes')

const app = express();
const port = 3000;

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({
    extended:true
}))

//api routes 
app.use('/users',userRoutes);

app.listen(port,()=>{ console.log(`App listening to port ${port}`)});

