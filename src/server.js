// Importamos la librería Express
const express = require('express');
// Importar morgan para logging HTTP
const morgan = require('morgan');

// Importamos nuestras funciones
const { reverse, analyze } = require('./textmaster');

// Creamos la aplicación de Express
const app = express();

// MIDDLEWARES Y CONFIGURACIONES
app.use(morgan('combined')); // Registro de solicitudes HTTP

// Definimos el puerto. Render nos lo dará en una variable de entorno,
// si no, usamos el 3000 para local.
const PORT = process.env.PORT || 3000;

// Definimos una ruta "Home" (/)
app.get('/', (req, res) => {
  res.send('Bienvenido a TextMaster API. Servidor: Grupo 1');
});

/*app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date(),
    uptime: process.uptime() });
});*/

app.get("/analyze", (req, res) => {
  const { text } = req.query;

  if (!text) {
    return res.status(400).json({ error: 'Debe enviar un campo "texto"' });
  }

  const resultado = analyze(text);
  res.json(resultado);
})

// Ponemos el servidor a "escuchar" en el puerto definido
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});