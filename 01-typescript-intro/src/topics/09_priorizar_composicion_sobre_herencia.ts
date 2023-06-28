export class Person {

    // Propiedades
    // public name: string;
    // public addres: string;

    // constructor (name:string, addres:string){
    //     this.name = name;
    //     this.addres = addres;
    // }

    // CONSTRUCTOR DE UNA CLASE.
    constructor(
        public firtName: string,
        public lastname: string,
        public addres: string = 'No addres'
    ){}
}

    // EXTENDER UNA CLASE
export class Hero{

    // public person: Person;

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public Person: Person
    ){
        // this.person = new Person(realName);
    }
}

const tony = new Person('Tony', 'Start', 'New York');

const Iroman = new Hero("Iroman", 45, "Tony", tony);
console.log(Iroman);