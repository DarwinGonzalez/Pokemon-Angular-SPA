import { DataServiceService } from './../services/data-service.service';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from './../shared/pokemon';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemonList: Array<string> = [];
  pokemonJSON: Array<any> = [];

  constructor(private data: DataServiceService) {

   }

  ngOnInit() {
    this.data.getPokemonNames().subscribe( data => this.pokemonJSON = data["results"]);
    console.log(this.pokemonJSON);
  }


}
