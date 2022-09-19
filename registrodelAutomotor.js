var Auto = /** @class */ (function () {
    function Auto(marcaParam, modeloParam, patenteParam) {
        this.marca = marcaParam;
        this.modelo = modeloParam;
        this.patente = patenteParam;
    }
    Auto.prototype.getMarca = function () {
        return this.marca;
    };
    Auto.prototype.setMarca = function (pMarca) {
        this.marca = pMarca;
    };
    Auto.prototype.getModelo = function () {
        return this.modelo;
    };
    Auto.prototype.setModelo = function (pModelo) {
        this.modelo = pModelo;
    };
    Auto.prototype.getPatente = function () {
        return this.patente;
    };
    Auto.prototype.setPatente = function (pPatente) {
        this.patente = pPatente;
    };
    return Auto;
}());
var RegistroAutomor = /** @class */ (function () {
    function RegistroAutomor(parametroArregloDeAutos) {
        this.listadoDeAutos = parametroArregloDeAutos;
    }
    RegistroAutomor.prototype.buscarAuto = function (autoParam) {
        var patenteABuscar = autoParam.getPatente();
        var posicion = -1;
        for (var i = 0; i < this.listadoDeAutos.length; i++) {
            if (patenteABuscar === this.listadoDeAutos[i].getPatente()) {
                posicion = i;
            }
        }
        if (posicion === -1) {
            console.log("no esta registrado");
        }
        else {
            console.log("el auto esta registrado en la posicion " + posicion);
        }
    };
    return RegistroAutomor;
}());
var autoDeMarcos = new Auto("ford", "fiesta", "AAA111");
var autoDeMelina = new Auto("vw", "gol", "bbb111");
var autoDeJose = new Auto("chevrolet", "astra", "CCC111");
var autoABuscar = new Auto("BMW", "X8", "AAA111");
var arregloDeAutosParaRegistrarEnTDF = [autoDeJose, autoDeMarcos, autoDeMelina];
var registroAutomotorDeTierraDelFuego = new RegistroAutomor(arregloDeAutosParaRegistrarEnTDF);
var registrado = registroAutomotorDeTierraDelFuego.buscarAuto(autoABuscar);
