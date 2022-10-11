"use strict";
exports.__esModule = true;
exports.Libro = void 0;
var Libro = /** @class */ (function () {
    function Libro(titulo, autor, genero) {
        this.titulo = titulo;
        this.autor = autor;
        if (genero != undefined)
            this.genero = genero;
    }
    Libro.prototype.getTitulo = function () {
        return this.titulo;
    };
    Libro.prototype.getAutor = function () {
        return this.autor;
    };
    Libro.prototype.getGenero = function () {
        return this.genero;
    };
    Libro.prototype.toString = function () {
        return 'Titulo: ' + this.titulo + ' \n ' + 'Autor: ' + this.autor + ' \n ' + 'Genero: ' + this.genero + '';
    };
    Libro.prototype.setTitulo = function (titulo) {
        this.titulo = titulo;
    };
    return Libro;
}());
exports.Libro = Libro;
