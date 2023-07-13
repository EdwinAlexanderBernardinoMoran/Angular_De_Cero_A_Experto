import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'iroman';
  public age: number = 45

  // ONE WAY DATA BINDING - ENLAZADO EN UNA SOLA VÍA

  // Los get se ven como propiedades pero son metodos
  get capitalizedName():string {
    return this.name.toLocaleUpperCase()
  }

  // Metodo
  getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  }

  // TAREA CAMBIAR NOMBRE - EDAD

  changeHero():void{
    this.name = 'BatMan';
  }

  changeAge():void{
    this.age = 25;
  }
}
