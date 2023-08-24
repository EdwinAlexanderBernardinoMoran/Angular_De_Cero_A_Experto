import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class GifsService {

  private _tagsHistory: string[] = [];
  private apiKey = 'y6lJHsvEGIkn7javATT8FqMNDdotCs94';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';

  // Inyectando Dependecia de Http
  constructor(private htpp: HttpClient) { }

  get tagsHistory(){
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string){
    tag = tag.toLowerCase();

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag)
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this.tagsHistory.splice(0,10);
  }

  // async searchTag(tag: string):Promise<void>{

    // if (tag.length === 0) return
    // this.organizeHistory(tag);

    // Alternatica 1.
    // fetch('https://api.giphy.com/v1/gifs/search?api_key=y6lJHsvEGIkn7javATT8FqMNDdotCs94&q=valorant&limit=10')
    //   .then(res => res.json())
    //   .then(data => console.log(data))


    // Alternativa 2
    // const resp = await fetch('https://api.giphy.com/v1/gifs/search?api_key=y6lJHsvEGIkn7javATT8FqMNDdotCs94&q=valorant&limit=10');
    // const data = await resp.json();

    // this._tagsHistory.unshift(tag);


    // this.htpp.get('https://api.giphy.com/v1/gifs/search?api_key=y6lJHsvEGIkn7javATT8FqMNDdotCs94&q=valorant&limit=10')
    // console.log(this.tagsHistory);
  // }

  searchTag(tag: string):void{
    if (tag.length === 0) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', tag)

    this.htpp.get(`${this.serviceUrl}/search`,{params}).subscribe(res => {
      console.log(res);
    })
    console.log(this.tagsHistory);
  }


  // this.htpp.get('https://api.giphy.com/v1/gifs/search?api_key=y6lJHsvEGIkn7javATT8FqMNDdotCs94&q=valorant&limit=10')
}
