class Person {

    // Propiedades
    public name: string;
    public addres: string;

    constructor (){
        this.name = 'Edwin';
        this.addres = 'El Salvador';
    }
}

const Iroman = new Person();
console.log(Iroman);