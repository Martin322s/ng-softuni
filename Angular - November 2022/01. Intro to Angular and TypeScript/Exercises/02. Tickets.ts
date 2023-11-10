function tickets<Array>(arrayOfTicktes: Array, _criteria: string) {
    class Ticket {
        destination: string;
        price: number;
        status: string;
        
        constructor(destination: string, price: number, status: string) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    
    let result: Ticket[] = [];

    for (let i of arrayOfTicktes[Symbol.iterator]()) {
        let [destination, price, status] = i.split('|');
        let newTicket: Ticket = new Ticket(destination, Number(price), status);
        result.push(newTicket);
    }

    let sortedArray: Ticket[] = result.sort((a: Ticket, b: Ticket) => {
        if (_criteria === 'price') {
            return a[_criteria] - b[_criteria];
        } else {
            return a[_criteria].localeCompare(b[_criteria]);
        }
    });

    return sortedArray;
}