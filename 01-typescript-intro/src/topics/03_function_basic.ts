// En JS Todas las funciones retornan Undifined en TyScript Regresan Void

function addNumbers(a: number, b: number) {
    return a + b;
}

// convierte el tipo de dato Number a un resultado String
// const result: string = addNumbers(1, 2).toString();


// FUNCIONES DE FLECHA

// Los bactick, nos permite hacer un inyeccion de expresion de JavaScript en el template literal 
const addNumbersArrow = (a: number, b: number):string => {
    return `${a + b}`;
}

function multiply(firstNumber: number, secondNumber?: number, base: number = 2) {
    return firstNumber * base;
}



// const result = addNumbers(1, 2);
// const result2: string = addNumbersArrow(1, 2);
// const multitplyResult: number = multiply(5);
// console.log({result, result2, multitplyResult});
// export {};

// ---------------------------------------------------------------------------
// FUNCIONES CON OBEJTOS COMO ARGUMENTOS

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter = (character: Character, amount: number) => {
    character.hp += amount;
}

const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${this.hp}`);
    },
}

healCharacter(strider, 10);
healCharacter(strider, 30);

strider.showHp();

export {};