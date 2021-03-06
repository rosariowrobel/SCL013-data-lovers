//Importamos archivos .js

import data from './data/pokemon/pokemon.js';
import {pokeId, filterData, filterType, filterName} from './data.js';

//console.log(data);

//////////Primero creamos las funciones de modal y filtros //////////

//Creamos el modal para llamar a la tarjetas
const modal = () => {
  let modalBig= document.querySelectorAll("div.cards"); //usamos querySelectorAll para llamar a la lista de elementos de la data 
  for (let i = 0; i <modalBig.length; i++){
    modalBig[i].addEventListener("click", () => {
      document.getElementById("modalContainer").innerHTML = "";
      let pokemon = pokeId(modalBig[i].getAttribute("value"));

//Generamos variables para el contenido de cada modal usando createElement crea elemento en el HTML. Tambien de esta forma la pasamos a español// 


  //Creamos cartas para los pokemones  
  let cards= document.createElement("div");
  cards.className ="modalCards";
   cards.id = "modalCards";


  //Creamos el boton cerrar 
   let span = document.createElement("span");
   span.className = "close";
   span.textContent = "X";


  //Creamos el nombre del Pokemon
  let name = document.createElement("h3");
  name.textContent = pokemon.name;


  //Creamos la imagen
  let image = document.createElement("img");
  image.src =pokemon.img;


  //Creamos el peso
  let weight = document.createElement("p");
  weight.className = "peso";
  weight.textContent = "Peso: "+pokemon.weight; 


  //Creamos la altura
  let height = document.createElement("p");
  height.className = "altura";
  height.textContent = "Altura: "+pokemon.height;


  

  //Llamamos las variables y  utilizamos appendChild hace referencia al nodo de la data  
  cards.appendChild(span);
  cards.appendChild(name);
  cards.appendChild(image);
  cards.appendChild(weight);
  cards.appendChild(height);
  
  //En el container realizado, mostramos las tarjetas en nuestro HTML  
  document.getElementById("modalContainer").appendChild(cards).innerHTML;
  let mod = document.getElementById("modalCards");
  let body = document.getElementsByTagName("body")[0];
  let x = document.getElementsByClassName("close")[0];
  let container= document.getElementsByClassName("container")[0];
  mod.style.display = "block";
  body.style.position = "static";
  body.style.overflow = "hidden";
  container.style= "pointer-events:auto";
  container.style.opacity = 0.2;
  x.onclick = function() {
      mod.style.display = "none";
      body.style.position = "inherit";
      body.style.overflow = "auto";
      container.style ="pointer-events:active;";
      container.style.opacity = 1;
  }
  });
  }
}
for (let i=0; i<data.pokemon.length; i++){
//Variable para cada carta pokemon
  let cards= document.createElement("div");
  cards.className ="cards";
  cards.id = "cards";
  cards.setAttribute ("value", data.pokemon[i].id); 
//Variable para el nombre
 let name = document.createElement("h3");
 name.textContent = data.pokemon[i].name;
//VAriable para las imagenes
 let image = document.createElement("img");
 image.src =data.pokemon[i].img;
//Variable para la posiciona por los numeros
 let number = document.createElement("h4");
 number.textContent ="#" + data.pokemon[i].num;
 number.className = "number";
//Asignar variable appendchild 
 cards.appendChild(name);
 cards.appendChild(image);
 cards.appendChild(number); 
//Muestra en el container HTML
 document.getElementById("container").appendChild(cards).innerHTML;
}
modal();

//Todas las funciones son importadas desde el 'data.js'

//Funcion para ver pokemones por tipo//
const selectypes = document.getElementById("select2");//HAcemos una constante que llama el 'select' type boton
selectypes.addEventListener("change", () => {
let pokemonfilter = filterType(selectypes.value);//exportamos del data.js la constante de filtro(filterType)que recorren los tipos de pokemon que para cuando el usuario llame lo traiga
document.getElementById("container").innerHTML=""; //Sirve para vaciar conteiner
for (let i=0; i<pokemonfilter.length; i++){
  let cards= document.createElement("div");
  cards.className ="cards";
   cards.id = "cards";
   cards.setAttribute ("value", pokemonfilter[i].id);
  //Nombre del pokemon
  let name = document.createElement("h3");
  name.textContent = pokemonfilter[i].name;
  //Imagen de los pokemones
  let image = document.createElement("img");
  image.src =pokemonfilter[i].img;
  //LOs numeros de los pokemones
  let number = document.createElement("h4");
  number.textContent ="#" + pokemonfilter[i].num;
  number.className = "number";
  //Variables appendchild 
  cards.appendChild(name);
  cards.appendChild(image);
  cards.appendChild(number);
  //Muestra en el container HTML
  document.getElementById("container").appendChild(cards).innerHTML;
}
modal();
})

//Funcion que seleciona orden numérico//
const order = document.getElementById("select1");
order.addEventListener("change", () =>{
    let oReady = filterData(order.value);//aqui ingresamos el select que debiamos cambiar desde datajs
    document.getElementById("container").innerHTML="";
    for (let i=0; i<oReady.length; i++){
        let cards= document.createElement("div");
        cards.className ="cards";
         cards.id = "cards";
         cards.setAttribute ("value", oReady[i].id);
        //nombre del pokemon
        let name = document.createElement("h3");
        name.textContent = oReady[i].name;
        //imagen
        let image = document.createElement("img");
        image.src =oReady[i].img;
        //numero
        let number = document.createElement("h4");
        number.textContent ="#" + oReady[i].num;
        number.className = "number";
        //asignando la variables appendchild agrega elementos a una lista
        cards.appendChild(name);
        cards.appendChild(image);
        cards.appendChild(number);
        //mostrar la tarjeta en html -> section (el container que hicimos)
        document.getElementById("container").appendChild(cards).innerHTML;
    }
    modal();
})

//Funcion que seleciona orden Alfabetico//
const order2 = document.getElementById("select3");
order2.addEventListener("change", () =>{
    let oReady = filterName(order2.value);//aqui ingresamos el select que debiamos cambiar desde datajs
    document.getElementById("container").innerHTML="";
    for (let i=0; i<oReady.length; i++){
        let cards= document.createElement("div");
        cards.className ="cards";
         cards.id = "cards";
         cards.setAttribute ("value", oReady[i].id);
        //nombre del pokemon
        let name = document.createElement("h3");
        name.textContent = oReady[i].name;
        //imagen
        let image = document.createElement("img");
        image.src =oReady[i].img;
        //numero
        let number = document.createElement("h4");
        number.textContent ="#" + oReady[i].num;
        number.className = "number";
        //asignando la variables appendchild agrega elementos a una lista
        cards.appendChild(name);
        cards.appendChild(image);
        cards.appendChild(number);
        //mostrar la tarjeta en html -> section (el container que hicimos)
        document.getElementById("container").appendChild(cards).innerHTML;
    }
    modal();
})

///////////////Aquí colocamos los botones para la funciones de la páginas/////////////

// OCULTAR TODO AL CARGAR LA PÁGINA
document.getElementById("portada").style.display = 'block';
document.getElementById("paginaConceptos").style.display = 'none';
document.getElementById("paginaPokedex").style.display = 'none';


// FUNCIÓN DEL BOTON COMENZAR QUE LLEVA A LA PAGINA 2
let botonComenzar = document.getElementById("botonInicio")
botonComenzar.addEventListener ("click", mostrarPagina2)

function mostrarPagina2 (){
  document.getElementById("portada").style.display = 'none';
  document.getElementById("paginaConceptos").style.display = 'block';
  document.getElementById("paginaPokedex").style.display = 'none';
  }

  // FUNCIÓN DEL BOTON POKEDEX QUE LLEVA A LA PAGINA 3
let botonPokedex = document.getElementById("botonPokedex")
botonPokedex.addEventListener ("click", mostrarPagina3)

function mostrarPagina3 (){
  document.getElementById("portada").style.display = 'none';
  document.getElementById("paginaConceptos").style.display = 'none';
  document.getElementById("paginaPokedex").style.display = 'block';
  }

  // FUNCIÓN DEL BOTON ATRAS1 (QUE APARECE EN PÁGINA 2)
let botonAtras1 = document.getElementById("botonAtras1")
botonAtras1.addEventListener ("click", mostrarPortada)

function mostrarPortada (){
  document.getElementById("portada").style.display = 'block';
  document.getElementById("paginaConceptos").style.display = 'none';
  document.getElementById("paginaPokedex").style.display = 'none';
  }

// FUNCIÓN DEL BOTON ATRAS2 (QUE APARECE EN PÁGINA 3)
let botonAtras2 = document.getElementById("botonAtras2")
botonAtras2.addEventListener ("click", mostrarPagina2)



