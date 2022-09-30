"use strict";
exports.__esModule = true;
var pokedex_1 = require("./models/pokedex");
var pokemon_1 = require("./models/pokemon");
var primalPokemon_1 = require("./models/primalPokemon");
// -- Creacion objeto
var pokemon = new pokemon_1["default"]("Pikachu", "Electrico", 30);
console.log(pokemon.getName);
pokemon.attack();
// -- Creacion del obj podedex
var pokedex = new pokedex_1["default"]();
var pokemonEncontrado = pokedex.getPokemonInformation(pokemon);
console.log(pokemonEncontrado);
// -- Subir nivel
pokemon.levelUp();
console.log(pokedex.getPokemonInformation(pokemon));
// -- Creacion de objeto primal
var primal = new primalPokemon_1["default"]("AZUL");
console.log(primal.getName);
primal.attack();
//-- Enlace o union dinamica (polimorfismo)
var pokemon2;
pokemon2 = primal;
console.log("Pokemon 2 ejemplo:");
pokemon2.attack();
console.log(pokedex.getPokemonInformation(pokemon2));
