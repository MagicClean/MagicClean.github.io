const compra = new Carrito();
const listaCompra = document.querySelector("#lista-compra tbody");
const carrito = document.getElementById('far fa-shopping-bag');
const procesarCompraBtn = document.getElementById('procesar-compra');
const cliente = document.getElementById('cliente');
const correo = document.getElementById('correo');

cargarEventos();

function cargarEventos() {
  document.addEventListener('DOMContentLoaded', compra.leerLocalStorageCompra);

  //Eliminar productos del carrito
  carrito.addEventListener('click', (e) => { compra.eliminarProducto(e) });

  compra.calcularTotal();

  //cuando se selecciona procesar Compra
  procesarCompraBtn.addEventListener('click', procesarCompra);

  carrito.addEventListener('change', (e) => { compra.obtenerEvento(e) });
  carrito.addEventListener('keyup', (e) => { compra.obtenerEvento(e) });
}

function procesarCompra() {
  if (compra.obtenerProductosLocalStorage().length === 0) {
    Swal.fire({
      type: 'error',
      title: 'Oops...',
      text: 'No hay productos, selecciona alguno',
      showConfirmButton: false,
      timer: 2000
    }).then(function () {
      window.location = "index.html";
    });
  } else if (cliente.value === '' || correo.value === '') {
    Swal.fire({
      type: 'error',
      title: 'Oops...',
      text: 'Ingrese todos los campos requeridos',
      showConfirmButton: false,
      timer: 2000
    });
  } else {
    // Resto del código para procesar la compra (ya incluido en tu código)
  }
}