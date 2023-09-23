import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit{

  // Inyectar servicion : 1, Activated route
  // Hay unos sin observable, hay otros de que toman captura de como se encuentra el observable de como se encuetra al url y no es un observable.
  constructor(
    private activatedRoute: ActivatedRoute,
    private CountriesService: CountriesService
  ){}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      ({id}) => {
        this.CountriesService.searchContryByAlphaCode(id).subscribe(
          country => {
            console.log({country});
          }
        )
        // console.log({params: id});
      }
    )
  }
}
