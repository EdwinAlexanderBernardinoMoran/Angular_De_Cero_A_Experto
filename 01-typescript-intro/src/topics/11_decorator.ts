// DECORADORES
// Un decorador no es más que una función

function classDecorator<T extends {new (...args:any[]): {}}>(
    constructor: T
) {
    return class extends constructor{
        newProperty = "New Property";
        hello = 'override';
    }
}

// Los decoradores se pueden usar en los metodos o en propiedades de las clases.

@classDecorator
export class SuperClass{

    public myProperty: string = 'Abc123';
    
    print(){
        console.log('Hola Mundo');
        
    }
}

// Imprimiendo definicion de la clase.
console.log(SuperClass);

const myClass = new SuperClass();

// Imprimiendo la instancia de la clase.
console.log(myClass);
