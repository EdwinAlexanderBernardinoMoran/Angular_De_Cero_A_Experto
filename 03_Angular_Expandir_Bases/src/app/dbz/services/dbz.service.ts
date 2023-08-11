// Injectable es un decorador que dice que lo trate como un servicio.
import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {
  // constructor() { }

  public characters: Character[] = [
    {
      name: 'Krillin',
      power: 100
    },
    {
      name: 'Goku',
      power: 9500
    },
    {
      name: 'Vegeta',
      power: 7500
    }
  ];

  onNewCharacter(character: Character):void {
    // console.log('MainPage');
    // console.log(character);

    this.characters.push(character);
  }

  // Paso numero 1 video 67: Aca se pasa desde el component hijo, de listados por el emit()
  onDeleteCharacter(index: number):void {
    console.log('najsndfj');
    console.log(index);
    this.characters.splice(index,1);
  }

}
