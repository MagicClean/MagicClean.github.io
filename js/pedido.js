const carro = new Carrito();
const carrito = document.getElementById('far fa-shopping-bag');
const productos = document.getElementById('feature');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
const procesarPedidoBtn = document.getElementById('procesar-pedido');

cargarEventos();

function cargarEventos(){

    //Se ejecuta cuando se presionar agregar carrito
    productos.addEventListener('click', (e)=>{carro.comprarProducto(e)});

    //Cuando se elimina productos del carrito
    carrito.addEventListener('click', (e)=>{carro.eliminarProducto(e)});

    //Al vaciar carrito
    vaciarCarritoBtn.addEventListener('click', (e)=>{carro.vaciarCarrito(e)});

    //Al cargar documento se muestra lo almacenado en LS
    document.addEventListener('DOMContentLoaded', carro.leerLocalStorage());

    //Enviar pedido a otra pagina
    procesarPedidoBtn.addEventListener('click', (e)=>{carro.procesarPedido(e)});
}