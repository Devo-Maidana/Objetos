"use strict";
exports.__esModule = true;
var Pokemon = /** @class */ (function () {
    function Pokemon(name, type, level) {
        this.name = name,
            this.type = type,
            this.level = level;
    }
    Pokemon.prototype.attack = function () {
        console.log("El pokemon ".concat(this.name, " est\u00E1 atacando!"));
    };
    Pokemon.prototype.levelUp = function () {
        this.level++;
    };
    Object.defineProperty(Pokemon.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pokemon.prototype, "setName", {
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pokemon.prototype, "getType", {
        get: function () {
            return this.type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pokemon.prototype, "setType", {
        set: function (type) {
            this.type = type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pokemon.prototype, "getLevel", {
        get: function () {
            return this.level;
        },
        enumerable: false,
        configurable: true
    });
    return Pokemon;
}());
exports["default"] = Pokemon;
