// Si tu sabes que no cambia el valor es buena practica definirla como una constante.

// Las constantes son mas ligeras que las bariables let, porque no tiene metodos de asignacion.
const skills: string[] = ['Bash', 'Counter', 'Healing'];

// Las interfaces se utilizan para poder asignar las propiedades de un objeto el tipo de valor que contendran.
interface Character{
    name: string;
    hp: number;
    skills: string[];
    hometown?: string; // Poner ?: Significa que es opcional.
}

const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter'],
}

strider.hometown = 'Rivendell';
console.table(strider)

export {};