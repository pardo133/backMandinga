import express from 'express';
import dotenv from 'dotenv';
import conectarDB from './config/db.js'; // IMPORTANTE: Agrega la extensión .js

// Configurar dotenv
dotenv.config();

const app = express();

// Conectar a la BD
conectarDB();

app.use(express.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor funcionando en el puerto ${PORT}`);
});