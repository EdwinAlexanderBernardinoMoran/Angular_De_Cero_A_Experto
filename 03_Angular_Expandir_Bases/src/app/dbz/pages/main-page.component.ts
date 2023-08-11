import { Component} from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent{

  // Concept super fundamental en Angular (Inyeccio de Dependencias).
  // Esto habilita toda la informacion que esta siendo utilizada en este servicio.
  constructor(public dbzService: DbzService){};
}
