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
var Melon = /** @class */ (function () {
    function Melon(weight, melonSort) {
        this.weight = weight;
        this.melonSort = melonSort;
    }
    Object.defineProperty(Melon.prototype, "elementIndex", {
        get: function () {
            return this.weight * this.melonSort.length;
        },
        enumerable: false,
        configurable: true
    });
    return Melon;
}());
var Watermelon = /** @class */ (function (_super) {
    __extends(Watermelon, _super);
    function Watermelon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Watermelon.prototype.getElement = function () {
        return 'Water';
    };
    Watermelon.prototype.toString = function () {
        return "Element: ".concat(this.getElement(), "\n                Sort: ").concat(this.melonSort, "\n                Element Index: ").concat(this.elementIndex, "\n                ");
    };
    return Watermelon;
}(Melon));
var Firemelon = /** @class */ (function (_super) {
    __extends(Firemelon, _super);
    function Firemelon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Firemelon.prototype.getElement = function () {
        return 'Fire';
    };
    Firemelon.prototype.toString = function () {
        return "Element: ".concat(this.getElement(), "\n                Sort: ").concat(this.melonSort, "\n                Element Index: ").concat(this.elementIndex, "\n                ");
    };
    return Firemelon;
}(Melon));
var Earthmelon = /** @class */ (function (_super) {
    __extends(Earthmelon, _super);
    function Earthmelon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Earthmelon.prototype.getElement = function () {
        return 'Earth';
    };
    Earthmelon.prototype.toString = function () {
        return "Element: ".concat(this.getElement(), "\n                Sort: ").concat(this.melonSort, "\n                Element Index: ").concat(this.elementIndex, "\n                ");
    };
    return Earthmelon;
}(Melon));
var Airmelon = /** @class */ (function (_super) {
    __extends(Airmelon, _super);
    function Airmelon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Airmelon.prototype.getElement = function () {
        return 'Air';
    };
    Airmelon.prototype.toString = function () {
        return "Element: ".concat(this.getElement(), "\n                Sort: ").concat(this.melonSort, "\n                Element Index: ").concat(this.elementIndex, "\n                ");
    };
    return Airmelon;
}(Melon));
var Melolemonmelon = /** @class */ (function (_super) {
    __extends(Melolemonmelon, _super);
    function Melolemonmelon() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentElementIndex = 0;
        return _this;
    }
    Melolemonmelon.prototype.morph = function () {
        this.currentElementIndex = (this.currentElementIndex + 1) % Melolemonmelon.ELEMENTS.length;
    };
    Melolemonmelon.prototype.getElement = function () {
        return Melolemonmelon.ELEMENTS[this.currentElementIndex];
    };
    Melolemonmelon.prototype.toString = function () {
        return _super.prototype.toString.call(this);
    };
    Melolemonmelon.ELEMENTS = ['Water', 'Fire', 'Earth', 'Air'];
    return Melolemonmelon;
}(Watermelon));
