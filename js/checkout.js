

function informacionDelCarrito() {
    let tablaHTML = ""
    const tbody = document.querySelector("tbody")
    const carritoPasterleria = JSON.parse(localStorage.getItem("elCarritoDeLaPasteleria"))
    if (carritoPasterleria && carritoPasterleria.length >= 0) {
        carritoPasterleria.forEach(postres => tablaHTML += tablaInformativaDelCarrito(postres))
        tbody.innerHTML = tablaHTML
        totalidad()
    }
}
informacionDelCarrito()


function vaciarCarrito() {
  const botonDeBorrar = document.querySelectorAll("button.btn.btn-primary")
  botonDeBorrar.forEach(botono => {
    botono.addEventListener("click", ()=> {
          let lugar = carritoPasterleria.findIndex(postres => postres.nombre === botono.id)
              if (lugar > -1) {
                  carritoPasterleria.splice(lugar, 1)
                  localStorage.setItem("elCarritoDeLaPasteleria", JSON.stringify(carritoPasterleria))
                  informacionDelCarrito()
                  vaciarCarrito()

              }
      })
  })
}
vaciarCarrito()


function totalidad() {
  let total = document.querySelector("h2#total")
  let totalSuma = carritoPasterleria.reduce((acc, postres)=> acc + postres.precio, 0)
        total.innerText = `Total a pagar: $ ${totalSuma.toLocaleString()}`
}


const botonDeComprar = document.querySelector("#botonDeComprar")


botonDeComprar.addEventListener("click", ()=> {
    Swal.fire({
        title: '¿Quieres proceder con la compra?',
        showCancelButton: true,
        confirmButtonText: 'Confirmar',
        cancelButtonText: `Cancelar`,
      }) 
      .then(result => {
        if (result.isConfirmed) {
            localStorage.removeItem("elCarritoDeLaPasteleria")
            carritoPasterleria.length = 0
            Swal.fire("Gracias por preferir su compra con nosotros")
                .then(()=> {
                    location.href='../index.html'
                })
        } 
      })
})