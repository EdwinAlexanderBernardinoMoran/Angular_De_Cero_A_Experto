import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../interfaces/country';
import { Observable, catchError, map, of, tap } from 'rxjs';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl:string = 'https://restcountries.com/v3.1';
  private apiUrlCountry:string = 'https://restcountries.com/v3.1';
  private apiUrlRigion:string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  searchCapital(term: string): Observable<Country[]>{

    const url = `${this.apiUrl}/capital/${term}`;

    return this.http.get<Country[]>(url)
    // Define operadores de RXjs
      .pipe(
        // tap(countries => console.log('Paso por el tap', countries)),
        // map(countries => []),
        // tap(countries => console.log('Paso por el tap2', countries)),
        catchError(() => of([]))
      )
  }

  searchCountry(term: string): Observable<Country[]>{
    const urlCountry = `${this.apiUrlCountry}/name/${term}`;
    return this.http.get<Country[]>(urlCountry).pipe(
      catchError(() => of([]))
    );
  }

  searchRigion(term: string): Observable<Country[]>{
    const urlRegion = `${this.apiUrlRigion}/region/${term}`;
    return this.http.get<Country[]>(urlRegion).pipe(
      catchError(() => of([]))
    );
  }
}
