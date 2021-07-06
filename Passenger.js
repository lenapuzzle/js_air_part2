import Ticket from './Ticket.js'
class Passenger {
    constructor(name) {
        this.name = name
        this.flights = []
    }
    purchaseTicket(flight, seatNumber) {
        let ticket = new Ticket(flight, this, seatNumber)
        this.flights.push(flight)
        return ticket
    }
}

export default Passenger