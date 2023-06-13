console.log("Conectado catalogo");

function catalogo() {

    console.log("dentro de la funcion catalogo");

    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", "json/productos.json", true);

    xhttp.send();

    xhttp.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200) {
            console.log("dentro de xhttp ");

            let datos = JSON.parse(this.responseText);

            let productos = document.querySelector("#productos");

            productos.innerHTML = "";

            for(let item of datos) {
                console.log(1);
                productos.innerHTML += `
                <div class="col">
                <a href="detalle-producto.html" style="text-decoration: none;">
                <div class="card" style="width: 18rem;">
                    <img src="${item.imagen}" class="card-img-top" alt="..." height="200">
                    <div class="card-body">
                        <h5 class="card-title">${item.nombre}</h5>
                        <p class="card-text">${item.descripcion}</p>
                    </div>
                </div>
                </a>
              </div>
                `;



            }


           
        }
    }


}