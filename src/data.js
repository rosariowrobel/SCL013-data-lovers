import data from './data/pokemon/pokemon.js';


//Función filtrar por tipo
export const filterType = (type) => {
let typeFilter = data.pokemon.filter(element => element.type.includes(type));
return typeFilter;
}
//Función filtrar por huevo
export const filterEggs = (egg) => {
  let eggsFilter = data.pokemon.filter( element => element.egg.includes(egg));
  return eggsFilter;
}

//devuelve pokemon por id al que le haces click
export const pokeId = (idpk) => {
  let result = data.pokemon.find(element => {
    return element.id == idpk;

  });
  return result;

};
