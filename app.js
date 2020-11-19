const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

//Import Routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

//MIDDLEWARES
// app.use("/posts", () => {
//     console.log("This is a MIDDLEWARE running BRUH");
// });

//ROUTES
app.get('/', (req, res) => {
    res.send("SUP BRUH");
});

// app.get('/posts', (req, res) => {
//     res.send("We on POSTS BRUH");
// });

//Connect To DB
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(process.env.DB_CONNECTION, () => console.log("CONNECTED TO DB"));

//Listen at port 3030
app.listen(3030);