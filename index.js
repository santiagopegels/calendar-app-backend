const express = require('express')
require('dotenv').config()
const {dbConnection} = require('./database/config')

const app = express();

//Base de datos
dbConnection()

//Public dir
app.use(express.static('public'));

//lecture and parse the body
app.use(express.json())

//Routes
app.use('/api/auth', require('./routes/auth'));

app.listen(process.env.PORT, () => {
    console.log(`Running on port ${process.env.PORT}`);
});