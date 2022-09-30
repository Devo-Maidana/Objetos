"use strict";
exports.__esModule = true;
exports.IntegranteSelecion = void 0;
var IntegranteSelecion = /** @class */ (function () {
    function IntegranteSelecion(Nombre, Apellido, Numeropasaporte, Fechanacimiento) {
        this.nombre = Nombre;
        this.apellido = Apellido;
        this.numeroPasaporte = Numeropasaporte;
        this.fechaNacimiento = Fechanacimiento;
    }
    Object.defineProperty(IntegranteSelecion.prototype, "getConsentrarse", {
        // constructor, getter y setter en comun con clases hijas 
        //en comunun
        get: function () {
            return this.nombre;
            console.log("El jugador ".concat(this.apellido, " tiene que concentrar en el Hotel av.mitre!"));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegranteSelecion.prototype, "setConsentrarse", {
        set: function (nombre) {
            this.nombre = nombre;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegranteSelecion.prototype, "getViajar", {
        get: function () {
            return this.nombre;
            console.log("El jugador ".concat(this.nombre, " teiene que Vijar a Qatar !"));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IntegranteSelecion.prototype, "setViajar", {
        set: function (nombre) {
            this.nombre = nombre;
        },
        enumerable: false,
        configurable: true
    });
    return IntegranteSelecion;
}());
exports.IntegranteSelecion = IntegranteSelecion;
