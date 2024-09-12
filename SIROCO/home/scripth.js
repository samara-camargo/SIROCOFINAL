const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});

const movies = [
  { id: "movie1", title: "Inception", img: "imagen/inception.jpg", desc: "A mind-bending thriller" },
  { id: "movie2", title: "12 Years a Slave", img: "imagen/12 years a slave.jpg", desc: "A gritty crime drama" },
  { id: "movie3", title: "The Dark Knight", img: "img/dark_knight.jpg", desc: "A gritty crime drama" },
  { id: "movie4", title: "The Dark Knight", img: "img/dark_knight.jpg", desc: "A gritty crime drama" },
  { id: "movie5", title: "The Dark Knight", img: "img/dark_knight.jpg", desc: "A gritty crime drama" },
  { id: "movie6", title: "The Dark Knight", img: "img/dark_knight.jpg", desc: "A gritty crime drama" },
  { id: "movie7", title: "The Dark Knight", img: "img/dark_knight.jpg", desc: "A gritty crime drama" },
  // Añade aquí más películas hasta tener 50
];

const movieList = document.getElementById("movieList");

movies.forEach((movie) => {
  const movieItem = document.createElement("div");
  movieItem.classList.add("movie-list-item");
  
  movieItem.innerHTML = `
      <img src="${movie.img}" alt="${movie.title}">
      <div class="movie-info-card">
          <h3>${movie.title}</h3>
          <p>${movie.desc}</p>
      </div>
  `;
  
  movieList.appendChild(movieItem);
});
