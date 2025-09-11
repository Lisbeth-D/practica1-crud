import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import users from '../models/user.model.js';
import { generateToken } from '../utils/generateToken.js';

let userIdCounter = 1;
let refreshTokens = []; // tokens válidos en memoria

// ---------------- REGISTER ----------------
export const register = async (req, res) => {
  const { email, password, role } = req.body;
  if (!email || !password || !role) {
    return res.status(400).json({ message: 'Faltan datos' });
  }

  // Validar contraseña fuerte
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
  if (!passwordRegex.test(password)) {
    return res.status(400).json({
      message: 'La contraseña debe tener al menos 6 caracteres, una mayúscula, una minúscula y un número'
    });
  }

  const existingUser = users.find(u => u.email === email);
  if (existingUser) return res.status(400).json({ message: 'Usuario ya existe' });

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = { id: userIdCounter++, email, password: hashedPassword, role };
  users.push(newUser);

  res.status(201).json({
    message: 'Usuario registrado',
    user: { id: newUser.id, email, role }
  });
};

// ---------------- LOGIN ----------------
export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email);
  if (!user) return res.status(400).json({ message: 'Usuario no encontrado' });

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) return res.status(400).json({ message: 'Contraseña incorrecta' });

  const token = generateToken(user);
  const refreshToken = jwt.sign(
    { id: user.id, role: user.role },
    process.env.JWT_REFRESH_SECRET,
    { expiresIn: '7d' }
  );
  refreshTokens.push(refreshToken);

  res.json({ token, refreshToken });
};

// ---------------- REFRESH ----------------
export const refreshToken = (req, res) => {
  const { token } = req.body;
  if (!token) return res.status(401).json({ message: 'Refresh token no proporcionado' });
  if (!refreshTokens.includes(token)) return res.status(403).json({ message: 'Refresh token inválido' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
    const newToken = generateToken({ id: decoded.id, role: decoded.role });
    res.json({ token: newToken });
  } catch (err) {
    res.status(403).json({ message: 'Refresh token expirado o inválido' });
  }
};
