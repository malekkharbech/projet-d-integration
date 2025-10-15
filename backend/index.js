require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');  // utiliser la connexion unique

const app = express();
const port = process.env.PORT || 3000;

// Connexion à MongoDB
connectDB();

app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port} ,,,,,,,,,,,,,,,,,,,?`);
});
