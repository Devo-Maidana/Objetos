var Televisor = /** @class */ (function () {
    function Televisor() {
        this.canalActual = 0;
        this.volumenActual = 0;
        this.estaPendido = false;
    }
    Televisor.prototype.getCanalActual = function () {
        return this.canalActual;
    };
    Televisor.prototype.setCanalActual = function (paramCanal) {
        this.canalActual = paramCanal;
    };
    Televisor.prototype.getVolumenActual = function () {
        return this.volumenActual;
    };
    Televisor.prototype.setVolumenActual = function (paramVolumen) {
        this.volumenActual = paramVolumen;
    };
    Televisor.prototype.prenderApagar = function () {
        if (this.estaPendido === true) {
            this.estaPendido = false;
        }
        else {
            this.estaPendido = true;
        }
    };
    return Televisor;
}());
var televisorComun = new Televisor();
console.log(smart1.getVolumenActual());
smart1.setCanalActual(45);
