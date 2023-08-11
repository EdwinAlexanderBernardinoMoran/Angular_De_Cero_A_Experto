import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  // En el valor del Input es el valor de (charactersList) si no le mandan nada agarra el valor por defecto.
  public charactersList: Character[] = [
    {
      name: 'Trunks',
      power: 10
    }
  ];

  // Paso numero 2 video 67:
  @Output()
  public onDelete: EventEmitter<number> = new EventEmitter();

  onDeleteCharacter(index:number):void{
    this.onDelete.emit(index)
  }
}
