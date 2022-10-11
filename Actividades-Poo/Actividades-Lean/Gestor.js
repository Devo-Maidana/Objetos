"use strict";
exports.__esModule = true;
exports.Gestor = void 0;
var Libro_1 = require("./Libro");
var Gestor = /** @class */ (function () {
    function Gestor(nombre, libros) {
        this.libros = new Array;
        this.nombre = nombre;
        if (libros != undefined)
            this.libros = libros;
    }
    Gestor.prototype.esVacio = function () {
        if (this.libros.length == 0)
            return true;
        return false;
    };
    Gestor.prototype.cantidadLibros = function () {
        return this.libros.length;
    };
    Gestor.prototype.insertar = function (libro) {
        this.libros.push(libro);
    };
    Gestor.prototype.getLibros = function () {
        var nuevoArreglo = new Array;
        for (var index = 0; index < this.cantidadLibros(); index++) {
            var titulo = this.libros[index].getTitulo();
            var autor = this.libros[index].getAutor();
            var genero = this.libros[index].getGenero();
            var nuevoLibro = new Libro_1.Libro(titulo, autor, genero);
            nuevoArreglo.push(nuevoLibro);
        }
        return nuevoArreglo;
    };
    Gestor.prototype.toString = function () {
        var resultado = this.nombre + "\n";
        for (var index = 0; index < this.cantidadLibros(); index++) {
            resultado += this.libros[index].toString() + '\n\n';
        }
        return resultado;
    };
    Gestor.prototype.getIndex = function (titulo) {
        var pos = -1;
        for (var index = 0; index < this.cantidadLibros(); index++) {
            if (this.libros[index].getTitulo() == titulo)
                pos = index;
        }
        return pos;
    };
    Gestor.prototype.consultar = function (titulo) {
        if (this.getIndex(titulo) == -1)
            return false;
        return true;
    };
    Gestor.prototype.modificarGestor = function (nombre) {
        this.nombre = nombre;
    };
    Gestor.prototype.modificarLibro = function (titulo) {
        if (this.getIndex(titulo) == -1)
            this.libros[this.getIndex(titulo)].setTitulo(titulo);
    };
    Gestor.prototype.eliminar = function (titulo) {
        if (this.getIndex(titulo) == -1)
            this.libros.splice(this.getIndex(titulo), 1);
    };
    return Gestor;
}());
exports.Gestor = Gestor;
