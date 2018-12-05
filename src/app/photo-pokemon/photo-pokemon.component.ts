import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { DataServiceService } from './../services/data-service.service';

@Component({
  selector: 'app-photo-pokemon',
  templateUrl: './photo-pokemon.component.html',
  styleUrls: ['./photo-pokemon.component.scss']
})
export class PhotoPokemonComponent implements OnInit {
  id: string;
  pokemonName: string;
  types1: string;
  types2: string;
  moves1: string;
  moves2: string;

  constructor(private route: ActivatedRoute, private data: DataServiceService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.route.params.subscribe(params => this.id = params['id']);
    this.getName();
    this.getTypes();
    this.getAbilities();
  }

  getName() {
    this.data.getPokemonImages(Object.values(this.id)[0]).subscribe(data => this.pokemonName = (data["forms"][0].name));
    console.log(this.pokemonName);
  }

  getTypes() {
    this.data.getPokemonImages(Object.values(this.id)[0]).subscribe(data => this.types1 = data["types"][0]["type"].name);
    this.data.getPokemonImages(Object.values(this.id)[0]).subscribe(data => this.types2 = data["types"][1]["type"].name);
  }

  getAbilities() {
    this.data.getPokemonImages(Object.values(this.id)[0]).subscribe(data => this.moves1 = data["abilities"][0]["ability"].name);
    this.data.getPokemonImages(Object.values(this.id)[0]).subscribe(data => this.moves2 = data["abilities"][1]["ability"].name);
  }
}
