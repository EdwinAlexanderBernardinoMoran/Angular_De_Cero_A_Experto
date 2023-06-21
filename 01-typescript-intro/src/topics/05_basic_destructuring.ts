interface AudioPlayer{
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details{
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Edwin",
        year: 2023
    }
}

// Si queremos asignar una nueva variable.
const song = 'New Song';

// Para que no tome el valor de la variable de arriva se le asigna un valor para que no sea modificado
const {
    song:anotherSong, 
    songDuration:duration,
    details
    // Una forma de hacerlo
    // details:{author}
} = audioPlayer;

const {author} = details
// DESESTRUCTURACION: Se puede palicar a objetos, a la hora de hacer importaciones e exportaciones en los modulos, en los argumentos de las funciones, en cualquier archivo, arreglos. En general consiste en que podamos tomar, en este caso de un objeto ciertas piezas, ejemplo. los atributos.


console.log('Song: ', anotherSong)
console.log('Song: ', duration);
console.log('Author: ', author);



export{};