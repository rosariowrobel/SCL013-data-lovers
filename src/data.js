import data from './data/pokemon/pokemon.js';

//Bloque para filtrar por tipo
export const filterType = (type) => {
  let typeFilter = data.pokemon.filter(element => element.type.includes(type));
  return typeFilter;
  }

//Bloque para ordenar de forma Númerica
export const filterData = (select) => {
  let filter = "";
  //según su valor
  if (select==="1-151"){
    filter = data.pokemon.sort((a,b)=>{
      return a.id - b.id
    })}else if (select==="151-1"){
      filter = data.pokemon.sort((a,b)=>{
        return b.id - a.id
      })}
   return filter;

 };

//Bloque para ordenar de forma Alfabética
export const filterName = (name) => {
  let filter2 = "";
  //según su valor
  if (name==="A-Z"){
    filter2 = data.pokemon.sort((a,b)=>{
      return a.name.localeCompare(b.name);
    })}else if (name==="Z-A"){
      filter2 = data.pokemon.sort((a,b)=>{
        return b.name.localeCompare(a.name)
      })}
   return filter2;

 };  
 
//Bloque que devuelve al pokemon por id 
  export const pokeId = (idpk) => {
    let result = data.pokemon.find(element => {
      return element.id == idpk;
  
    });
    return result;
  
  };
