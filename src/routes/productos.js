const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productos');

// Listar productos
router.get('/', (req, res) => {
  try {
    const { page = 1, limit = 10, sort } = req.query;
    const data = productosController.listar({ page, limit, sort });
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al listar productos' });
  }
});

// Obtener producto por ID
router.get('/:id', (req, res) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) return res.status(400).json({ error: 'ID inválido' });

    const producto = productosController.obtener(id);
    if (!producto) return res.status(404).json({ error: 'Producto no encontrado' });

    res.json(producto);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener producto' });
  }
});

// Crear producto
router.post('/', (req, res) => {
  try {
    const { nombre, precio, stock } = req.body;
    if (!nombre || precio === undefined || stock === undefined) {
      return res.status(400).json({ error: 'Faltan campos obligatorios' });
    }
    if (precio <= 0 || stock < 0) {
      return res.status(400).json({ error: 'Precio o stock inválido' });
    }

    const nuevoProducto = productosController.crear({ nombre, precio, stock });
    res.status(201).json(nuevoProducto);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al crear producto' });
  }
});

// Actualizar producto
router.put('/:id', (req, res) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) return res.status(400).json({ error: 'ID inválido' });

    const actualizado = productosController.actualizar(id, req.body);
    if (!actualizado) return res.status(404).json({ error: 'Producto no encontrado' });

    res.json(actualizado);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al actualizar producto' });
  }
});

// Eliminar producto
router.delete('/:id', (req, res) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) return res.status(400).json({ error: 'ID inválido' });

    const eliminado = productosController.eliminar(id);
    if (!eliminado) return res.status(404).json({ error: 'Producto no encontrado' });

    res.json({ message: 'Producto eliminado correctamente' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al eliminar producto' });
  }
});

module.exports = router;
