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
exports.Masajista = void 0;
var integranteSelecion_1 = require("./integranteSelecion");
var Masajista = /** @class */ (function (_super) {
    __extends(Masajista, _super);
    function Masajista(Nombre, Apellido, Numeropasaporte, Fechanacimiento) {
        return _super.call(this, Nombre, Apellido, Numeropasaporte, Fechanacimiento) || this;
    }
    //propios
    Masajista.prototype.getdarMasaje = function () {
        console.log("El masajista  ".concat(this.apellido, " le dara un masaje a el Jugador con Contractura en Aductor"));
        return this.apellido;
    };
    return Masajista;
}(integranteSelecion_1.IntegranteSelecion));
exports.Masajista = Masajista;
