"use strict";
exports.__esModule = true;
exports.IntegranteSelecion = void 0;
var IntegranteSelecion = /** @class */ (function () {
    function IntegranteSelecion(Nombre, Apellido, Numeropasaporte, Fechanacimiento) {
        this.nombre = Nombre;
        this.apellido = Apellido;
        this.numeropasaporte = Numeropasaporte;
        this.fechanacimiento = Fechanacimiento;
    }
    // constructor, getter y setter en comun con clases hijas 
    //en comunun
    IntegranteSelecion.prototype.getConsentrarse = function () {
        console.log("El jugador ".concat(this.apellido, " tiene que concentrar en el Hotel av.mitre!"));
        return this.nombre;
    };
    IntegranteSelecion.prototype.setConsentrarse = function (nombre) {
        this.nombre = nombre;
    };
    IntegranteSelecion.prototype.getViajar = function () {
        console.log("El jugador ".concat(this.nombre, " teiene que Vijar a Qatar !"));
        return this.nombre;
    };
    IntegranteSelecion.prototype.setViajar = function (nombre) {
        this.nombre = nombre;
    };
    IntegranteSelecion.prototype.getFechaNac = function () {
        var fecha = new Date(this.fechanacimiento);
        return fecha;
    };
    return IntegranteSelecion;
}());
exports.IntegranteSelecion = IntegranteSelecion;
