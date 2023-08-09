import { Component, Input } from '@angular/core';
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
}
