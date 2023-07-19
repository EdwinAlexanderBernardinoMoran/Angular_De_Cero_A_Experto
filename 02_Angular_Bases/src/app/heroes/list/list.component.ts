import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public herNames: string[] = [
    'Spiderman', 'Iroman', 'Hulk', 'She Hulk', 'Thor']

  public deletedHero?:string;

  removeLastHero():void{
    this.deletedHero = this.herNames.pop()
    // console.log({deletedGero});
  }
}
