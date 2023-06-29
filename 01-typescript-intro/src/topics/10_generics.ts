// GENERICS
// Si usamos el tipo de dato any, no tendremos ayuda del instelligens. Porque no sabe que tipo de dato inferir.

// Los genericos dependen del tipo de dato, que van ser enviados en los genericos.
export function whatsMyType<T>(argument: T): T {
    return argument;
}

let amIstring = whatsMyType<string>('Hola mundo');
let amINumber = whatsMyType<number>(100);
let amIArray = whatsMyType<number[]>([1,2,3,4,5]);

console.log(amIstring.split(' '));
console.log(amINumber.toFixed());
console.log(amIArray.join('-'));
