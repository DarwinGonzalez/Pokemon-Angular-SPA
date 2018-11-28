import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) { }

  getPokemonNames() {
    return this.http.get('https://pokeapi.co/api/v2/pokemon/');
  }

}
