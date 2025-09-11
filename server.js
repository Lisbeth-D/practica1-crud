// server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/user.routes.js';

dotenv.config();

const app = express();

// Middlewares
app.use(cors()); // Permite peticiones desde tu HTML local
app.use(express.json());

// Evitar 404 de favicon
app.get('/favicon.ico', (req, res) => res.status(204).end());

// Rutas
app.use('/auth', authRoutes);
app.use('/users', userRoutes);

// Ruta raíz simple
app.get('/', (req, res) => {
  res.send('Servidor JWT Roles corriendo correctamente');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
