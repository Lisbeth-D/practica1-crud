let productos = [
  { id: 1, nombre: "Batería LTH 12V", precio: 2500, stock: 12, creadoEn: new Date().toISOString() },
  { id: 2, nombre: "Aceite Mobil 5W-30", precio: 550, stock: 40, creadoEn: new Date().toISOString() },
  { id: 3, nombre: "Balatas delanteras Nissan Sentra", precio: 1200, stock: 20, creadoEn: new Date().toISOString() },
  { id: 4, nombre: "Filtro de aire Toyota Corolla", precio: 350, stock: 35, creadoEn: new Date().toISOString() },
  { id: 5, nombre: "Líquido de frenos DOT 4", precio: 180, stock: 50, creadoEn: new Date().toISOString() }
];

let nextId = 6;

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
