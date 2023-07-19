import { NgModule } from '@angular/core';
import { CounterComponent } from './components/counter/counter.component';
// Esto es un agrupador de mi module, counter

@NgModule({
  declarations: [
    CounterComponent
  ],

  // Un Modulo solo se puede consumir dentro de su mismo Scope, para que sea visible al mundo exterior, es necesario exportarlo como el siguiente ejemplo.
  exports: [
    CounterComponent
  ]
})
export class CounterModule{};
