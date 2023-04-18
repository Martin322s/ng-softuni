interface Ticket {
    destination: string;
    price: number;
    status: string;
}

function tickets(input: string[] = [], criteria: string): Ticket[] {
    class Ticket implements Ticket {
        constructor(public destination: string, public price: number, public status: string) { };
    };

    const result: Ticket[] = [];

    for (let line of input) {
        const [city, priceStr, status] = line.split("|");
        const price = Number(priceStr);
        const data = new Ticket(city, price, status);
        result.push(data);
    }

    switch (criteria) {
        case 'destination':
            result.sort((a, b) => a.destination.localeCompare(b.destination));
            break;
        case 'price':
            result.sort((a, b) => a.price - b.price);
            break;
        case 'status':
            result.sort((a, b) => a.status.localeCompare(b.status));
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