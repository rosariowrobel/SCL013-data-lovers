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

import data from './data/pokemon/pokemon.js';
import {filterType, pokeId} from './data.js';



console.log(data);
//pkById
//FUncion para que aparescan todos los pokemones (Historia del usuario 2)
const filterData = (select) => {
  let filter = "";
  //según su valor
  if (select==="1-151"){
    filter = data.pokemon.sort((a,b)=>{
      return a.id - b.id
    })}else if (select==="151-1"){
      filter = data.pokemon.sort((a,b)=>{
        return b.id - a.id
      })}else if(select==="A-Z"){
        filter = data.pokemon.sort((a,b)=>{
          return a.name.localeCompare(b.name);
      })}else if (select==="Z-A"){
        filter = data.pokemon.sort((a,b)=>{
          return b.name.localeCompare(a.name);
      })}
   return filter;

 };

//modal para cada personaje con su info
const modal = () => {
    let openModal = document.querySelectorAll("div.cards");
    for (let i = 0; i <openModal.length; i++){
      openModal[i].addEventListener("click", () => {
        document.getElementById("modalContainer").innerHTML = "";
        let pokemon = pokeId(openModal[i].getAttribute("value"));

    let cards= document.createElement("div");
    cards.className ="modalCards";
     cards.id = "modalCards";
     //crear boton cerrar x
     let span = document.createElement("span");
     span.className = "close";
     span.textContent = "X";
    //nombre del pokemon
    let name = document.createElement("h3");
    name.textContent = pokemon.name;
    //imagen
    let image = document.createElement("img");
    image.src =pokemon.img;
    //peso
    let weight = document.createElement("p");
    weight.className = "peso";
    weight.textContent = "Peso: "+pokemon.weight;
    //altura
    let height = document.createElement("p");
    height.className = "altura";
    height.textContent = "Altura: "+pokemon.height;
    //candy
    let candy = document.createElement("p");
    candy.className = "candy";
    candy.textContent = "Candy: "+pokemon.candy;

    //asignando la variables appendchild agrega elementos a una lista
    cards.appendChild(span);
    cards.appendChild(name);
    cards.appendChild(image);
    cards.appendChild(weight);
    cards.appendChild(height);
    cards.appendChild(candy);
    //mostrar la tarjeta en html -> section (el container que hicimos)
    document.getElementById("modalContainer").appendChild(cards).innerHTML;
    let mod = document.getElementById("modalCards");
    let body = document.getElementsByTagName("body")[0];
    let x = document.getElementsByClassName("close")[0];
    let container = document.getElementsByClassName("container")[0];
    mod.style.display = "block";
    body.style.position = "static";
    body.style.overflow = "hidden";
    container.style = "pointer-events:none;"
    container.style.opacity = 0.5;
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
    //Este let es para crear las cartas de los pokemones
    let cards= document.createElement("div");
    cards.className ="cards";
    cards.id = "cards";
    cards.setAttribute ("value", data.pokemon[i].id); //la creamos para utilizar el modal
   //Da el nombre del pokemon
   let name = document.createElement("h3");
   name.textContent = data.pokemon[i].name;
   //LLama a las imagenes
   let image = document.createElement("img");
   image.src =data.pokemon[i].img;
   //Los posiciona por los numeros
   let number = document.createElement("h4");
   number.textContent ="#" + data.pokemon[i].num;
   number.className = "number";

   //asignando la variables appendchild ()agrega elementos a una lista
   cards.appendChild(name);
   cards.appendChild(image);
   cards.appendChild(number);

   //muestra las cartas en el container
   document.getElementById("container").appendChild(cards).innerHTML;
}
 modal();


//Funcion para ver pokemones por tipo
const selectypes = document.getElementById("type");//HAcemos una constante que llama el 'select' type boton
selectypes.addEventListener("change", () => {
let pokemonfilter = filterType(selectypes.value);//exportamos del data.js la constante de filtro(filterType)que recorren los tipos de pokemon que para cuando el usuario llame lo traiga
document.getElementById("container").innerHTML=""; //las comillas para vaciar el conteiner
for (let i=0; i<pokemonfilter.length; i++){
    let cards= document.createElement("div");
    cards.className ="cards";
     cards.id = "cards";
     cards.setAttribute ("value", pokemonfilter[i].id);
    //nombre del pokemon
    let name = document.createElement("h3");
    name.textContent = pokemonfilter[i].name;
    //imagen
    let image = document.createElement("img");
    image.src =pokemonfilter[i].img;
    //numero
    let number = document.createElement("h4");
    number.textContent ="#" + pokemonfilter[i].num;
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


