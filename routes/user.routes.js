import express from 'express';
import { getAllUsers, getMyProfile } from '../controllers/user.controller.js';
import { verifyToken } from '../middlewares/auth.middleware.js';
import { isAdmin } from '../middlewares/role.middleware.js';

const router = express.Router();

// Ruta protegida: solo admins
router.get('/', verifyToken, isAdmin, getAllUsers);

// Ruta protegida: cualquier usuario autenticado puede ver su perfil
router.get('/me', verifyToken, getMyProfile);

export default router;
