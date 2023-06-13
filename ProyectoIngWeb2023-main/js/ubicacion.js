function select_region() {
    let region_select = document.getElementById("region-select");
    let region = region_select.value;

    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "json/productos.json", true);
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            let datos = JSON.parse(this.responseText);
            let producto_por_region =document.querySelector("#producto_por_region");
            producto_por_region.innerHTML = "";
            let desc_region = document.querySelector("#desc_region");
            desc_region.innerHTML = "";
            if (region != "Seleccione una región") {
                desc_region.innerHTML += `Descripcion de la ${region}`;
            }

            for(let item of datos) {
                clima = item.clima;
                epoca = item.epoca;
                contenido_cuadro = `
                <div class="col">
                    <a href="detalle-producto.html" style="text-decoration: none;">
                        <div class="card" style="width: 15rem;">

                        <img src="${item.imagen}" class="card-img-top" alt="..." height="100">

                            <div class="card-body">
                                <h5 class="card-title">${item.nombre}</h5>
                                <p class="card-text">${item.descripcion}</p>
                            </div>
                        </div>
                    </a>
                </div>
                `;
                switch (region) {
                    case "region15":
                        for (let i = 0; i <= epoca.length; i++ ){
                            if (epoca[i] == "Verano") {
                                for (let j = 0; j < clima.length; j++) {
                                    if (clima[j] == "Calido") {
                                        producto_por_region.innerHTML += contenido_cuadro;
                                        break;
                                    }
                                }
                            }
                        }
                    break;
                    case "region1":
                        for (let i = 0; i <= epoca.length; i++ ){
                            if (epoca[i] == "Verano") {
                                for (let j = 0; j < clima.length; j++) {
                                    if (clima[j] == "Calido") {
                                        producto_por_region.innerHTML += contenido_cuadro;
                                        break;
                                    }
                                }
                            }
                        }
                    break;
                    case "region2":
                        for (let i = 0; i <= epoca.length; i++ ){
                            if (epoca[i] == "Verano") {
                                for (let j = 0; j < clima.length; j++) {
                                    if (clima[j] == "Calido" || clima[j] == "Templado") {
                                        producto_por_region.innerHTML += contenido_cuadro;
                                        break;
                                    }
                                }
                            }
                        }
                    break;
                    case "region3":
                        for (let i = 0; i <= epoca.length; i++ ){
                            if (epoca[i] == "Verano" || epoca[i] == "Primavera") {
                                for (let j = 0; j < clima.length; j++) {
                                    if (clima[j] == "Calido" || clima[j] == "Templado") {
                                        producto_por_region.innerHTML += contenido_cuadro;
                                        break;
                                    }
                                }
                            }
                        }
                    break;
                    case "region4":
                        for (let i = 0; i <= epoca.length; i++ ){
                            if (epoca[i] == "Verano" || epoca[i] == "Primavera") {
                                for (let j = 0; j < clima.length; j++) {
                                    if (clima[j] == "Calido" || clima[j] == "Templado") {
                                        producto_por_region.innerHTML += contenido_cuadro;
                                        break;
                                    }
                                }
                            }
                        }
                    break;
                    case "region5":
                        for (let i = 0; i <= epoca.length; i++ ){
                            if (epoca[i] == "Verano" || epoca[i] == "Primavera") {
                                for (let j = 0; j < clima.length; j++) {
                                    if (clima[j] == "Calido" || clima[j] == "Templado") {
                                        producto_por_region.innerHTML += contenido_cuadro;
                                        break;
                                    }
                                }
                            }
                        }
                    break;
                    case "regionM":
                        for (let i = 0; i <= epoca.length; i++ ){
                            if (epoca[i] == "Verano" || epoca[i] == "Primavera") {
                                for (let j = 0; j < clima.length; j++) {
                                    if (clima[j] == "Calido" || clima[j] == "Templado") {
                                        producto_por_region.innerHTML += contenido_cuadro;
                                        break;
                                    }
                                }
                            }
                        }
                    break;
                    case "region6":
                        for (let i = 0; i <= epoca.length; i++ ){
                            if (epoca[i] == "Verano" || epoca[i] == "Primavera") {
                                for (let j = 0; j < clima.length; j++) {
                                    if (clima[j] == "Calido" || clima[j] == "Templado") {
                                        producto_por_region.innerHTML += contenido_cuadro;
                                        break;
                                    }
                                }
                            }
                        }
                    break;
                    case "region7":
                        for (let i = 0; i <= epoca.length; i++ ){
                            if (epoca[i] == "Verano" || epoca[i] == "Primavera") {
                                for (let j = 0; j < clima.length; j++) {
                                    if (clima[j] == "Fresco" || clima[j] == "Templado") {
                                        producto_por_region.innerHTML += contenido_cuadro;
                                        break;
                                    }
                                }
                            }
                        }
                    break;                    
                    case "region8":
                        for (let i = 0; i <= epoca.length; i++ ){
                            if (epoca[i] == "Verano" || epoca[i] == "Primavera") {
                                for (let j = 0; j < clima.length; j++) {
                                    if (clima[j] == "Fresco" || clima[j] == "Templado") {
                                        producto_por_region.innerHTML += contenido_cuadro;
                                        break;
                                    }
                                }
                            }
                        }
                    break;
                    case "region9":
                        for (let i = 0; i <= epoca.length; i++ ){
                            if (epoca[i] == "Verano" || epoca[i] == "Primavera") {
                                for (let j = 0; j < clima.length; j++) {
                                    if (clima[j] == "Fresco" || clima[j] == "Templado") {
                                        producto_por_region.innerHTML += contenido_cuadro;
                                        break;
                                    }
                                }
                            }
                        }
                    break;
                    case "region14":
                        for (let i = 0; i <= epoca.length; i++ ){
                            if (epoca[i] == "Verano" || epoca[i] == "Primavera") {
                                for (let j = 0; j < clima.length; j++) {
                                    if (clima[j] == "Fresco" || clima[j] == "Humedo") {
                                        producto_por_region.innerHTML += contenido_cuadro;
                                        break;
                                    }
                                }
                            }
                        }
                    break;
                    case "region10":
                        for (let i = 0; i <= epoca.length; i++ ){
                            if (epoca[i] == "Verano" || epoca[i] == "Primavera") {
                                for (let j = 0; j < clima.length; j++) {
                                    if (clima[j] == "Fresco" || clima[j] == "Humedo") {
                                        producto_por_region.innerHTML += contenido_cuadro;
                                        break;
                                    }
                                }
                            }
                        }
                    break;
                    case "region11":
                        for (let i = 0; i <= epoca.length; i++ ){
                            if (epoca[i] == "Verano" || epoca[i] == "Primavera") {
                                for (let j = 0; j < clima.length; j++) {
                                    if (clima[j] == "Fresco" || clima[j] == "Humedo") {
                                        producto_por_region.innerHTML += contenido_cuadro;
                                        break;
                                    }
                                }
                            }
                        }
                    break;
                    case "region12":
                        for (let i = 0; i <= epoca.length; i++ ){
                            if (epoca[i] == "Verano" || epoca[i] == "Primavera") {
                                for (let j = 0; j < clima.length; j++) {
                                    if (clima[j] == "Fresco" || clima[j] == "Humedo") {
                                        producto_por_region.innerHTML += contenido_cuadro;
                                        break;
                                    }
                                }
                            }
                        }
                    break;
                    default:
                    break;
                } 
            }
        }
    }
}