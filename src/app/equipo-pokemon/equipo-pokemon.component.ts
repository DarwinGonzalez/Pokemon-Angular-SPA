import { DataServiceService } from './../services/data-service.service';
import { Pokemon } from './../shared/pokemon';
import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, query, stagger ,state} from '@angular/animations';

@Component({
  selector: 'app-equipo-pokemon',
  templateUrl: './equipo-pokemon.component.html',
  styleUrls: ['./equipo-pokemon.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('* <=> *', animate(1000)),
    ]),
  ]
})
export class EquipoPokemonComponent implements OnInit {

  pokemonTeam: Array<Pokemon> = [];
  pokemons$: Array<any> = [];
  pokemonName: Array<string> = [];
  types1: Array<string> = [];
  types2: Array<string> = [];
  moves1: Array<string> = [];
  moves2: Array<string> = [];
  img: Array<string> = [];


  constructor(private data: DataServiceService) { }

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

  deleteTeam() {
    localStorage.clear();
    this.pokemonTeam = [];
  }

  genRandomTeam(){
    var randomIDs = [];
    this.deleteTeam();
    for(let i = 0; i < 6; i++){
      randomIDs.push(Math.round(Math.random() * 644));
    }

    for (let i = 0; i < 6; i++) {
      let auxID = randomIDs[i];
      let auxName = this.getName(randomIDs[i]);
      let auxImg = this.getImg(randomIDs[i]);
      let auxType1 = this.getTypes(randomIDs[i])[0];
      let auxType2 = this.getTypes(randomIDs[i])[1];
      let auxMove1 = this.getAbilities(randomIDs[i])[0];
      let auxMove2 = this.getAbilities(randomIDs[i])[1];
      this.pokemonTeam[i] = new Pokemon(auxID, auxName, auxImg, auxType1, auxType2, auxMove1, auxMove2);
    }

  }

  getName(id) {
    this.data.getPokemonImages(id).subscribe(data => this.pokemonName = (data["forms"][0].name));
    return this.pokemonName;
  }

  getTypes(id) {
    this.data.getPokemonImages(id).subscribe(data => this.types1.push(data["types"][0]["type"].name));
    this.data.getPokemonImages(id).subscribe(data => this.types2.push(data["types"][1]["type"].name));
    return [this.types1, this.types2];
  }

  getAbilities(id) {
    this.data.getPokemonImages(id).subscribe(data => this.moves1.push(data["moves"][0]["move"].name));
    this.data.getPokemonImages(id).subscribe(data => this.moves2.push(data["moves"][1]["move"].name));
    return [this.moves1, this.moves2];
  }

  getImg(id){
    return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id +".png"
  }



}
