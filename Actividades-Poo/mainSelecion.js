"use strict";
exports.__esModule = true;
var futbolista_1 = require("./futbolista");
var entrenador_1 = require("./entrenador");
var masajista_1 = require("./masajista");
var Primerfutbolista = new futbolista_1.Futbolista("Leo", "Messi", 1010, 6 - 24 - 1987);
var Segundofutbolista = new futbolista_1.Futbolista("Cristiano", "Ronaldo", 9999, 7 - 25 - 1985);
console.log(Primerfutbolista.setjugarPartido);
// -- Creacion del obj masajista y  entrenador
var PrimerEntrenador = new entrenador_1.Entrenador("Marcelo", "Gallardo", 1515, 1 - 18 - 1976);
var SegundoEntrenador = new entrenador_1.Entrenador("Matias", "Almeyda", 8888, 9 - 23 - 1969);
console.log(PrimerEntrenador.getDirigirPartido);
var PrimerMasajista = new masajista_1.Masajista("Sara", "petrov", 7777, 08 - 08 - 1986);
var SegundoMasajista = new masajista_1.Masajista("Kylian", "Mbappe", 4444, 12 - 27 - 2001);
console.log(PrimerMasajista.setdarMasaje);
