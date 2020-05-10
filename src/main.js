/*
import { example } from './data.js';
// import data from './data/lol/lol.js';


import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);

import data from './data/pokemon/pokemon.js';

console.log (data);
*/

/*//////////////////////////////////////////////////////////////////*/


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

function mostrarPagina2 (){
  document.getElementById("portada").style.display = 'none';
  document.getElementById("paginaConceptos").style.display = 'block';
  document.getElementById("paginaPokedex").style.display = 'none';
  }

// FUNCIÓN DEL BOTON HOME
let botonHome = document.getElementById("botonHome")
botonHome.addEventListener ("click", mostrarPortada)


/* FUNCIONES PARA MOSTRAR INFORMACIÓN EN PÁGINA CONCEPTOS BÁSICOS */
function mostrarTexto1() {
  document.getElementById('cajaTexto1').style.display = 'block';
  document.getElementById('cajaTexto2').style.display = 'none';
  document.getElementById('cajaTexto3').style.display = 'none';
  document.getElementById('cajaTexto4').style.display = 'none';
}

function mostrarTexto2() {
  document.getElementById('cajaTexto1').style.display = 'none';
  document.getElementById('cajaTexto2').style.display = 'block';
  document.getElementById('cajaTexto3').style.display = 'none';
  document.getElementById('cajaTexto4').style.display = 'none';
  }

function mostrarTexto3() {
  document.getElementById('cajaTexto1').style.display = 'none';
  document.getElementById('cajaTexto2').style.display = 'none';
  document.getElementById('cajaTexto3').style.display = 'block';
  document.getElementById('cajaTexto4').style.display = 'none';
  }

function mostrarTexto4() {
  document.getElementById('cajaTexto1').style.display = 'none';
  document.getElementById('cajaTexto2').style.display = 'none';
  document.getElementById('cajaTexto3').style.display = 'none';
  document.getElementById('cajaTexto4').style.display = 'block';
  }
