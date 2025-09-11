export const isAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Acceso denegado: solo admin' });
  }
  next();
};

export const isUserOrAdmin = (req, res, next) => {
  if (req.user.role !== 'admin' && req.user.role !== 'user') {
    return res.status(403).json({ message: 'Acceso denegado' });
  }
  next();
};