"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Futbolista = void 0;
var integranteSelecion_1 = require("./integranteSelecion");
var Futbolista = /** @class */ (function (_super) {
    __extends(Futbolista, _super);
    function Futbolista(Nombre, Apellido, Numeropasaporte, Fechanacimiento) {
        return _super.call(this, Nombre, Apellido, Numeropasaporte, Fechanacimiento) || this;
    }
    Object.defineProperty(Futbolista.prototype, "getjugarPartido", {
        //propios 
        get: function () {
            return this.nombre;
            console.log("El jugador ".concat(this.nombre, " esta con mejor energia para jugar!"));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Futbolista.prototype, "setjugarPartido", {
        set: function (nombre) {
            this.nombre = nombre;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Futbolista.prototype, "getentrenar", {
        get: function () {
            return this.apellido;
            console.log("El jugador ".concat(this.apellido, " tiene que entrenar Penales y Tiros Libres !"));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Futbolista.prototype, "setentrenar", {
        set: function (apellido) {
            this.apellido = apellido;
        },
        enumerable: false,
        configurable: true
    });
    return Futbolista;
}(integranteSelecion_1.IntegranteSelecion));
exports.Futbolista = Futbolista;
