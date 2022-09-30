import {Futbolista} from './futbolista'
import {Entrenador} from './entrenador'
import {Masajista} from './masajista'
import { IntegranteSelecion } from './integranteSelecion';

let Primerfutbolista = new Futbolista("Leo", "Messi", 1010,6-24-1987);
let Segundofutbolista = new Futbolista("Cristiano", "Ronaldo", 9999,7-25-1985);
console.log(Primerfutbolista.setjugarPartido);



// -- Creacion del obj masajista y  entrenador



let PrimerEntrenador:Entrenador = new Entrenador("Marcelo","Gallardo", 1515,1-18-1976);
let SegundoEntrenador:Entrenador = new Entrenador("Matias","Almeyda", 8888,9-23-1969);
console.log(PrimerEntrenador.getDirigirPartido);

let PrimerMasajista:Masajista = new  Masajista("Sara","petrov",7777,08-08-1986);
let SegundoMasajista:Masajista = new  Masajista("Kylian","Mbappe",4444,12-27-2001);
console.log(PrimerMasajista.setdarMasaje);
