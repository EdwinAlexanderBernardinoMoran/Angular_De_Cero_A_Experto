// Injectable es un decorador que dice que lo trate como un servicio.
import { Injectable } from '@angular/core';
import {v4 as uuid} from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {
  // constructor() { }

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 100
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500
    }
  ];

  // Podemos hacer la desestructuracion pero seria complicado si hay mas de 30 propiedades.
  addCharacter(character: Character):void {
    // console.log('MainPage');
    // console.log(character);
    const newCharacter:Character = {
      id: uuid(),

      // name: character.name,
      // power: character.power

      // Operador Exprew, con esto digo toma todas sus propiedades y esparcelas en ese nuevo objeto.
      ...character
    }

    this.characters.push(newCharacter);
  }

  // Paso numero 1 video 67: Aca se pasa desde el component hijo, de listados por el emit()
  // onDeleteCharacter(index: number):void {
  //   console.log('najsndfj');
  //   console.log(index);
  //   this.characters.splice(index,1);
  // }

  deleteCharaceterById(id:string){
    this.characters = this.characters.filter(character => character.id !== id);
  }

}
