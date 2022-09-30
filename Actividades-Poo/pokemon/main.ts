import Pokedex from "./models/pokedex";
import Pokemon from "./models/pokemon";
import PrimalPokemon from "./models/primalPokemon";

// -- Creacion objeto
const pokemon = new Pokemon("Pikachu", "Electrico", 30);
console.log(pokemon.getName);
pokemon.attack();

// -- Creacion del obj podedex
const pokedex = new Pokedex()
const pokemonEncontrado =pokedex.getPokemonInformation(pokemon);
console.log(pokemonEncontrado);

// -- Subir nivel
pokemon.levelUp();
console.log(pokedex.getPokemonInformation(pokemon));

// -- Creacion de objeto primal
const primal = new PrimalPokemon("AZUL");
console.log(primal.getName);
primal.attack();

//-- Enlace o union dinamica (polimorfismo)
let pokemon2: Pokemon;
pokemon2 = primal;
console.log("Pokemon 2 ejemplo:");
pokemon2.attack()


console.log(pokedex.getPokemonInformation(pokemon2));