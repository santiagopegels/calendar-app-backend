const express = require('express')
require('dotenv').config()
const {dbConnection} = require('./database/config')
const cors = require('cors')

const app = express();

//Base de datos
dbConnection()

//CORS
app.use(cors())

//Public dir
app.use(express.static('public'));

//lecture and parse the body
app.use(express.json())

//Routes
app.use('/api/auth', require('./routes/auth'));

app.listen(process.env.PORT, () => {
    console.log(`Running on port ${process.env.PORT}`);
});