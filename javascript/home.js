var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  freeMode: true,
  /* paginacion, las pelotitas abajo del slider */
  /* pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }, */
  loop: true,
  autoplay: {
    delay: 2000,
    pauseOnMouseEnter: true,
  },
  watchOverFlow: true,
  breakpoints: {
    400: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 576px
    576: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
  },
});

const peliculas = [
  {
    id: 1,
    titulo: "Pulp Fiction",
    sinopsis_corta: "Una obra maestra del cine de Quentin Tarantino.",
    sinopsis_larga:
      "La película sigue varias historias entrelazadas de criminales de Los Ángeles, incluidos dos asesinos a sueldo, un boxeador y dos ladrones de joyas.",
    año: 1994,
    genero: ["Crimen", "Drama"],
    portada:
      "https://lamadraza.ugr.es/wp-content/uploads/2013/04/ab061-pulp_fiction-740215304-large.jpg",
    trailer: "https://www.youtube.com/watch?v=s7EdQ4FqbhY",
    actor_principal: "John Travolta",
    disponible: true,
    destacada: true,
  },
  {
    id: 2,
    titulo: "El Padrino",
    sinopsis_corta: "La historia de la familia Corleone.",
    sinopsis_larga:
      "La película sigue la vida de Don Vito Corleone, el jefe de una familia criminal neoyorquina, y su hijo Michael, quien gradualmente asume el control del imperio criminal de su padre.",
    año: 1972,
    genero: ["Crimen", "Drama"],
    portada:
      "https://es.web.img3.acsta.net/pictures/18/06/12/12/12/0117051.jpg?coixp=49&coiyp=27",
    trailer: "https://www.youtube.com/watch?v=sY1S34973zA",
    actor_principal: "Marlon Brando",
    disponible: true,
    destacada: false,
  },
  {
    id: 3,
    titulo: "El Señor de los Anillos: La Comunidad del Anillo",
    sinopsis_corta: "Una aventura épica en la Tierra Media.",
    sinopsis_larga:
      "Frodo Bolsón, un hobbit de la Comarca, es elegido para llevar el Anillo Único y destruirlo en el Monte del Destino.",
    año: 2001,
    genero: ["Fantasía", "Aventura"],
    portada:
      "https://pics.filmaffinity.com/El_seanor_de_los_anillos_La_comunidad_del_anillo-952398002-large.jpg",
    trailer: "https://www.youtube.com/watch?v=V75dMMIW2B4",
    actor_principal: "Elijah Wood",
    disponible: true,
    destacada: false,
  },
  {
    id: 4,
    titulo: "Interestelar",
    sinopsis_corta: "Un viaje épico en el espacio.",
    sinopsis_larga:
      "Un grupo de exploradores viaja a través de un agujero de gusano en busca de un nuevo hogar para la humanidad.",
    año: 2014,
    genero: ["Ciencia ficción", "Drama"],
    portada: "https://es.web.img3.acsta.net/pictures/14/10/02/11/07/341344.jpg",
    trailer: "https://www.youtube.com/watch?v=zSWdZVtXT7E",
    actor_principal: "Matthew McConaughey",
    disponible: true,
    destacada: false,
  },
  {
    id: 5,
    titulo: "Matrix",
    sinopsis_corta: "Una realidad simulada.",
    sinopsis_larga:
      "Un programador de software descubre que el mundo en el que vive es una simulación de realidad virtual creada por máquinas inteligentes.",
    año: 1999,
    genero: ["Ciencia ficción", "Acción"],
    portada: "https://pics.filmaffinity.com/Matrix-155050517-large.jpg",
    trailer: "https://www.youtube.com/watch?v=2KnZac176Hs",
    actor_principal: "Keanu Reeves",
    disponible: true,
    destacada: false,
  },
  {
    id: 6,
    titulo: "El Club de la Pelea",
    sinopsis_corta: "Un club clandestino de lucha.",
    sinopsis_larga:
      "Un hombre insomne y su nuevo amigo organizan clubes de lucha clandestinos como una forma de liberar su frustración reprimida y subyugar a las fuerzas del consumismo.",
    año: 1999,
    genero: ["Drama", "Suspenso"],
    portada:
      "https://i.pinimg.com/736x/8f/2e/6d/8f2e6d4a387dd4806d87c4b4fc64b521.jpg",
    trailer: "https://www.youtube.com/watch?v=SUXWAEX2jlg",
    actor_principal: "Edward Norton",
    disponible: true,
    destacada: false,
  },
  {
    id: 7,
    titulo: "Avatar",
    sinopsis_corta: "Una aventura en un mundo alienígena.",
    sinopsis_larga:
      "Un exmarine es reclutado para viajar a un planeta alienígena y participar en un programa para la explotación de sus recursos naturales, pero termina luchando por la libertad de sus habitantes.",
    año: 2009,
    genero: ["Ciencia ficción", "Aventura"],
    portada:
      "https://i.pinimg.com/originals/65/5a/e4/655ae447c7d9e6eb160e8ee07d8df4f4.jpg",
    trailer: "https://www.youtube.com/watch?v=5PSNL1qE6VY",
    actor_principal: "Sam Worthington",
    disponible: true,
    destacada: false,
  },
  {
    id: 8,
    titulo: "El Resplandor",
    sinopsis_corta: "Un hotel embrujado.",
    sinopsis_larga:
      "Un escritor y su familia se convierten en los cuidadores de un hotel aislado en el invierno, donde su hijo tiene visiones aterradoras y su cordura comienza a desmoronarse.",
    año: 1980,
    genero: ["Terror", "Drama"],
    portada: "https://es.web.img3.acsta.net/pictures/14/04/15/10/46/568345.jpg",
    trailer: "https://www.youtube.com/watch?v=O5riH5th16g",
    actor_principal: "Jack Nicholson",
    disponible: true,
    destacada: false,
  },
  {
    id: 9,
    titulo: "Titanic",
    sinopsis_corta: "Un romance épico en alta mar.",
    sinopsis_larga:
      "La historia de amor entre un pasajero de primera clase y una pasajera de tercera clase en el desafortunado viaje inaugural del Titanic.",
    año: 1997,
    genero: ["Romance", "Drama"],
    portada: "https://pics.filmaffinity.com/titanic-321994924-large.jpg",
    trailer: "https://www.youtube.com/watch?v=2e-eXJ6HgkQ",
    actor_principal: "Leonardo DiCaprio",
    disponible: true,
    destacada: false,
  },
  {
    id: 10,
    titulo: "Forrest Gump",
    sinopsis_corta: "La vida es como una caja de chocolates.",
    sinopsis_larga:
      "La vida de un hombre simple pero sincero que experimenta varios eventos históricos clave en el siglo XX mientras busca a su amor de la infancia.",
    año: 1994,
    genero: ["Drama", "Comedia"],
    portada: "https://pics.filmaffinity.com/Forrest_Gump-212765827-large.jpg",
    trailer: "https://www.youtube.com/watch?v=YNh9Es8Ut6U",
    actor_principal: "Tom Hanks",
    disponible: true,
    destacada: false,
  },
  {
    id: 11,
    titulo: "El Origen",
    sinopsis_corta: "Robando secretos del subconsciente.",
    sinopsis_larga:
      "Un ladrón habilidoso, que roba secretos corporativos a través del uso de la tecnología de los sueños, es contratado para realizar una tarea casi imposible: implantar una idea en la mente de un CEO.",
    año: 2010,
    genero: ["Ciencia ficción", "Acción"],
    portada:
      "https://es.web.img3.acsta.net/medias/nmedia/18/72/41/74/20198901.jpg",
    trailer: "https://www.youtube.com/watch?v=YoHD9XEInc0",
    actor_principal: "Leonardo DiCaprio",
    disponible: true,
    destacada: false,
  },
  {
    id: 12,
    titulo: "La La Land",
    sinopsis_corta: "Un musical romántico en Los Ángeles.",
    sinopsis_larga:
      "La historia de amor entre un aspirante a pianista de jazz y una aspirante a actriz en la ciudad de Los Ángeles.",
    año: 2016,
    genero: ["Musical", "Romance"],
    portada: "https://es.web.img3.acsta.net/pictures/16/11/30/17/44/581119.jpg",
    trailer: "https://www.youtube.com/watch?v=0pdqf4P9MB8",
    actor_principal: "Ryan Gosling",
    disponible: true,
    destacada: false,
  },
  {
    id: 13,
    titulo: "El Club de los Cinco",
    sinopsis_corta: "Cinco extraños. Un sábado.",
    sinopsis_larga:
      "Cinco adolescentes de diferentes trasfondos se encuentran atrapados en la detención de un sábado en la escuela secundaria, donde discuten sus problemas personales y encuentran similitudes entre ellos.",
    año: 1985,
    genero: ["Drama", "Comedia"],
    portada:
      "https://pics.filmaffinity.com/El_club_de_los_cinco-118334173-large.jpg",
    trailer: "https://www.youtube.com/watch?v=S7bdkCT0P8E",
    actor_principal: "Emilio Estevez",
    disponible: true,
    destacada: false,
  },
  {
    id: 14,
    titulo: "Coco",
    sinopsis_corta: "Un viaje a través de la tierra de los muertos.",
    sinopsis_larga:
      "Un niño aspirante a músico desencadena una serie de eventos que lo llevan a la Tierra de los Muertos, donde descubre el verdadero significado de la familia, el amor y la música.",
    año: 2017,
    genero: ["Animación", "Aventura"],
    portada:
      "https://i.pinimg.com/originals/52/40/93/52409341203bb9276ec911ebbda4f91d.jpg",
    trailer: "https://www.youtube.com/watch?v=Rvr68u6k5sI",
    actor_principal: "Anthony Gonzalez",
    disponible: true,
    destacada: false,
  },
  {
    id: 15,
    titulo: "Jurassic Park",
    sinopsis_corta: "Bienvenido a Jurassic Park.",
    sinopsis_larga:
      "Un multimillonario crea un parque de diversiones en el que los dinosaurios reales son los principales atractivos, pero todo sale mal cuando los dinosaurios escapan y aterrorizan a los visitantes.",
    año: 1993,
    genero: ["Ciencia ficción", "Aventura"],
    portada:
      "https://i.pinimg.com/736x/a8/a7/70/a8a7702721817c8289afefe6a8db969f.jpg",
    trailer: "https://www.youtube.com/watch?v=lc0UehYemQA",
    actor_principal: "Sam Neill",
    disponible: true,
    destacada: false,
  },
  {
    id: 16,
    titulo: "El Gran Lebowski",
    sinopsis_corta: "El Dude abides.",
    sinopsis_larga:
      "Un hombre pacífico llamado Jeffrey 'The Dude' Lebowski se ve envuelto en una serie de eventos extraños después de que confunden su identidad con la de un millonario.",
    año: 1998,
    genero: ["Comedia", "Crimen"],
    portada:
      "https://pics.filmaffinity.com/El_gran_Lebowski-547096994-large.jpg",
    trailer: "https://www.youtube.com/watch?v=cd-go0oBF4Y",
    actor_principal: "Jeff Bridges",
    disponible: true,
    destacada: false,
  },
  {
    id: 17,
    titulo: "Volver al Futuro",
    sinopsis_corta: "¡Aventuras en el tiempo!",
    sinopsis_larga:
      "Un adolescente es transportado accidentalmente a la década de 1950 en un DeLorean modificado por su excéntrico amigo, donde debe asegurarse de que sus padres se enamoren o arriesgarse a dejar de existir.",
    año: 1985,
    genero: ["Ciencia ficción", "Aventura"],
    portada:
      "https://i.pinimg.com/736x/e0/60/50/e060506f1601a7d41e8bfe55a783c1fb.jpg",
    trailer: "https://www.youtube.com/watch?v=qvsgGtivCgs",
    actor_principal: "Michael J. Fox",
    disponible: true,
    destacada: false,
  },
  {
    id: 18,
    titulo: "El Laberinto del Fauno",
    sinopsis_corta: "La imaginación puede ser peligrosa.",
    sinopsis_larga:
      "Durante la Guerra Civil Española, una joven se refugia en un laberinto donde se encuentra con un fauno que le ofrece una serie de tareas para demostrar su valentía.",
    año: 2006,
    genero: ["Fantasía", "Drama"],
    portada: "https://es.web.img3.acsta.net/pictures/16/02/25/16/13/438033.jpg",
    trailer: "https://www.youtube.com/watch?v=EqYiSlkvRuw",
    actor_principal: "Ivana Baquero",
    disponible: true,
    destacada: false,
  },
  {
    id: 19,
    titulo: "El Sexto Sentido",
    sinopsis_corta: "Veo gente muerta.",
    sinopsis_larga:
      "Un niño que puede ver y comunicarse con los muertos es ayudado por un psicólogo atormentado mientras trata de descubrir los secretos de su don.",
    año: 1999,
    genero: ["Drama", "Suspenso"],
    portada:
      "https://tecolotito.elsiglodetorreon.com.mx/blogs/163304/2019/10/5da8bdd60f07a.jpg",
    trailer: "https://www.youtube.com/watch?v=VG9AGf66tXM",
    actor_principal: "Bruce Willis",
    disponible: true,
    destacada: false,
  },
  {
    id: 23,
    titulo: "El Rey León",
    sinopsis_corta: "La épica historia del joven león Simba.",
    sinopsis_larga:
      "Simba, un joven león heredero del trono, es injustamente desterrado de su reino por su malvado tío, Scar. Con la ayuda de nuevos amigos, Simba debe encontrar el coraje para reclamar su lugar legítimo como rey.",
    año: 1994,
    genero: ["Animación", "Aventura"],
    portada:
      "https://es.web.img3.acsta.net/medias/nmedia/18/68/20/31/19785394.jpg?coixp=47&coiyp=41",
    trailer: "https://www.youtube.com/watch?v=4sj1MT05lAA",
    actor_principal: "Matthew Broderick",
    disponible: true,
    destacada: false,
  },
  {
    id: 25,
    titulo: "Batman: El Caballero de la Noche",
    sinopsis_corta: "La lucha del Caballero de la Noche contra el Joker.",
    sinopsis_larga:
      "Batman se enfrenta a su némesis definitiva, el Joker, en una batalla épica por el alma de Gotham City.",
    año: 2008,
    genero: ["Acción", "Drama"],
    portada:
      "https://es.web.img2.acsta.net/medias/nmedia/18/66/74/01/20350623.jpg",
    trailer: "https://www.youtube.com/watch?v=EXeTwQWrcwY",
    actor_principal: "Christian Bale",
    disponible: true,
    destacada: false,
  },
  {
    id: 26,
    titulo: "Sueño de Fuga",
    sinopsis_corta: "La redención en prisión.",
    sinopsis_larga:
      "La película sigue la historia de un hombre injustamente encarcelado y su lucha por la libertad y la redención dentro de las paredes de la prisión de Shawshank.",
    año: 1994,
    genero: ["Drama"],
    portada:
      "https://pics.filmaffinity.com/Cadena_perpetua-576140557-large.jpg",
    trailer: "https://www.youtube.com/watch?v=6hB3S9bIaco",
    actor_principal: "Tim Robbins",
    disponible: true,
    destacada: false,
  },
  {
    id: 32,
    titulo: "Goodfellas",
    sinopsis_corta: "Una vida en la mafia.",
    sinopsis_larga:
      "La película sigue la historia de un joven que se une a la mafia y asciende rápidamente a través de sus filas, solo para enfrentarse a las consecuencias de sus acciones.",
    año: 1990,
    genero: ["Crimen", "Drama"],
    portada:
      "https://pics.filmaffinity.com/Uno_de_los_nuestros-343032101-large.jpg",
    trailer: "https://www.youtube.com/watch?v=qo5jJpHtI1Y",
    actor_principal: "Robert De Niro",
    disponible: true,
    destacada: false,
  },
  {
    id: 33,
    titulo: "El Silencio de los Inocentes",
    sinopsis_corta: "El thriller psicológico definitivo.",
    sinopsis_larga:
      "Una joven agente del FBI busca la ayuda de un peligroso asesino en serie encarcelado para atrapar a otro asesino en serie que todavía está suelto.",
    año: 1991,
    genero: ["Crimen", "Thriller"],
    portada:
      "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    trailer: "https://www.youtube.com/watch?v=W6Mm8Sbe__o",
    actor_principal: "Anthony Hopkins",
    disponible: true,
    destacada: false,
  },
  {
    id: 34,
    titulo: "La Lista de Schindler",
    sinopsis_corta: "Una historia de coraje y redención durante el Holocausto.",
    sinopsis_larga:
      "La película cuenta la historia real de Oskar Schindler, un empresario alemán que salvó la vida de más de mil judíos polacos durante el Holocausto al emplearlos en sus fábricas y protegerlos de la persecución nazi.",
    año: 1993,
    genero: ["Biografía", "Drama"],
    portada:
      "https://pics.filmaffinity.com/La_lista_de_Schindler-473662617-large.jpg",
    trailer: "https://www.youtube.com/watch?v=JdRGC-w9syA",
    actor_principal: "Liam Neeson",
    disponible: true,
    destacada: false,
  },
  {
    id: 35,
    titulo: "Milagros Inesperados",
    sinopsis_corta: "Una historia de milagros y redención en una prisión.",
    sinopsis_larga:
      "La película sigue a un guardia de prisiones en una penitenciaría en el corredor de la muerte que descubre que uno de los reclusos tiene habilidades milagrosas.",
    año: 1999,
    genero: ["Drama", "Fantasía"],
    portada:
      "https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_FMjpg_UX1000_.jpg",
    trailer: "https://www.youtube.com/watch?v=Ki4haFrqSrw",
    actor_principal: "Tom Hanks",
    disponible: true,
    destacada: false,
  },
  {
    id: 36,
    titulo: "Gladiador",
    sinopsis_corta:
      "Un general convertido en esclavo, un esclavo convertido en gladiador, un gladiador que desafió a un imperio.",
    sinopsis_larga:
      "La película sigue la historia de Máximo Décimo Meridio, un general romano que es traicionado y convertido en esclavo, y que busca venganza contra el emperador que mató a su familia y lo condenó a la esclavitud.",
    año: 2000,
    genero: ["Acción", "Drama"],
    portada:
      "https://es.web.img3.acsta.net/medias/nmedia/18/70/92/02/20149073.jpg",
    trailer: "https://www.youtube.com/watch?v=Q-b7B8tOAQU",
    actor_principal: "Russell Crowe",
    disponible: true,
    destacada: false,
  },
  {
    id: 37,
    titulo: "Los Infiltrados",
    sinopsis_corta: "Dos hombres, dos destinos, un infierno.",
    sinopsis_larga:
      "La película sigue la historia de un policía encubierto que se infiltra en una banda criminal irlandesa y de un miembro de la banda que se infiltra en la policía. Ambos hombres luchan por descubrir la verdadera identidad del otro antes de que sea demasiado tarde.",
    año: 2006,
    genero: ["Crimen", "Drama"],
    portada:
      "https://m.media-amazon.com/images/I/510gCMld+uL._AC_UF894,1000_QL80_.jpg",
    trailer: "https://www.youtube.com/watch?v=SGWvwjZ0eDc",
    actor_principal: "Leonardo DiCaprio",
    disponible: true,
    destacada: false,
  },
  {
    id: 38,
    titulo: "Rescatando al Soldado Ryan",
    sinopsis_corta: "La misión es un hombre.",
    sinopsis_larga:
      "La película sigue a un grupo de soldados estadounidenses en la Segunda Guerra Mundial mientras buscan a un soldado desaparecido cuyos tres hermanos han sido asesinados en combate.",
    año: 1998,
    genero: ["Drama", "Bélica"],
    portada: "https://es.web.img3.acsta.net/pictures/14/03/05/09/42/163621.jpg",
    trailer: "https://www.youtube.com/watch?v=zwhP5b4tD6g",
    actor_principal: "Tom Hanks",
    disponible: true,
    destacada: false,
  },
  {
    id: 52,
    titulo: "Superbad",
    sinopsis_corta:
      "Dos amigos en su última fiesta juntos antes de ir a la universidad.",
    sinopsis_larga:
      "La película sigue a dos amigos de la escuela secundaria que intentan comprar alcohol para una fiesta, pero terminan en una serie de aventuras cómicas y desventuras.",
    año: 2007,
    genero: ["Comedia"],
    portada: "https://pics.filmaffinity.com/Supersalidos-743461969-large.jpg",
    trailer: "https://www.youtube.com/watch?v=MNpoTxeydiY",
    actor_principal: "Jonah Hill",
    disponible: true,
    destacada: false,
  },
  {
    id: 53,
    titulo: "Anchorman: The Legend of Ron Burgundy",
    sinopsis_corta:
      "Un reportero de noticias lucha por mantener su posición en la televisión.",
    sinopsis_larga:
      "La película sigue a Ron Burgundy, un popular reportero de noticias de televisión, y su lucha por mantener su posición en el mundo de las noticias después de que una mujer se una al equipo de noticias.",
    año: 2004,
    genero: ["Comedia"],
    portada:
      "https://m.media-amazon.com/images/M/MV5BYjFhY2E3NzItZmQ0MS00MjBkLTk1MmYtNzgwZmJkYTllODcwXkEyXkFqcGdeQXVyMDYxMTUwNg@@._V1_.jpg",
    trailer: "https://www.youtube.com/watch?v=-T3wnP91OnI",
    actor_principal: "Will Ferrell",
    disponible: true,
  },
  {
    id: 54,
    titulo: "La Boda de mi Mejor Amiga",
    sinopsis_corta:
      "Una dama de honor enloquece mientras planea la boda de su mejor amiga.",
    sinopsis_larga:
      "La película sigue a una dama de honor que lucha por mantenerse al día con las demandas de la boda de su mejor amiga, lo que resulta en una serie de situaciones cómicas.",
    año: 2011,
    genero: ["Comedia"],
    portada:
      "https://pics.filmaffinity.com/La_boda_de_mi_mejor_amiga-541248753-large.jpg",
    trailer: "https://www.youtube.com/watch?v=FNppLrmdyug",
    actor_principal: "Kristen Wiig",
    disponible: true,
    destacada: false,
  },
  {
    id: 55,
    titulo: "¿Qué Pasó Ayer?",
    sinopsis_corta: "Una despedida de soltero se sale de control.",
    sinopsis_larga:
      "La película sigue a un grupo de amigos que viajan a Las Vegas para celebrar una despedida de soltero, pero se despiertan al día siguiente sin recordar nada de la noche anterior y sin encontrar al novio.",
    año: 2009,
    genero: ["Comedia"],
    portada:
      "https://m.media-amazon.com/images/M/MV5BNGQwZjg5YmYtY2VkNC00NzliLTljYTctNzI5NmU3MjE2ODQzXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    trailer: "https://www.youtube.com/watch?v=tcdUhdOlz9M",
    actor_principal: "Zach Galifianakis",
    disponible: true,
    destacada: false,
  },
  {
    id: 56,
    titulo: "Tonto y Retonto",
    sinopsis_corta:
      "Dos amigos con un coeficiente intelectual bajo se embarcan en un viaje por carretera.",
    sinopsis_larga:
      "La película sigue a dos amigos con un coeficiente intelectual bajo que viajan por carretera para devolver un maletín a una mujer.",
    año: 1994,
    genero: ["Comedia"],
    portada:
      "https://m.media-amazon.com/images/M/MV5BZDQwMjNiMTQtY2UwYy00NjhiLTk0ZWEtZWM5ZWMzNGFjNTVkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
    trailer: "https://www.youtube.com/watch?v=l13yPhimE3o",
    actor_principal: "Jim Carrey",
    disponible: true,
    destacada: false,
  },
  {
    id: 57,
    titulo: "Virgen a los 40",
    sinopsis_corta: "Un hombre de 40 años nunca ha tenido relaciones sexuales.",
    sinopsis_larga:
      "La película sigue a un hombre de 40 años que nunca ha tenido relaciones sexuales y sus amigos intentan ayudarlo a perder su virginidad.",
    año: 2005,
    genero: ["Comedia"],
    portada:
      "https://images.moviesanywhere.com/53c109712006fd3870a74506bf4c9a76/2b074644-ed18-4eed-890f-089f90db8b2f.jpg",
    trailer: "https://www.youtube.com/watch?v=h5dJxlLr0Gs",
    actor_principal: "Steve Carell",
    disponible: true,
    destacada: false,
  },
  {
    id: 58,
    titulo: "Este es el Fin",
    sinopsis_corta:
      "Los actores se enfrentan al apocalipsis durante una fiesta en Hollywood.",
    sinopsis_larga:
      "La película sigue a un grupo de actores que se enfrentan al apocalipsis mientras asisten a una fiesta en la casa de James Franco en Hollywood.",
    año: 2013,
    genero: ["Comedia"],
    portada:
      "https://pics.filmaffinity.com/Juerga_hasta_el_fin-855113829-large.jpg",
    trailer: "https://www.youtube.com/watch?v=Yma-g4gTwlE",
    actor_principal: "James Franco",
    disponible: true,
    destacada: false,
  },
  {
    id: 59,
    titulo: "Napoleón Dinamita",
    sinopsis_corta:
      "Un estudiante de secundaria con habilidades únicas intenta ganar una elección estudiantil.",
    sinopsis_larga:
      "La película sigue a un estudiante de secundaria excéntrico con habilidades únicas mientras intenta ayudar a su amigo a ganar una elección estudiantil.",
    año: 2004,
    genero: ["Comedia"],
    portada:
      "https://es.web.img2.acsta.net/medias/nmedia/18/92/57/45/20206870.jpg",
    trailer: "https://www.youtube.com/watch?v=ZHDi_AnqwN4",
    actor_principal: "Jon Heder",
    disponible: true,
    destacada: false,
  },
  {
    id: 60,
    titulo: "Muertos de Risa",
    sinopsis_corta: "Una comedia de zombies.",
    sinopsis_larga:
      "La película sigue a un hombre que intenta reconciliarse con su novia mientras enfrenta un brote de zombis en su ciudad natal.",
    año: 2004,
    genero: ["Comedia", "Terror"],
    portada:
      "https://www.panteracine.com/wp-content/uploads/2019/01/shaun-of-the-dead.jpg",
    trailer: "https://www.youtube.com/watch?v=OMitSKT-u_k",
    actor_principal: "Simon Pegg",
    disponible: true,
    destacada: false,
  },
  {
    id: 61,
    titulo: "Hot Fuzz",
    sinopsis_corta:
      "Dos policías investigan una serie de extrañas muertes en un pueblo.",
    sinopsis_larga:
      "La película sigue a dos policías que investigan una serie de extrañas muertes en un tranquilo pueblo inglés.",
    año: 2007,
    genero: ["Comedia", "Acción"],
    portada: "https://pics.filmaffinity.com/Arma_fatal-238692781-large.jpg",
    trailer: "https://www.youtube.com/watch?v=ayTnvVpj9t4",
    actor_principal: "Simon Pegg",
    disponible: true,
  },
  {
    id: 62,
    titulo: "El Exorcista",
    sinopsis_corta: "Una niña es poseída por un demonio.",
    sinopsis_larga:
      "La película sigue a una niña que es poseída por un demonio, y dos sacerdotes son llamados para realizar un exorcismo en ella.",
    año: 1973,
    genero: ["Terror"],
    portada:
      "https://i.pinimg.com/474x/ab/3e/63/ab3e637f837a70ece10ce89698794354.jpg",
    trailer: "https://www.youtube.com/watch?v=YDGw1MTEe9k",
    actor_principal: "Ellen Burstyn",
    disponible: true,
    destacada: false,
  },
  {
    id: 64,
    titulo: "Psycho",
    sinopsis_corta: "Un joven asesina a una mujer en un motel.",
    sinopsis_larga:
      "La película sigue a un joven que asesina a una mujer en un motel y se convierte en el punto focal de una investigación policial.",
    año: 1960,
    genero: ["Terror", "Suspenso"],
    portada:
      "https://i.etsystatic.com/23647903/r/il/fee886/2447996988/il_570xN.2447996988_ifrn.jpg",
    trailer: "https://www.youtube.com/watch?v=Wz719b9QUqY",
    actor_principal: "Anthony Perkins",
    disponible: true,
    destacada: false,
  },
  {
    id: 65,
    titulo: "Hereditary",
    sinopsis_corta:
      "Una familia descubre oscuros secretos después de la muerte de la abuela.",
    sinopsis_larga:
      "La película sigue a una familia que descubre oscuros secretos después de la muerte de su abuela, y comienzan a experimentar eventos paranormales aterradores.",
    año: 2018,
    genero: ["Terror", "Drama"],
    portada: "https://pics.filmaffinity.com/Hereditary-551635712-large.jpg",
    trailer: "https://www.youtube.com/watch?v=V6wWKNij_1M",
    actor_principal: "Toni Collette",
    disponible: true,
    destacada: false,
  },
  {
    id: 66,
    titulo: "Pesadilla en la Calle Elm",
    sinopsis_corta: "Un asesino aterroriza a adolescentes en sus sueños.",
    sinopsis_larga:
      "La película sigue a un asesino que aterroriza a adolescentes en sus sueños, y si son asesinados en sus sueños, también mueren en la vida real.",
    año: 1984,
    genero: ["Terror"],
    portada:
      "https://pics.filmaffinity.com/Pesadilla_en_Elm_Street-790429633-large.jpg",
    trailer: "https://www.youtube.com/watch?v=dCVh4lBfW-c",
    actor_principal: "Robert Englund",
    disponible: true,
  },
  {
    id: 67,
    titulo: "El Conjuro",
    sinopsis_corta:
      "Dos investigadores paranormales ayudan a una familia aterrorizada por espíritus malignos.",
    sinopsis_larga:
      "La película sigue a dos investigadores paranormales que ayudan a una familia aterrorizada por espíritus malignos en su nueva casa.",
    año: 2013,
    genero: ["Terror"],
    portada:
      "https://mx.web.img3.acsta.net/pictures/19/03/20/19/26/1988298.jpg",
    trailer: "https://www.youtube.com/watch?v=k10ETZ41q5o",
    actor_principal: "Vera Farmiga",
    disponible: true,
    destacada: false,
  },
  {
    id: 68,
    titulo: "Está Detrás de ti",
    sinopsis_corta:
      "Una joven es perseguida por una entidad sobrenatural después de una experiencia sexual.",
    sinopsis_larga:
      "La película sigue a una joven que es perseguida por una entidad sobrenatural después de una experiencia sexual, y debe encontrar una manera de deshacerse de la maldición.",
    año: 2014,
    genero: ["Terror"],
    portada: "https://es.web.img2.acsta.net/pictures/15/04/08/11/10/450469.jpg",
    trailer: "https://www.youtube.com/watch?v=HkZYbOH0ujw",
    actor_principal: "Maika Monroe",
    disponible: true,
    destacada: false,
  },
  {
    id: 69,
    titulo: "¡Huye!",
    sinopsis_corta:
      "Un hombre negro visita la casa de la familia de su novia blanca y descubre oscuros secretos.",
    sinopsis_larga:
      "La película sigue a un hombre negro que visita la casa de la familia de su novia blanca y descubre oscuros secretos sobre ellos.",
    año: 2017,
    genero: ["Terror", "Misterio"],
    portada:
      "https://i.pinimg.com/originals/2a/24/9f/2a249f7342ae03aea1f9604d00bf821c.jpg",
    trailer: "https://www.youtube.com/watch?v=DzfpyUB60YY",
    actor_principal: "Daniel Kaluuya",
    disponible: true,
    destacada: false,
  },
  {
    id: 70,
    titulo: "The Babadook",
    sinopsis_corta:
      "Una madre y su hijo son perseguidos por una criatura aterradora de un libro de cuentos.",
    sinopsis_larga:
      "La película sigue a una madre y su hijo que son perseguidos por una criatura aterradora de un libro de cuentos que aparece en su casa.",
    año: 2014,
    genero: ["Terror", "Drama"],
    portada: "https://es.web.img2.acsta.net/pictures/14/12/30/13/18/131383.jpg",
    trailer: "https://www.youtube.com/watch?v=szaLnKNWC-U",
    actor_principal: "Essie Davis",
    disponible: true,
    destacada: false,
  },
  {
    id: 71,
    titulo: "Los Otros",
    sinopsis_corta:
      "Una madre y sus hijos viven en una casa aislada y comienzan a experimentar sucesos paranormales.",
    sinopsis_larga:
      "La película sigue a una madre y sus hijos que viven en una casa aislada y comienzan a experimentar sucesos paranormales, pero pronto descubren que no están solos.",
    año: 2001,
    genero: ["Terror", "Suspenso"],
    portada:
      "https://1.bp.blogspot.com/-hnTYFporj8w/X4YsH-9QAaI/AAAAAAAAF1E/qWzPj7LTeKsA0f0WPXXUZsJtecXcek5pQCLcBGAsYHQ/s1468/The%2BOthers%2BPoster.jpg",
    trailer: "https://www.youtube.com/watch?v=0bMEGtUxajY",
    actor_principal: "Nicole Kidman",
    disponible: true,
  },
  {
    id: 72,
    titulo: "Duro de Matar",
    sinopsis_corta:
      "Un policía lucha contra terroristas que toman un edificio durante una fiesta.",
    sinopsis_larga:
      "La película sigue a un policía que lucha contra terroristas que toman un edificio durante una fiesta navideña, donde su esposa está entre los rehenes.",
    año: 1988,
    genero: ["Acción", "Suspenso"],
    portada:
      "https://m.media-amazon.com/images/M/MV5BZjRlNDUxZjAtOGQ4OC00OTNlLTgxNmQtYTBmMDgwZmNmNjkxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    trailer: "https://www.youtube.com/watch?v=2TQ-pOvI6Xo",
    actor_principal: "Bruce Willis",
    disponible: true,
    destacada: false,
  },
  {
    id: 73,
    titulo: "Mad Max: Fury Road",
    sinopsis_corta:
      "Un hombre lucha por sobrevivir en un mundo post-apocalíptico.",
    sinopsis_larga:
      "La película sigue a un hombre que lucha por sobrevivir en un mundo post-apocalíptico y se une a un grupo de rebeldes en una misión para liberar a un grupo de mujeres esclavizadas por un tirano.",
    año: 2015,
    genero: ["Acción", "Ciencia Ficción"],
    portada:
      "https://m.media-amazon.com/images/M/MV5BN2EwM2I5OWMtMGQyMi00Zjg1LWJkNTctZTdjYTA4OGUwZjMyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
    trailer: "https://www.youtube.com/watch?v=akX3Is3qBpw",
    actor_principal: "Tom Hardy",
    disponible: true,
    destacada: false,
  },
  {
    id: 78,
    titulo: "John Wick",
    sinopsis_corta:
      "Un ex asesino busca venganza después de que le roban su auto y matan a su perro.",
    sinopsis_larga:
      "La película sigue a un ex asesino que busca venganza después de que le roban su auto y matan a su perro, lo que lo lleva a enfrentarse a la mafia rusa.",
    año: 2014,
    genero: ["Acción", "Crimen"],
    portada:
      "https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/peliculas/john-wick-pacto-de-sangre/120113874-1-esl-ES/John-Wick-Pacto-de-sangre.png",
    trailer: "https://www.youtube.com/watch?v=C0BMx-qxsP4",
    actor_principal: "Keanu Reeves",
    disponible: true,
    destacada: false,
  },
  {
    id: 79,
    titulo: "Kill Bill: Vol. 1",
    sinopsis_corta:
      "Una mujer busca venganza contra sus antiguos compañeros asesinos.",
    sinopsis_larga:
      "La película sigue a una mujer que busca venganza contra sus antiguos compañeros asesinos después de que la dejan por muerta en una masacre.",
    año: 2003,
    genero: ["Acción", "Crimen"],
    portada: "https://es.web.img3.acsta.net/pictures/14/05/07/12/38/160972.jpg",
    trailer: "https://www.youtube.com/watch?v=7kSuas6mRpk",
    actor_principal: "Uma Thurman",
    disponible: true,
    destacada: false,
  },
  {
    id: 80,
    titulo: "Identidad Desconocida",
    sinopsis_corta:
      "Un hombre con amnesia descubre que es un agente secreto y es perseguido por la CIA.",
    sinopsis_larga:
      "La película sigue a un hombre con amnesia que descubre que es un agente secreto y es perseguido por la CIA mientras intenta descubrir su verdadera identidad.",
    año: 2002,
    genero: ["Acción", "Espionaje"],
    portada: "https://es.web.img3.acsta.net/pictures/14/03/24/11/41/592362.jpg",
    trailer: "https://www.youtube.com/watch?v=FpKaB5dvQ4g",
    actor_principal: "Matt Damon",
    disponible: true,
    destacada: false,
  },
  {
    id: 81,
    titulo: "Terminator 2: El Juicio Final",
    sinopsis_corta:
      "Un cyborg regresa del futuro para proteger a un niño de otro cyborg enviado para matarlo.",
    sinopsis_larga:
      "La película sigue a un cyborg que regresa del futuro para proteger a un niño de otro cyborg enviado para matarlo, mientras enfrenta una batalla para salvar el futuro de la humanidad.",
    año: 1991,
    genero: ["Acción", "Ciencia Ficción"],
    portada:
      "https://pics.filmaffinity.com/Terminator_2_El_juicio_final-825143697-large.jpg",
    trailer: "https://www.youtube.com/watch?v=lwSysg9o7wE",
    actor_principal: "Arnold Schwarzenegger",
    disponible: true,
    destacada: false,
  },
  {
    id: 82,
    titulo: "Indiana Jones y los Cazadores del Arca Perdida",
    sinopsis_corta:
      "Un arqueólogo lucha contra los nazis en busca de un artefacto religioso.",
    sinopsis_larga:
      "La película sigue a un arqueólogo que lucha contra los nazis en busca de un artefacto religioso que puede otorgar poderes sobrenaturales.",
    año: 1981,
    genero: ["Acción", "Aventura"],
    portada:
      "https://m.media-amazon.com/images/M/MV5BNTU2ODkyY2MtMjU1NC00NjE1LWEzYjgtMWQ3MzRhMTE0NDc0XkEyXkFqcGdeQXVyMjM4MzQ4OTQ@._V1_FMjpg_UX1000_.jpg",
    trailer: "https://www.youtube.com/watch?v=0ZOcoxjeUYo",
    actor_principal: "Harrison Ford",
    disponible: true,
    destacada: false,
  },
  {
    id: 83,
    titulo: "Blade Runner",
    sinopsis_corta:
      "Un detective caza a androides fugitivos en un futuro distópico.",
    sinopsis_larga:
      "La película sigue a un detective que caza a androides fugitivos conocidos como replicantes en un futuro distópico, mientras reflexiona sobre lo que significa ser humano.",
    año: 1982,
    genero: ["Ciencia Ficción", "Neo-noir"],
    portada: "https://pics.filmaffinity.com/Blade_Runner-351607743-mmed.jpg",
    trailer: "https://www.youtube.com/watch?v=eogpIG53Cis",
    actor_principal: "Harrison Ford",
    disponible: true,
    destacada: false,
  },
  {
    id: 84,
    titulo: "El Quinto Elemento",
    sinopsis_corta:
      "Un taxista y una extraterrestre se unen para salvar al mundo de la destrucción.",
    sinopsis_larga:
      "La película sigue a un taxista y una extraterrestre que se unen para salvar al mundo de la destrucción, protegiendo a un elemento vital que puede evitar la aniquilación.",
    año: 1997,
    genero: ["Ciencia Ficción", "Acción"],
    portada:
      "https://pics.filmaffinity.com/El_quinto_elemento-198425470-large.jpg",
    trailer: "https://www.youtube.com/watch?v=fQ9RqgcR24g",
    actor_principal: "Bruce Willis",
    disponible: true,
  },
  {
    id: 87,
    titulo: "Matrix Recargado",
    sinopsis_corta: "Neo se enfrenta a nuevas amenazas en el mundo virtual.",
    sinopsis_larga:
      "La película sigue a Neo mientras se enfrenta a nuevas amenazas en el mundo virtual creado por las máquinas, mientras intenta descubrir el destino de la humanidad.",
    año: 2003,
    genero: ["Ciencia Ficción", "Acción"],
    portada:
      "https://pics.filmaffinity.com/Matrix_Reloaded-153250831-large.jpg",
    trailer: "https://www.youtube.com/watch?v=vKQi3bBA1y8",
    actor_principal: "Keanu Reeves",
    disponible: true,
    destacada: false,
  },
  {
    id: 88,
    titulo: "E.T. el Extraterrestre",
    sinopsis_corta:
      "Un niño ayuda a un alienígena a regresar a su hogar mientras evita a las autoridades.",
    sinopsis_larga:
      "La película sigue a un niño que ayuda a un alienígena a regresar a su hogar mientras evita a las autoridades y forma un vínculo emocional con el ser de otro mundo.",
    año: 1982,
    genero: ["Ciencia Ficción", "Familiar"],
    portada:
      "https://pics.filmaffinity.com/E_T_el_extraterrestre-391240254-large.jpg",
    trailer: "https://www.youtube.com/watch?v=qYAETtIIClk",
    actor_principal: "Henry Thomas",
    disponible: true,
    destacada: false,
  },
  {
    id: 91,
    titulo: "Misión Rescate",
    sinopsis_corta:
      "Un astronauta queda varado en Marte y lucha por sobrevivir hasta el rescate.",
    sinopsis_larga:
      "La película sigue a un astronauta que queda varado en Marte y lucha por sobrevivir utilizando su ingenio y conocimientos científicos hasta que pueda ser rescatado por su tripulación y la NASA.",
    año: 2015,
    genero: ["Ciencia Ficción", "Aventura"],
    portada: "https://es.web.img3.acsta.net/pictures/15/08/27/13/26/081921.jpg",
    trailer: "https://www.youtube.com/watch?v=ej3ioOneTy8",
    actor_principal: "Matt Damon",
    disponible: true,
    destacada: false,
  },
  {
    id: 92,
    titulo: "The Truman Show",
    sinopsis_corta:
      "Un hombre descubre que su vida es un programa de televisión en un mundo artificial.",
    sinopsis_larga:
      "La película sigue a un hombre que descubre que su vida es un programa de televisión en un mundo artificial creado para el entretenimiento de las masas, mientras intenta escapar de su existencia controlada.",
    año: 1998,
    genero: ["Ciencia Ficción", "Drama"],
    portada:
      "https://pics.filmaffinity.com/El_show_de_Truman-130091557-large.jpg",
    trailer: "https://www.youtube.com/watch?v=5nG7p5Xtrgo",
    actor_principal: "Jim Carrey",
    disponible: true,
    destacada: false,
  },
];

(() => {
  const cargaPeliculasLS = () => {
    if (!localStorage.getItem("peliculas")) {
      localStorage.setItem("peliculas", JSON.stringify(peliculas));
    }
  };
  cargaPeliculasLS();
})();

const traerPeliculasLS = () => {
  const arrayPeliculas = JSON.parse(localStorage.getItem("peliculas"));
  return arrayPeliculas;
};

let arrayPeliculas = traerPeliculasLS();

const buscarPeliculaDestacada = () => {
  let peliculaDestacadaF = null;
  arrayPeliculas.forEach((pelicula) => {
    if (pelicula.destacada === true) {
      peliculaDestacadaF = pelicula;
    }
  });
  return peliculaDestacadaF;
};

const peliculaDestacada = buscarPeliculaDestacada();

(() => {
  const peliculaDestacadaInner = () => {
    const divPeliculaDestacada = document.getElementById("divPeliDestacada");

    const destacadaHTML = `
    <img
    src="${peliculaDestacada.portada}"
    alt="banner pelicula destacada"
    class="w-100 destacada"
    />
    <div class="texto-destacada d-flex flex-column bg-color-3 ps-5 justify-content-center">
      <div class="d-flex justify-content-between align-items-center">
        <div>
          <h2 class="letter-color-5 fw-bold">${peliculaDestacada.titulo}</h2>
          <p class="letter-color-5 fw-bold">${peliculaDestacada.sinopsis_corta}</p>
          <a
          href="detallePelicula.html?id=${peliculaDestacada.id}"
            class="fw-bold btn-custom text-decoration-none"
            >Mas Detalles</a
          >
        </div>
        <img
          src="${peliculaDestacada.portada}"
          alt="portada de la pelicula destacada"
          class="additional-image"
        />
      </div>
    </div>
    `;

    divPeliculaDestacada.innerHTML = destacadaHTML;
  };

  // Llama a la función para mostrar los detalles cuando se carga la página
  peliculaDestacadaInner();
})();

(() => {
  const mapCards = () => {
    const divPeliculas = document.getElementById("cardPeliculas1");
    const peliculasDrama = arrayPeliculas.filter((peli) =>
      peli.genero.includes("Drama")
    ); // Filtrar películas por el género "Drama"
    divPeliculas.innerHTML = peliculasDrama
      .map(
        (peli) => `
      <div class="swiper-slide">
      <div class="col">
        <div class="card-image-container h-100">
          <img
            src="${peli.portada}"
            class="card-img"
            alt="${`portada` + peli.titulo}"
            style="height: 50vh; object-fit: cover;"
          />
          <div class="card-image-overlay pt-5">
            <p class="letter-color-1">${peli.sinopsis_corta}</p>
            <p class="letter-color-1 fw-bold"><small>${peli.genero.join(
              " - "
            )}</small></p>
            <a
              href="detallePelicula.html?id=${peli.id}"
              class="fw-bold btn-custom text-decoration-none position-relative z-3"
            >
              Mas Detalles
            </a>
          </div>
          <a
          href="detallePelicula.html?id=${peli.id}"
            class="text-decoration-none position-relative z-3"
          >
            <h5 class="letter-color-5 mt-2 text-center">${peli.titulo}</h5>
          </a>
        </div>
      </div>
    </div>
        `
      )
      .join("");
  };

  mapCardsD(); // Llama a la función inmediatamente
})();
(() => {
  const mapCardsCF = () => {
    const divPeliculas = document.getElementById("cardPeliculas2");
    const peliculasDrama = arrayPeliculas.filter((peli) =>
      peli.genero.includes("Ciencia Ficción")
    ); // Filtrar películas por el género "Drama"
    divPeliculas.innerHTML = peliculasDrama
      .map(
        (peli) => `
      <div class="swiper-slide">
      <div class="col">
        <div class="card-image-container h-100">
          <img
            src="${peli.portada}"
            class="card-img"
            alt="${`portada` + peli.titulo}"
            style="height: 50vh; object-fit: cover;"
          />
          <div class="card-image-overlay pt-5">
            <p class="letter-color-1">${peli.sinopsis_corta}</p>
            <p class="letter-color-1 fw-bold"><small>${peli.genero.join(
              " - "
            )}</small></p>
            <a
            href="detallePelicula.html?id=${peli.id}"
              class="fw-bold btn-custom text-decoration-none position-relative z-3"
            >
              Mas Detalles
            </a>
          </div>
          <a
          href="detallePelicula.html?id=${peli.id}"
            class="text-decoration-none position-relative z-3"
          >
            <h5 class="letter-color-5 mt-2 text-center">${peli.titulo}</h5>
          </a>
        </div>
      </div>
    </div>
        `
      )
      .join("");
  };

  mapCardsCF(); // Llama a la función inmediatamente
})();
(() => {
  const mapCardsT = () => {
    const divPeliculas = document.getElementById("cardPeliculas3");
    const peliculasDrama = arrayPeliculas.filter((peli) =>
      peli.genero.includes("Terror")
    ); // Filtrar películas por el género "Drama"
    divPeliculas.innerHTML = peliculasDrama
      .map(
        (peli) => `
      <div class="swiper-slide">
      <div class="col">
        <div class="card-image-container h-100">
          <img
            src="${peli.portada}"
            class="card-img"
            alt="${`portada` + peli.titulo}"
            style="height: 50vh; object-fit: cover;"
          />
          <div class="card-image-overlay pt-5">
            <p class="letter-color-1">${peli.sinopsis_corta}</p>
            <p class="letter-color-1 fw-bold"><small>${peli.genero.join(
              " - "
            )}</small></p>
            <a
            href="detallePelicula.html?id=${peli.id}"
              class="fw-bold btn-custom text-decoration-none position-relative z-3"
            >
              Mas Detalles
            </a>
          </div>
          <a
          href="detallePelicula.html?id=${peli.id}"
            class="text-decoration-none position-relative z-3"
          >
            <h5 class="letter-color-5 mt-2 text-center">${peli.titulo}</h5>
          </a>
        </div>
      </div>
    </div>
        `
      )
      .join("");
  };

  mapCardsT(); // Llama a la función inmediatamente
})();
(() => {
  const mapCardsC = () => {
    const divPeliculas = document.getElementById("cardPeliculas4");
    const peliculasDrama = arrayPeliculas.filter((peli) =>
      peli.genero.includes("Comedia")
    ); // Filtrar películas por el género "Drama"
    divPeliculas.innerHTML = peliculasDrama
      .map(
        (peli) => `
      <div class="swiper-slide">
      <div class="col">
        <div class="card-image-container h-100">
          <img
            src="${peli.portada}"
            class="card-img"
            alt="${`portada` + peli.titulo}"
            style="height: 50vh; object-fit: cover;"
          />
          <div class="card-image-overlay pt-5">
            <p class="letter-color-1">${peli.sinopsis_corta}</p>
            <p class="letter-color-1 fw-bold"><small>${peli.genero.join(
              " - "
            )}</small></p>
            <a
            href="detallePelicula.html?id=${peli.id}"
              class="fw-bold btn-custom text-decoration-none position-relative z-3"
            >
              Mas Detalles
            </a>
          </div>
          <a
          href="detallePelicula.html?id=${peli.id}"
            class="text-decoration-none position-relative z-3"
          >
            <h5 class="letter-color-5 mt-2 text-center">${peli.titulo}</h5>
          </a>
        </div>
      </div>
    </div>
        `
      )
      .join("");
  };

  mapCardsC(); // Llama a la función inmediatamente
})();
