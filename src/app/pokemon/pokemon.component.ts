import { Pokemon } from './../shared/pokemon';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  pokemon$: Pokemon;

  constructor() { }

  ngOnInit() {
  }

}
