
/* variables*/
const numeroFavorito = 7;
const numero = document.getElementById("numero");
const mensaje = document.getElementById("mensaje");
const opciones = document.getElementById("opciones");
const imagen = document.getElementById("imagen");
const descripcion = document.getElementById("descripcion");
const botonSaludo = document.getElementById("boton-saludo");

/* eventos */
numero.addEventListener("input", adivinarNumero);
opciones.addEventListener("change", cambiarFavorito);
botonSaludo.addEventListener("click", mostrarSaludo);

/*adivinar el numero */
function adivinarNumero() {
    const valor = numero.value;

    if (valor == "") {
        mensaje.textContent = "";
    } else if (valor < numeroFavorito) {
        mensaje.textContent = "Mi número es más alto.";
    } else if (valor > numeroFavorito) {
        mensaje.textContent = "Mi número es más bajo.";
    } else {
        mensaje.textContent = "¡Adivinaste! Mi número favorito es 7.";
    }
}

/*cosas fav*/
function cambiarFavorito() {

    if (opciones.value == "futbol") {
        imagen.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa5bEioJg7K8rqEX6CQqWaPdJ9rcDoFZ1hDoNdUsBeBQ&s=10";
        descripcion.textContent = "me gusta mucho el fútbol y el Real Madrid es mi club favorito.";

    } else if (opciones.value == "dibujar") {
        imagen.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS70hUHiSBDm4tq6YNSVPeQ4IA-Xhp7CIP7CIR8s-2w7Wf7wwUFl-i5tHo&s=10";
        descripcion.textContent = "Me gusta dibujar porque me ayuda a distraerme y expresar mi creatividad.";

    } else if (opciones.value == "leer") {
        imagen.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCs3NXRQplLfq1qgt3bcMtwZg9iXzCIC8S2WIxEbIgZul-SBkkNIIThv0&s=10";
        descripcion.textContent = "Me gusta leer porque me entretiene y me ayuda a aprender cosas nuevas, mi saga favorita es la de Harry Potter.";

    } else {
        imagen.src = "https://www.harvard-deusto.com/sites/default/files/styles/article_front/public/2021-08/pensamiento-lateral.jpg?itok=r5o9IZV4";
        descripcion.textContent = "Selecciona una opción para conocer mis gustos.";
    }
}

/* alerta*/
function mostrarSaludo() {
    alert("Profe, me gusta como da clase porque se da el tiempo de explicar paso a paso, y muchas gracias por enseñarnos css aunque no es tu deber, sufrí con lo del seleccionador y las imagenes😭");
}
