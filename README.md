**Api JS Juan Ignacio**

Mejoras implementadas en el JS con el API de movies y paso a paso el desarrollo del codigo 

**1- Convierto todo lo que estaba en content asignado por el profe el cual estaba en HTML y lo paso a JS, en este caso se utiliza create element y appendchild.**

      const divtitle= document.createElement('div');
            divtitle.setAttribute('class', 'acordeon')
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
            

**2-Creo un boton con un fetch y utilizo un evento para poder hacer cuando se le de click, se diriga a la pagina siguiente y muestre las peliculas de la siguiente pagina, con el valor asignado en el otro fetch que trae el value**

**Esta es la mejora que implemente **

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


**3- Creo un acordeon el cual funciona como un evento que cuando se le da click varia entre un display block o un display none y lo aplica al nextelementsibling del div actual en el cual este realiza el cambio correspondiente.**

      const acordeon = document.querySelectorAll('.acordeon');
      for (let i = 0; i < acordeon.length; i += 1) {
        acordeon[i].addEventListener('click', (event) => {
          event.preventDefault();
          const elemento = event.currentTarget;
          const info = elemento.nextElementSibling;
          if (info.style.display === 'block') {
            info.style.display = 'none';
          } else {
            info.style.display = 'block';
            

**4- Creo el fetch base el cual trae una parte de la informacion del API como por ejemplo el año, la imagen etc este funciona adjuntandole al search como opcion de busqueda el s y el nombre de la pelicula **.

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

**5- Creo el fetch con el id el cual me trae la informacion extra de cada pelicula, esta parte para mi fue la mas dificil ya que habian demasiadas opciones pero solo esta me funcionaba en un 95% el cual va dentro del for y trae toda la informacion de lo que se le solicita y dentro de then data va lo que es todo el contenido ya que si no pongo este fetch dentro del for no me jala ningun dato.     


      fetch(`http://www.omdbapi.com/?apikey=e3d5bf6f&i=${movies[i].imdbID}`)
          .then((response) => response.json())
          .then((data) => {


  
