"use strict";
exports.__esModule = true;
var Gestor_1 = require("./Gestor");
var Libro_1 = require("./Libro");
var biblioteca = new Gestor_1.Gestor("Biblioteca");
var libro_1 = new Libro_1.Libro("Harry Potter 1", "J. K. Rowling", "Fantasía");
var libro_2 = new Libro_1.Libro("Harry Potter 2", "J. K. Rowling", "Fantasía");
var libro_3 = new Libro_1.Libro("Harry Potter 3", "J. K. Rowling", "Fantasía");
var libro_4 = new Libro_1.Libro("Sherlock Holmes", "Arthur Conan Doyle", "Misterio");
var libro_5 = new Libro_1.Libro("El señor de los anillos", "J. R. R. Tolkien", "Fantasía");
var libro_6 = new Libro_1.Libro("Cien años de soledad", "Gabriel García Márquez", "Novela");
biblioteca.insertar(libro_1);
biblioteca.insertar(libro_2);
biblioteca.insertar(libro_3);
biblioteca.insertar(libro_4);
biblioteca.insertar(libro_5);
var arreglo = biblioteca.getLibros();
arreglo.push(libro_6);
var biblioteca2 = new Gestor_1.Gestor("Biblioteca 2 ", arreglo);
console.log(biblioteca.toString());
console.log(biblioteca2.toString());
