const express = require("express");
const connectDB = require("./models/db");
const app = express();
const engine = require('express-handlebars').engine

connectDB()

const PORT = 3000;

app.use(express.json());
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});