const express = require('express');
const app = express();
const productosRoutes = require('./routes/productos');

// Middleware para parsear JSON
app.use(express.json());

// Rutas de productos
app.use('/productos', productosRoutes);

// Middleware para errores no capturados
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ status: 'error', message: 'Error interno del servidor' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
