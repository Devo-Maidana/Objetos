"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(paramNombre, paramApellido, paramDni) {
        this.nombre = paramNombre;
        this.apellido = paramApellido;
        this.dni = paramDni;
    }
    //metodos
    Persona.prototype.setNombre = function (paramNombre) {
        this.nombre = paramNombre;
    };
    Persona.prototype.setApellido = function (paramApellido) {
        this.nombre = paramApellido = paramApellido;
    };
    Persona.prototype.getApellido = function () {
        return this.apellido;
    };
    Persona.prototype.getNombreCompleto = function () {
        var aux = this.nombre + this.apellido;
        return aux;
    };
    Persona.prototype.setDNI = function (paramDNI) {
        this.dni = paramDNI;
    };
    Persona.prototype.getDNI = function () {
        return this.dni;
    };
    return Persona;
}());
exports.Persona = Persona;
