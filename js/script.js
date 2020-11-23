function showMovies(movies) {
  const movieList = document.getElementById('movie-list');
  movieList.innerHTML = '';
  window.scroll(0,0);
  for (let i = 0; i < movies.length; i += 1) {
    const listItem = document.createElement('li');
    movieList.appendChild(listItem);
    fetch(`http://www.omdbapi.com/?apikey=e3d5bf6f&i=${movies[i].imdbID}`)
    .then((response) => response.json())
    .then((data) => {
      const divtitle= document.createElement('div');
      divtitle.setAttribute('class', 'acordeon');
      divtitle.setAttribute('id', `${movies[i].imdbID}`);
      listItem.appendChild(divtitle);
      const botonPrincipal = document.createElement('button');
      botonPrincipal.setAttribute('class', 'boton')
      botonPrincipal.innerHTML = movies[i].Title;
      divtitle.appendChild(botonPrincipal);
      const section = document.createElement('div');
      section.setAttribute('id', 'divGrande');
      section.setAttribute('class','clearfix');
      listItem.appendChild(section);
      const section1 = document.createElement('div');
      section1.setAttribute('id','left');
      section.appendChild(section1);
      const image = document.createElement('img');
      image.setAttribute('src',movies[i].Poster);
      section1.appendChild(image);
      const section2 = document.createElement('div');
      section2.setAttribute('id','right');
      section.appendChild(section2);
      const p1 = document.createElement('p');
      p1.innerHTML = movies[i].Year
      section2.appendChild(p1);
      const p2 = document.createElement('p');
      p2.innerHTML = data.Runtime
      section2.appendChild(p2);
      const p3 = document.createElement('p');
      p3.innerHTML = data.Actors
      section2.appendChild(p3);
      const p4 = document.createElement('p');
      p4.innerHTML = data.Metascore
      section2.appendChild(p4);
      const p5 = document.createElement('p');
      p5.innerHTML = data.Plot
      section2.appendChild(p5);

      const acordeon = document.getElementById(`${movies[i].imdbID}`);
        acordeon.addEventListener('click', (event) => {
          event.preventDefault();
          const elemento = event.currentTarget;
          const info = elemento.nextElementSibling;
          if (info.style.display === 'block') {
            info.style.display = 'none';
          } else {
            info.style.display = 'block';
          }
        });
    })
  }
}

const form = document.getElementById("formulario");
form.addEventListener('submit',(event) =>{
  event.preventDefault();
  const atributo = form.elements[0].value;
  console.log(atributo);
  fetch(`http://www.omdbapi.com/?apikey=e3d5bf6f&s=${atributo}`)
  .then((response) => response.json())
  .then((data) => {
    showMovies(data.Search);
  });
})

// Botón para ir a la siguiente pagina
let contador = 1;
const loadMore = document.getElementById('load-more');
  loadMore.addEventListener('click', (event) =>{
  event.preventDefault();
  contador = contador+=1;
  const atributo = form.elements[0].value;
  fetch(`http://www.omdbapi.com/?apikey=e3d5bf6f&s=${atributo}/&page=${contador}`)
  .then((response) => response.json())
  .then((data) => {
    showMovies(data.Search);
  });
})
