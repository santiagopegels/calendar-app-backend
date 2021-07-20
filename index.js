const express = require('express')

const app = express();
const PORT = 3005


//Routes
app.get('/', (req, res) => {
    res.json({
        ok: true
    })
})


app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});