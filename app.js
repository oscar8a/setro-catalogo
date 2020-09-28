const express = require('express');

const app = express();

//ROUTES
app.get('/', (req, res) => {
    res.send("SUP BRUH");
})

//Listen at port 3030
app.listen(3030);