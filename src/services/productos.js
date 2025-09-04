const productosModel = require('../models/productos');

function listar({ page = 1, limit = 10, sort }) {
  let data = [...productosModel.getAll()];
  if (sort) {
    const [field, order] = sort.split(',');
    data.sort((a, b) => (order === 'desc' ? b[field] - a[field] : a[field] - b[field]));
  }
  const start = (page - 1) * limit;
  const end = start + Number(limit);
  return data.slice(start, end);
}

function obtener(id) { return productosModel.getById(id); }
function crear(producto) { return productosModel.create(producto); }
function actualizar(id, datos) { return productosModel.update(id, datos); }
function eliminar(id) { return productosModel.remove(id); }

module.exports = { listar, obtener, crear, actualizar, eliminar };
