const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb://127.0.0.1:27017/mon_projet', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(` MongoDB connecté : ${conn.connection.host}`);
  } catch (err) {
    console.error(' Erreur de connexion MongoDB :', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;