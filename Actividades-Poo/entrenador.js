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
exports.Entrenador = void 0;
var integranteSelecion_1 = require("./integranteSelecion");
var Entrenador = /** @class */ (function (_super) {
    __extends(Entrenador, _super);
    function Entrenador(Nombre, Apellido, Numeropasaporte, Fechanacimiento) {
        return _super.call(this, Nombre, Apellido, Numeropasaporte, Fechanacimiento) || this;
    }
    //propios
    Entrenador.prototype.getDirigirPartido = function () {
        console.log("El entrenador ".concat(this.apellido, " tiene que dirigir a Francia!"));
        return this.apellido;
    };
    Entrenador.prototype.setDirigirPartido = function (apellido) {
        this.apellido = apellido;
    };
    return Entrenador;
}(integranteSelecion_1.IntegranteSelecion));
exports.Entrenador = Entrenador;
