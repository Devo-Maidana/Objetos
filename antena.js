var Antena = /** @class */ (function () {
    function Antena(datos) {
        this.tarjetaConDatos = datos;
    }
    return Antena;
}());
var Decodificador = /** @class */ (function () {
    function Decodificador(calidadParametro, prendidoParametro, antenaParametro) {
        this.calidadHD = calidadParametro;
        this.estaPrendido = prendidoParametro;
        this.antenaDelDecodificador = antenaParametro;
    }
    Decodificador.prototype.prenderApagar = function () {
        if (this.estaPrendido === true) {
            this.estaPrendido = false;
        }
        else {
            this.estaPrendido = true;
        }
    };
    return Decodificador;
}());
var Televisor = /** @class */ (function () {
    function Televisor(marcaUsuario, pulgadasUsuario, smartUsuario, decodificadorParametro, canalUsuario) {
        this.marca = marcaUsuario;
        this.cantidadDePulgadas = pulgadasUsuario;
        this.esSmart = smartUsuario;
        this.canalActual = canalUsuario;
        this.estaPrendido = false;
        this.decodificadorDeTv = decodificadorParametro;
    }
    Televisor.prototype.cambiarDeCanal = function (canalUsuario) {
        this.canalActual = canalUsuario;
    };
    Televisor.prototype.subir1canal = function () {
        this.canalActual = this.canalActual++;
    };
    Televisor.prototype.bajar1canal = function () {
        this.canalActual = this.canalActual--;
    };
    Televisor.prototype.consultarCanalActual = function () {
        return this.canalActual;
    };
    Televisor.prototype.subirVolumen1 = function () {
        this.volumenActual = this.volumenActual++;
    };
    Televisor.prototype.bajarVolumen1 = function () {
        this.volumenActual = this.volumenActual--;
    };
    Televisor.prototype.consultarVolumenActual = function () {
        return this.volumenActual;
    };
    Televisor.prototype.prender = function () {
        this.estaPrendido = true;
    };
    Televisor.prototype.apagar = function () {
        this.estaPrendido = false;
    };
    Televisor.prototype.consultarSiEsSmart = function () {
        return this.esSmart;
    };
    Televisor.prototype.consultarMarca = function () {
        return this.marca;
    };
    Televisor.prototype.consultarPulgadas = function () {
        return this.cantidadDePulgadas;
    };
    return Televisor;
}());
var antenaDecoSony = new Antena("Decodificador para sony");
var antenaDecoLg = new Antena("Decodificador para LG");
var decoSony = new Decodificador(true, true, antenaDecoSony);
var decoLg = new Decodificador(true, false, antenaDecoLg);
var tvSony = new Televisor("Sony", 45, true, decoSony);
var tvSamsung = new Televisor("Samsung", 50, false, decoLg, 96);
var tvLg = new Televisor("Lg", 60, true, decoLg);
tvSony.consultarMarca();
tvSony.cambiarDeCanal(45);
tvSony.subirVolumen1();
tvSony.subirVolumen1();
tvSony.apagar();
