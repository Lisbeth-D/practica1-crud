const { z } = require('zod');
const productosService = require('../services/productos');

const productoSchema = z.object({
  nombre: z.string().nonempty({ message: "Nombre requerido" }),
  precio: z.number().positive({ message: "Precio debe ser mayor que 0" }),
  stock: z.number().int().nonnegative({ message: "Stock no puede ser negativo" })
});

function listar(req, res) {
  const { page = 1, limit = 10, sort } = req.query;
  const data = productosService.listar({ page, limit, sort });
  res.json({ status: 'success', data });
}

function obtener(req, res) {
  const producto = productosService.obtener(Number(req.params.id));
  if (!producto) return res.status(404).json({ status: 'error', message: 'Producto no encontrado' });
  res.json({ status: 'success', data: producto });
}

function crear(req, res) {
  try {
    const validated = productoSchema.parse(req.body);
    const producto = productosService.crear(validated);
    res.status(201).json({ status: 'success', data: producto });
  } catch (err) {
    res.status(400).json({ status: 'error', message: err.errors ? err.errors.map(e => e.message) : err.message });
  }
}

function actualizar(req, res) {
  try {
    const validated = productoSchema.partial().parse(req.body);
    const producto = productosService.actualizar(Number(req.params.id), validated);
    if (!producto) return res.status(404).json({ status: 'error', message: 'Producto no encontrado' });
    res.json({ status: 'success', data: producto });
  } catch (err) {
    res.status(400).json({ status: 'error', message: err.errors ? err.errors.map(e => e.message) : err.message });
  }
}

function eliminar(req, res) {
  const ok = productosService.eliminar(Number(req.params.id));
  if (!ok) return res.status(404).json({ status: 'error', message: 'Producto no encontrado' });
  res.json({ status: 'success', message: 'Producto eliminado' });
}

module.exports = { listar, obtener, crear, actualizar, eliminar };
