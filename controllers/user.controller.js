import users from '../models/user.model.js';

export const getAllUsers = (req, res) => {
  const sanitizedUsers = users.map(u => ({ id: u.id, email: u.email, role: u.role }));
  res.json(sanitizedUsers);
};

// Nuevo controlador: obtener perfil del usuario autenticado
export const getMyProfile = (req, res) => {
  const user = users.find(u => u.id === req.user.id);
  if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });

  const sanitizedUser = { id: user.id, email: user.email, role: user.role };
  res.json(sanitizedUser);
};
