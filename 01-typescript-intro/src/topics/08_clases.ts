class Person {

    // Propiedades
    // public name: string;
    // public addres: string;

    // constructor (name:string, addres:string){
    //     this.name = name;
    //     this.addres = addres;
    // }

    constructor(
        public name: string,
        public addres: string = 'No addres'
    ){}
}

const Iroman = new Person("Edwin", "El Salvador");
console.log(Iroman);