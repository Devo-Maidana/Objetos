import Pokemon from "./pokemon";

export default class Pokedex {
    constructor(){}

    getPokemonInformation(pokemon: Pokemon): string {
        return `El nombre del Pokemon es ${pokemon.getName}, del tipo ${pokemon.getType}, nivel ${pokemon.getLevel}.`;

    }
}