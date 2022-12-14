const buscar = []
const cartas = document.getElementById("cartas")
const inputSearch = document.querySelector("input#inputSearch")
const URL = '/basededatos/productos.json'
const dulces = []


fetch(URL)
    .then((response) => data = response.json())
    .then((data) => dulces.push(...data))
    .then(() => cargarDulces(dulces))
    .then(() => clickDeBoton())
    

function cargarDulces(array) {
    let informacion = ""
    if (array.length > 0) {
        array.forEach(dulce => informacion += retornoDeLasCards(dulce))
        cartas.innerHTML = informacion
    }
}


function clickDeBoton() {
    const agregarLosBotones = document.querySelectorAll("button.btn.btn-primary")
    agregarLosBotones.forEach(butunu => {
        butunu.addEventListener("click", ()=> {
            let resultado = dulces.find(prod => prod.id === parseInt(butunu.id))
                carritoPasterleria.push(resultado)
                localStorage.setItem("elCarritoDeLaPasteleria", JSON.stringify(carritoPasterleria))
                agregadoAlCarrito('Haz agregado tu producto al carrito')
        })
    })
}


const agregadoAlCarrito = (text)=> {

    Toastify({
        text: text,
        duration: 1500,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: { background: "#E072A4",
    },
      }).showToast();
}


const alertaPersonalizada = () => {
    Swal.fire({
        icon: 'error',
        title: 'Error de busqueda',
        text: 'Escribiste mal el producto en la barra buscadora',
        timer: '6500',
      })
}