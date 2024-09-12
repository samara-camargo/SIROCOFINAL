const peliculas = [
    {
        titulo: "El Señor de los Anillos: La Comunidad del Anillo",
        director: "Peter Jackson",
        año: 2001,
        imagen: "url_de_imagen_1.jpg",
        descripcion: "Un joven hobbit, Frodo, emprende un viaje épico para destruir el Anillo Único.",
    },
    {
        titulo: "Inception",
        director: "Christopher Nolan",
        año: 2010,
        imagen: "url_de_imagen_2.jpg",
        descripcion: "Un ladrón que roba secretos a través de la tecnología de compartir sueños.",
    },
];

function mostrarPeliculas() {
    const contenedor = document.getElementById("contenedor-peliculas");
    const modal = document.getElementById("modal");
    const modalTitulo = document.getElementById("modal-titulo");
    const modalDirector = document.getElementById("modal-director");
    const modalAño = document.getElementById("modal-año");
    const modalDescripcion = document.getElementById("modal-descripcion");

    peliculas.forEach((pelicula) => {
        // Crear un contenedor para cada película
        const peliculaDiv = document.createElement("div");
        peliculaDiv.classList.add("pelicula");

        // Crear el elemento de título
        const titulo = document.createElement("h2");
        titulo.textContent = pelicula.titulo;

        // Crear el elemento del director
        const director = document.createElement("p");
        director.textContent = Director: ${pelicula.director};

        // Crear el elemento del año
        const año = document.createElement("p");
        año.textContent = Año: ${pelicula.año};

        // Crear el elemento de la imagen
        const imagen = document.createElement("img");
        imagen.src = pelicula.imagen;
        imagen.alt = pelicula.titulo;

        // Agregar los elementos al contenedor de la película
        peliculaDiv.appendChild(titulo);
        peliculaDiv.appendChild(director);
        peliculaDiv.appendChild(año);
        peliculaDiv.appendChild(imagen);

        // Agregar el contenedor de la película al contenedor principal
        contenedor.appendChild(peliculaDiv);

        // Mostrar el modal al pasar el cursor sobre la película
        peliculaDiv.addEventListener("mouseover", () => {
            modal.style.display = "flex";
            modalTitulo.textContent = pelicula.titulo;
            modalDirector.textContent = Director: ${pelicula.director};
            modalAño.textContent = Año: ${pelicula.año};
            modalDescripcion.textContent = pelicula.descripcion;
        });

        // Ocultar el modal cuando el cursor salga de la película
        peliculaDiv.addEventListener("mouseout", () => {
            modal.style.display = "none";
        });
    });
}

mostrarPeliculas();