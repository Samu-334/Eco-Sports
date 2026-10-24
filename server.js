const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PUERTO = 3001; 

app.use(cors());
app.use(express.json());


mongoose.connect('mongodb://127.0.0.1:27017/ecosports_db')
    .then(() => console.log('✅ Conectado a MongoDB perfectamente'))
    .catch((error) => console.error('❌ Error de Mongo:', error));


const MensajeSchema = new mongoose.Schema({
    nombre: String,
    email: String,
    mensaje: String,
    fecha: { type: Date, default: Date.now }
});

const Mensaje = mongoose.model('Mensaje', MensajeSchema);


app.post('/api/contacto', async (req, res) => {
    try {
        const nuevoMensaje = new Mensaje(req.body);
        await nuevoMensaje.save();
        res.status(201).json({ status: 'ok', mensaje: 'Guardado en base de datos' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 'error', error: 'Fallo al guardar' });
    }
});

app.listen(PUERTO, () => {
    console.log(`🚀 Servidor backend volando en http://localhost:${PUERTO}`);
});