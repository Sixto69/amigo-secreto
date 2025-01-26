// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres de los amigos
// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Obtenemos el nombre del amigo desde el input
    const input = document.getElementById('amigo');
    const nombreAmigo = input.value.trim();

    // Validamos que el nombre no esté vacío
    if (nombreAmigo === '') {
        alert('Por favor, ingresa un nombre');
        return;
    }

    // Añadimos el nombre al array
    amigos.push(nombreAmigo);

    // Actualizamos la lista de amigos en el HTML
    actualizarListaAmigos();

    // Limpiamos el campo de texto después de añadir el nombre
    input.value = '';
}

// Función para actualizar la lista de amigos en el HTML
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpiar la lista antes de actualizar

    amigos.forEach((amigo) => {
        const listItem = document.createElement('li');
        listItem.textContent = amigo;
        listaAmigos.appendChild(listItem);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    // Si no hay suficientes amigos, mostramos un mensaje
    if (amigos.length < 2) {
        alert('Necesitas al menos 2 amigos para hacer el sorteo');
        return;
    }

    // Elegir un amigo al azar
    const amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];

    // Elegir un amigo que no sea el mismo que el anterior
    let amigoReceptor;
    do {
        amigoReceptor = amigos[Math.floor(Math.random() * amigos.length)];
    } while (amigoSecreto === amigoReceptor);

    // Mostrar el resultado en el HTML
    mostrarResultado(amigoSecreto, amigoReceptor);
}

// Función para mostrar el resultado del sorteo
function mostrarResultado(amigoSecreto, amigoReceptor) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = ''; // Limpiar resultados anteriores

    const resultado = `${amigoSecreto} le dará un regalo a ${amigoReceptor}`;
    const listItem = document.createElement('li');
    listItem.textContent = resultado;
    resultadoDiv.appendChild(listItem);
}

// Función para limpiar la lista de amigos
function limpiarLista() {
    amigos = [];  // Vaciar el array de amigos
    actualizarListaAmigos();  // Actualizar la vista
}

// Función para limpiar los resultados del sorteo
function limpiarResultado() {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = ''; // Limpiar los resultados del sorteo
}

// Función para limpiar los resultados del sorteo
function limpiarResultado() {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = ''; // Limpiar los resultados del sorteo
}