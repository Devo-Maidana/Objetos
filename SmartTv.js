var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SmartTv = /** @class */ (function (_super) {
    __extends(SmartTv, _super);
    function SmartTv() {
        var _this = _super.call(this) || this;
        _this.canalActual = 5;
        _this.navegarPorInternet = false;
        _this.cantAplicaciones = 5;
        return _this;
    }
    SmartTv.prototype.navegar = function () {
        if (this.navegarPorInternet === false) {
            this.navegarPorInternet = true;
        }
        else {
            this.navegarPorInternet = false;
        }
    };
    SmartTv.prototype.getVolumenActual = function () {
        return 1;
    };
    return SmartTv;
}(Televisor));
var smart1 = new SmartTv();
