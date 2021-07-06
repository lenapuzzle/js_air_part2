// your code here
import Airplane from "./Airplane.js";
import Flight from "./Flight.js";
import Passenger from "./Passenger.js";
// your code here
let airplane = new Airplane('Boeing', '234', 50)
console.log(airplane)

let maidenFlight = new Flight(
    'September 2',
    '10AM',
    '1PM',
    'Boston',
    'San Diego'
)
console.log(maidenFlight)

let amelia = new Passenger('Amelia Earhart')

let ticket1 = amelia.purchaseTicket(maidenFlight, '6E')
    //airplane.scheduleFlight(maidenFlight);
    //console.log(airplane);
console.log(ticket1)
console.log(amelia.flights)