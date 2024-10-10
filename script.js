const contenedor_cards = document.getElementById("contenedor_cards");

const inputBusqueda = document.getElementById('buscar');

let personajesFiltrados = [];

fetch("sim.json")
    .then(res => res.json())
    .then(personajes => {
        console.log(personajes);
        crearTarjetas(personajes);

        // Guardamos los personajes en una variable
        personajesFiltrados = personajes;
    });

let templateCard = "";

function crearTarjetas(personajes) {
    templateCard = "";

    for (const personaje of personajes) {
        templateCard += `
        <div class="card">
            <img src="${personaje.icon ? personaje.icon : 'defaultIcon.png'}" alt="${personaje.name}">
            <p><strong>Nombre:</strong> ${personaje.name}</p>
            <p><strong>Edad:</strong> ${personaje.age || 'Desconocida'}</p>
            <p><strong>Pelo:</strong> ${personaje.hair || 'Desconocido'}</p>
            <p><strong>Padres:</strong> ${personaje.parent.join(', ') || 'Desconocidos'}</p>
            <p><strong>Checked:</strong> ${personaje.checked ? 'Sí' : 'No'}</p>
        </div>`;
    }

    contenedor_cards.innerHTML = templateCard;
}

inputBusqueda.addEventListener('input', () => {
    const inputValue = inputBusqueda.value.toLowerCase();

    crearTarjetasInput();

    if (personajesFiltradosInput.length === 0) {
        contenedor_cards.innerHTML = "<h2>Sin Resultados</h2>";
    }

    let labelBuscar = document.getElementById("labelBuscar");
    labelBuscar.innerHTML = inputValue;
});

function crearTarjetasInput() {
    const textoBusqueda = inputBusqueda.value.toLowerCase();

    personajesFiltradosInput = personajesFiltrados.filter(personaje => personaje.name.toLowerCase().includes(textoBusqueda));

    templateCard = "";

    for (const personaje of personajesFiltradosInput) {
        templateCard += `
        <div class="card">
            <img src="${personaje.icon ? personaje.icon : 'defaultIcon.png'}" alt="${personaje.name}">
            <p><strong>Nombre:</strong> ${personaje.name}</p>
            <p><strong>Edad:</strong> ${personaje.age || 'Desconocida'}</p>
            <p><strong>Pelo:</strong> ${personaje.hair || 'Desconocido'}</p>
            <p><strong>Padres:</strong> ${personaje.parent.join(', ') || 'Desconocidos'}</p>
            <p><strong>Checked:</strong> ${personaje.checked ? 'Sí' : 'No'}</p>
        </div>`;
    }

    contenedor_cards.innerHTML = templateCard;
}