export interface Passenger{
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Alexander',
}

const passenger2: Passenger = {
    name: 'Alexander',
    children: ['Natalia', 'Elizabeth'],
}

const printChildren = (passenger: Passenger) => {
    // Quiere decir que si children es = undefined, que quede igual a 0
    const howManyChildren = passenger.children?.length || 0;
    console.log(passenger.name, howManyChildren);
}

printChildren(passenger1);
printChildren(passenger2);