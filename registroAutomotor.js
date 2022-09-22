var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor(listadoParametro) {
        this.listadoDeAutos = listadoParametro;
    }
    RegistroAutomotor.prototype.consultarSiExisteVehiculo = function (paramAuto) {
        var respuesta = false;
        var posicion = -1;
        for (var i = 0; i < this.listadoDeAutos.length; i++) {
            if (this.listadoDeAutos[i].getPatente() === paramAuto.getPatente()) {
                posicion = i;
                respuesta = true;
            }
        }
        console.log(posicion);
        return respuesta;
    };
    RegistroAutomotor.prototype.registrarVehiculo = function (paramAuto) {
        this.listadoDeAutos.push(paramAuto);
    };
    RegistroAutomotor.prototype.eliminarVehiculo = function (paramAuto) {
        for (var i = 0; i < this.listadoDeAutos.length; i++) {
            if (this.listadoDeAutos[i].getPatente() === paramAuto.getPatente()) {
                this.listadoDeAutos.splice(i, 1);
            }
        }
    };
    RegistroAutomotor.prototype.editarVehiculo = function (posicion, patenteParametro, marcaParametro) {
        this.listadoDeAutos[posicion].setPatente(patenteParametro);
        this.listadoDeAutos[posicion].setMarca(marcaParametro);
    };
    return RegistroAutomotor;
}());
var Auto = /** @class */ (function () {
    function Auto(patenteParametro, marcaParametro, modeloParametro, anioParametro) {
        this.patente = patenteParametro;
        this.marca = marcaParametro;
        this.modelo = modeloParametro;
        this.anio = anioParametro;
    }
    Auto.prototype.setAnio = function (paramAnio) {
        this.anio = paramAnio;
    };
    Auto.prototype.getAnio = function () {
        return this.anio;
    };
    Auto.prototype.setPatente = function (paramPatente) {
        this.patente = paramPatente;
    };
    Auto.prototype.getPatente = function () {
        return this.patente;
    };
    Auto.prototype.setMarca = function (paramMarca) {
        this.marca = paramMarca;
    };
    Auto.prototype.getMarca = function () {
        return this.marca;
    };
    Auto.prototype.setModelo = function (paramModelo) {
        this.modelo = paramModelo;
    };
    Auto.prototype.getModelo = function () {
        return this.modelo;
    };
    return Auto;
}());
var auto1 = new Auto("AAA111", "Ford", "Fiesta", 2012);
var auto2 = new Auto("BBB111", "Fiat", "Uno", 2015);
var auto3 = new Auto("CCC111", "Chevrolet", "Astra", 2018);
var arregloDeAutos = [auto1, auto2, auto3];
var registroAutomotorDeTDF = new RegistroAutomotor(arregloDeAutos);
var auto4 = new Auto("DDD111", "BMW", "Roaster", 2022);
//No lo encuentra porque no esta registrado
var respuestaRecibida = registroAutomotorDeTDF.consultarSiExisteVehiculo(auto4);
console.log(respuestaRecibida);
//Lo registro
registroAutomotorDeTDF.registrarVehiculo(auto4);
//lo vuelvo a buscar
console.log("respuesta a la segunda consulta");
var respuestaRecibida2 = registroAutomotorDeTDF.consultarSiExisteVehiculo(auto4);
console.log(respuestaRecibida2);
//editar datos del auto
console.log("edito el BMW porque lo registre mal");
registroAutomotorDeTDF.editarVehiculo(3, "EEE111", "Mercedez");
console.log(auto4);
//lo elimino del registro
registroAutomotorDeTDF.eliminarVehiculo(auto4);
//vuelvo a consultar si existe para saber si lo elimino correctamente
var respuestaRecibida3 = registroAutomotorDeTDF.consultarSiExisteVehiculo(auto4);
console.log(respuestaRecibida3);
