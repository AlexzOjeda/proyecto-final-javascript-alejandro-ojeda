

const carritoPasterleria = JSON.parse(localStorage.getItem("elCarritoDeLaPasteleria")) || []

function retornoDeLasCards(dulce) {
    return `<div class="card" id="card${dulce.id}" style="width: 18rem;">
              <div <img src="./img/torta1.png" class="card-img-top" alt="torta"> ${dulce.imagen} </div>
              <div class="card-body">
              <h5 class="card-title">${dulce.nombre}</h5>
              <p class="card-text">USD ${dulce.precio.toFixed(2)}</p>
              <div class="card-button"> 
                 <button class="btn btn-primary" id="${dulce.id}" title="Clic para agregar '${dulce.nombre}' al carrito">Comprar</button>
              </div>
              </div>
            </div>`
}
    

function tablaInformativaDelCarrito(postres) {
    return `<tr>
                <td>${postres.imagen}</td>
                <td>${postres.nombre}</td>
                <td>${postres.precio}</td>
                <td><button class="btn btn-primary" id="${postres.nombre}">X</button></td>
            </tr>`
}