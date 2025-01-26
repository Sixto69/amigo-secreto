// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
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

    // Creamos una copia del array de amigos y lo barajamos
    const amigosSorteados = [...amigos];
    const resultados = [];

    // Aseguramos que nadie se asigne a sí mismo
    amigosSorteados.sort(() => Math.random() - 0.5); // Barajar

    for (let i = 0; i < amigos.length; i++) {
        const amigoSecret = amigosSorteados[i];
        const amigoReceptor = amigosSorteados[(i + 1) % amigosSorteados.length]; // Evitar que se asignen a sí mismos
        resultados.push(`${amigoSecret} le dará un regalo a ${amigoReceptor}`);
    }

    // Mostrar los resultados en el HTML
    mostrarResultados(resultados);
}

// Función para mostrar los resultados del sorteo
function mostrarResultados(resultados) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = ''; // Limpiar resultados anteriores

    resultados.forEach((resultado) => {
        const listItem = document.createElement('li');
        listItem.textContent = resultado;
        resultadoDiv.appendChild(listItem);
    });
}

