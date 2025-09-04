const productosService = require('../services/productos');

function listar(query) {
  return productosService.listar(query);
}

function obtener(id) {
  return productosService.obtener(id);
}

function crear(producto) {
  return productosService.crear(producto);
}

function actualizar(id, datos) {
  return productosService.actualizar(id, datos);
}

function eliminar(id) {
  return productosService.eliminar(id);
}

module.exports = { listar, obtener, crear, actualizar, eliminar };
