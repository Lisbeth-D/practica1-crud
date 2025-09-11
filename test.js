import fetch from 'node-fetch';

const BASE_URL = 'http://localhost:3000';

const test = async () => {
  try {
    // Registrar admin
    let res = await fetch(`${BASE_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'admin@test.com', password: 'Admin1234', role: 'admin' })
    });
    let data = await res.json();
    console.log('Registro admin:', data);

    // Registrar user
    res = await fetch(`${BASE_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'user@test.com', password: 'User567', role: 'user' })
    });
    data = await res.json();
    console.log('Registro user:', data);

    // Login admin
    res = await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'admin@test.com', password: 'Admin1234' })
    });
    data = await res.json();
    const adminToken = data.token;
    console.log('Login admin token:', adminToken);

    // Login user
    res = await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'user@test.com', password: 'User567' })
    });
    data = await res.json();
    const userToken = data.token;
    console.log('Login user token:', userToken);

    // Acceder a ruta protegida /users como admin
    res = await fetch(`${BASE_URL}/users`, {
      method: 'GET',
      headers: { Authorization: `Bearer ${adminToken}` }
    });
    data = await res.json();
    console.log('Usuarios (admin):', data);

    // Acceder a ruta protegida /users como user
    res = await fetch(`${BASE_URL}/users`, {
      method: 'GET',
      headers: { Authorization: `Bearer ${userToken}` }
    });
    data = await res.json();
    console.log('Usuarios (user):', data);

  } catch (err) {
    console.error('Error en test:', err);
  }
};

test();
