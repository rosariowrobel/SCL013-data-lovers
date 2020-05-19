import {filterType} from '../src/data.js';

const data =
[{
"id": 1,
"num": "001",
"name": "Bulbasaur",
"img": "http://www.serebii.net/pokemongo/pokemon/001.png",
"type": [
"Grass",
"Poison"
],
"height": "0.71 m",
"weight": "6.9 kg",
"candy": "Bulbasaur Candy",
"candy_count": 25,
"egg": "2 km",
"spawn_chance": 0.69,
"avg_spawns": 69,
"spawn_time": "20:00",
"multipliers": [1.58],
"weather": [
"Sunny ",
"Cloudy"
],
"weaknesses": [
"Fire",
"Ice",
"Flying",
"Psychic"
],
"next_evolution": [{
"num": "002",
"name": "Ivysaur"
}, {
"num": "003",
"name": "Venusaur"
}]
}
{
  "id": 4,
  "num": "004",
  "name": "Charmander",
  "img": "http://www.serebii.net/pokemongo/pokemon/004.png",
  "type": [
    "Fire"
  ],
  "height": "0.61 m",
  "weight": "8.5 kg",
  "candy": "Charmander Candy",
  "candy_count": 25,
  "egg": "2 km",
}
{
  "id": 2,
  "num": "002",
  "name": "Ivysaur",
  "img": "http://www.serebii.net/pokemongo/pokemon/002.png",
  "type": [
    "Grass",
    "Poison"
  ],
  "height": "0.99 m",
  "weight": "13.0 kg",
  "candy": "Bulbasaur Candy",
  "candy_count": 100,
  "egg": "Not in Eggs",    
}
]
/*const result = [
{
"num": "001",
"name": "Bulbasaur",
"img": "http://www.serebii.net/pokemongo/pokemon/001.png",
"type": [
"Grass",
"Poison"
],
"height": "0.71 m",
"weight": "6.9 kg",
"candy_count": 25,
"weaknesses": [
"Fire",
"Ice",
"Flying",
"Psychic"
]
}
]*/
/*Test filtro por tipo*/
describe('data', () => {
  test('is a function', () => {
    expect(typeof filterType).toBe('function');
  });

test('returns `Al filtrar por grass, filtra Bulbasaur`', () => {
    expect(filterType(data, "Grass")).toEqual(data);
  });
});

describe('data', () => {
  test('is a function', () => {
    expect(typeof filterType).toBe('function');
  });

test('returns `Al filtrar por grass, filtra Charmander`', () => {
    expect(filterType(data, "Fire")).toEqual(data);
  });
});

describe('data', () => {
  test('is a function', () => {
    expect(typeof filterType).toBe('function');
  });

test('returns `Al filtrar por grass, filtra Ivysaur`', () => {
    expect(filterType(data, "Grass")).toEqual(data);
  });
});

/*Test filtro por orden A-z a Z-a*/