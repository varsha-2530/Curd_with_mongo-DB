const express = require("express");
const connectDB = require("./models/db");
const path = require("path");
require('dotenv').config();

const Handlebars = require('handlebars');
const engine = require('express-handlebars').engine;
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set Handlebars as view engine
app.engine('handlebars', engine({
    defaultLayout: 'main',
    handlebars: allowInsecurePrototypeAccess(Handlebars)
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.get('/', (req, res) => {
    res.render('home');
});
app.use('/emp', require('./controllers/routes'));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
