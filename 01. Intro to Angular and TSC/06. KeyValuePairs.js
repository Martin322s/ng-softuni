var KeyValue = /** @class */ (function () {
    function KeyValue() {
    }
    KeyValue.prototype.setKeyValue = function (key, value) {
        this.key = key;
        this.value = value;
    };
    KeyValue.prototype.display = function () {
        console.log("key = ".concat(this.key, ", value = ").concat(this.value));
    };
    return KeyValue;
}());
;
