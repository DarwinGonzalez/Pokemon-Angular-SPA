import { Pokemon } from './../shared/pokemon';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipo-pokemon',
  templateUrl: './equipo-pokemon.component.html',
  styleUrls: ['./equipo-pokemon.component.scss']
})
export class EquipoPokemonComponent implements OnInit {

  pokemonTeam: Array<Pokemon> = [];

  constructor() { }

  ngOnInit() {
    console.log(this.obtainAllLocalStorage());
  }

  obtainAllLocalStorage() {
    let json: Array<JSON> = [] ;
    var values = [],
      keys = Object.keys(localStorage),
      i = keys.length;

    while (i--) {
      values.push(localStorage.getItem(keys[i]));
    }

    for(let i = 0; i < values.length; i++){
      let aux= JSON.parse(values[i]);
      json.push(aux);
    }
    return json;
  }


}
