import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';
// Un Modulo solo se puede consumir dentro de su mismo Scope, para que sea visible al mundo exterior, es necesario exportarlo como el siguiente ejemplo.

@NgModule({
  declarations: [
    HeroComponent,
    ListComponent
  ],

  exports: [
    HeroComponent,
    ListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeroesModule{}
