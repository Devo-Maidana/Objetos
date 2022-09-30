"use strict";
exports.__esModule = true;
var Pokedex = /** @class */ (function () {
    function Pokedex() {
    }
    Pokedex.prototype.getPokemonInformation = function (pokemon) {
        return "El nombre del Pokemon es ".concat(pokemon.getName, ", del tipo ").concat(pokemon.getType, ", nivel ").concat(pokemon.getLevel, ".");
    };
    return Pokedex;
}());
exports["default"] = Pokedex;
