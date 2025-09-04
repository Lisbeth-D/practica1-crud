let productos = [
  { id: 1, nombre: "Lapiz", precio: 5, stock: 100, creadoEn: new Date().toISOString() },
  { id: 2, nombre: "Cuaderno", precio: 20, stock: 50, creadoEn: new Date().toISOString() },
  { id: 3, nombre: "Borrador", precio: 3, stock: 200, creadoEn: new Date().toISOString() }
];
let nextId = 4;

function getAll() { return productos; }
function getById(id) { return productos.find(p => p.id === id); }
function create(producto) {
  const newProducto = { id: nextId++, creadoEn: new Date().toISOString(), ...producto };
  productos.push(newProducto);
  return newProducto;
}
function update(id, datos) {
  const index = productos.findIndex(p => p.id === id);
  if (index === -1) return null;
  productos[index] = { ...productos[index], ...datos };
  return productos[index];
}
function remove(id) {
  const index = productos.findIndex(p => p.id === id);
  if (index === -1) return false;
  productos.splice(index, 1);
  return true;
}

module.exports = { getAll, getById, create, update, remove };
