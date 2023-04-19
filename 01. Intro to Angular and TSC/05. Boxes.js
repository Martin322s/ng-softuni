var Box = /** @class */ (function () {
    function Box() {
        this.contents = [];
    }
    Box.prototype.add = function (element) {
        this.contents.push(element);
    };
    Box.prototype.remove = function () {
        return this.contents.pop();
    };
    Object.defineProperty(Box.prototype, "count", {
        get: function () {
            return this.contents.length;
        },
        enumerable: false,
        configurable: true
    });
    return Box;
}());
