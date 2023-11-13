const http = require('node:http');
const app = require('./src/app');

// Carga de variables de entorno
require('dotenv').config();

// Configuracion de bbdd
require('./src/config/db');

// Creación del servidor
const server = http.createServer(app);

// Definición del puerto
const PORT = process.env.PORT || 3000;

// Arranque del servidor
server.listen(PORT);

// Handler de eventos del servidor
server.on('listening', () => console.log(`Servidor funcionando en el puerto ${PORT}`));
server.on('error', (error) => console.log(error));

