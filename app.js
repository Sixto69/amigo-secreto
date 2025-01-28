// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres de los amigos
// Array para almacenar los amigos añadidos
let amigos = [];

// Función para añadir un amigo
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const amigoNombre = input.value.trim();

    if (amigoNombre !== "") {
        amigos.push(amigoNombre); // Añadimos el amigo al array
        input.value = ""; // Limpiamos el campo de entrada
        actualizarListaAmigos(); // Actualizamos la lista visible de amigos
    }
}

// Función para actualizar la lista visual de amigos
function actualizarListaAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiamos la lista actual

    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear los amigos secretos
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Se necesitan al menos dos personas para hacer el sorteo.");
        return;
    }

    // Creamos una copia del array de amigos para no modificar el original
    let amigosDisponibles = [...amigos];
    const resultados = [];

    amigos.forEach(amigo => {
        // Elegimos un amigo secreto aleatorio y lo removemos de la lista de disponibles
        const index = Math.floor(Math.random() * amigosDisponibles.length);
        const amigoSecreto = amigosDisponibles.splice(index, 1)[0];
        resultados.push({ amigo, amigoSecreto });
    });

    mostrarResultado(resultados);
}

// Función para mostrar el resultado del sorteo
function mostrarResultado(resultados) {
    const resultadoList = document.getElementById("resultado");
    resultadoList.innerHTML = ""; // Limpiamos el resultado anterior

    resultados.forEach(resultado => {
        const li = document.createElement("li");
        li.textContent = `${resultado.amigo} le toca a: ${resultado.amigoSecreto}`;
        resultadoList.appendChild(li);
    });
}

// Función para limpiar la lista de amigos
function limpiarLista() {
    amigos = []; // Vaciar el array de amigos
    actualizarListaAmigos(); // Actualizamos la lista visual
    limpiarResultado(); // Limpiamos el resultado si es necesario
}

// Función para limpiar el resultado del sorteo
function limpiarResultado() {
    const resultadoList = document.getElementById("resultado");
    resultadoList.innerHTML = ""; // Limpiamos el resultado
}

