// clases dedicadas

// class Compra {
//     constructor(carrito) {
//         this.carrito = carrito
//     }
//     obtenerPrecio() {
//         if (carrito.length > 0) {
//             return this.carrito.reduce((acc, dulce)=> acc + dulce.precio, 0).toFixed(2)
//         } else {
//             return 'Ups! hubo un error inesperado'
//         }
//     }
//     confirmarCompra() {
//         if (this.obtenerPrecio() !== 'Error inesperado') {
//             return `Confirmamos el pago de $ ${this.obtenerPrecio()}. \n Muchas gracias por preferir tu compra con nosotros`
//         } else {
//             return `Ups! hubo un error en la transaccion.`
//         }
//     }
// }