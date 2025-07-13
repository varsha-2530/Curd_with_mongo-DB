const express = require("express");
const connectDB = require("./models/db");
const app = express();
const Handlebars = require('handlebars');
const engine = require('express-handlebars').engine;
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');
require('dotenv').config()


connectDB();

const PORT =        process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', engine({
    defaultLayout: 'main',
    handlebars: allowInsecurePrototypeAccess(Handlebars)
}));

app.set('view engine', 'handlebars');  
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('home');
});

app.use('/emp', require('./controllers/routes'));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
