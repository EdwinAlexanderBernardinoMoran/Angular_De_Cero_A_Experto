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
        public name: string,
        public addres: string = 'No addres'
    ){}
}

    // EXTENDER UNA CLASE
export class Hero extends Person{
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
    ){
        super(realName, 'New York');
    }
}

const Iroman = new Hero("Iroman", 45, "Tony");
console.log(Iroman);