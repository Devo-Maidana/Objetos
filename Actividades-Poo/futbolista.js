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
    //propios 
    Futbolista.prototype.getjugarPartido = function () {
        console.log("El jugador ".concat(this.nombre, " esta con mejor energia para jugar!"));
        return this.nombre;
    };
    Futbolista.prototype.setjugarPartido = function (nombre) {
        this.nombre = nombre;
    };
    Futbolista.prototype.getEntrenar = function () {
        console.log("El jugador ".concat(this.apellido, " tiene que entrenar Penales y Tiros Libres !"));
        return this.apellido;
    };
    Futbolista.prototype.setEntrenar = function (apellido) {
        this.apellido = apellido;
    };
    return Futbolista;
}(integranteSelecion_1.IntegranteSelecion));
exports.Futbolista = Futbolista;
