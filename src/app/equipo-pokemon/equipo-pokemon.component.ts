import { Pokemon } from './../shared/pokemon';
import { Component, OnInit } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-equipo-pokemon',
  templateUrl: './equipo-pokemon.component.html',
  styleUrls: ['./equipo-pokemon.component.scss']
})
export class EquipoPokemonComponent implements OnInit {

  pokemonTeam: Array<Pokemon> = [];
  pokemons$: Array<any> = [];


  constructor() { }

  ngOnInit() {
    console.log(this.obtainAllLocalStorage());
    this.pokemons$ = this.obtainAllLocalStorage();
    this.createPokemons();
  }

  obtainAllLocalStorage() {
    let json: Array<JSON> = [];
    var values = [],
      keys = Object.keys(localStorage),
      i = keys.length;

    while (i--) {
      values.push(localStorage.getItem(keys[i]));
    }

    for (let i = 0; i < values.length; i++) {
      let aux = JSON.parse(values[i]);
      json.push(aux);
    }
    return json;
  }

  createPokemons() {
    for (let i = 0; i < this.pokemons$.length; i++) {
      this.pokemonTeam[i] = new Pokemon(this.pokemons$[i].id, this.pokemons$[i].name, this.pokemons$[i].spriteUrl, this.pokemons$[i].type1, this.pokemons$[i].type2, this.pokemons$[i].move1, this.pokemons$[i].move2);
    }
    console.log(JSON.stringify(this.pokemonTeam));
  }

  deletePokemon(id) {
    console.log(id);
    localStorage.removeItem(id.id);
    var index = this.pokemonTeam.indexOf(id);
    console.log(index);
    if (index > -1) {
      this.pokemonTeam.splice(index, 1);
    }
  }


}
