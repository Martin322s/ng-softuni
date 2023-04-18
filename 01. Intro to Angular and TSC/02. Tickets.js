function tickets(input, criteria) {
    if (input === void 0) { input = []; }
    var Ticket = /** @class */ (function () {
        function Ticket(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
        ;
        return Ticket;
    }());
    ;
    var result = [];
    for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
        var line = input_1[_i];
        var _a = line.split("|"), city = _a[0], priceStr = _a[1], status_1 = _a[2];
        var price = Number(priceStr);
        var data = new Ticket(city, price, status_1);
        result.push(data);
    }
    switch (criteria) {
        case 'destination':
            result.sort(function (a, b) { return a.destination.localeCompare(b.destination); });
            break;
        case 'price':
            result.sort(function (a, b) { return a.price - b.price; });
            break;
        case 'status':
            result.sort(function (a, b) { return a.status.localeCompare(b.status); });
            break;
    }
    console.log(result);
    return result;
}
tickets([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
], 'destination');
