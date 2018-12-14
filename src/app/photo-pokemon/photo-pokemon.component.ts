import { Pokemon } from './../shared/pokemon';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService } from './../services/data-service.service';

@Component({
  selector: 'app-photo-pokemon',
  templateUrl: './photo-pokemon.component.html',
  styleUrls: ['./photo-pokemon.component.scss']
})
export class PhotoPokemonComponent implements OnInit {
  id: string;
  pokemonName: string;
  types1: Array<string> = [];
  types2: Array<string> = [];
  moves1: Array<string> = [];
  moves2: Array<string> = [];
  img: string;
  teamItem: Pokemon;
  contadorTeam: number = 0;

  constructor(private route: ActivatedRoute, private data: DataServiceService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.route.params.subscribe(params => this.id = params['id']);
    this.getName();
    this.getTypes();
    this.getAbilities();
    this.frontImg();
    this.setParametersNull();
  }

  getName() {
    this.data.getPokemonImages(this.id).subscribe(data => this.pokemonName = (data["forms"][0].name));
  }

  getTypes() {
    this.data.getPokemonImages(this.id).subscribe(data => this.types1.push(data["types"][0]["type"].name));
    this.data.getPokemonImages(this.id).subscribe(data => this.types2.push(data["types"][1]["type"].name));
  }

  getAbilities() {
    this.data.getPokemonImages(this.id).subscribe(data => this.moves1.push(data["moves"][0]["move"].name));
    this.data.getPokemonImages(this.id).subscribe(data => this.moves2.push(data["moves"][1]["move"].name));
  }

  setParametersNull(){
    this.moves1 = [];
    this.moves2 = [];
    this.types1 = [];
    this.types2 = [];
  }

  frontImg(){
    this.img =  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + this.id +".png"
  }

  backImag(){
    this.img = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/" + this.id + ".png"
  }

  nextID() {
    var aux = parseInt(this.id) + 1;
    if(aux >= 10090){
      aux = 1;
      this.id = aux.toString();
      this.reloadPokemon();
    }
    else{
      this.id = aux.toString();
      this.reloadPokemon();
    }
  }

  prevID() {
    var aux = parseInt(this.id) - 1;
    if(aux >= 1){
      this.id = aux.toString();
      this.reloadPokemon();
    }
    else{
      aux = 10090;
      this.id = aux.toString();
      this.reloadPokemon();
    }

  }

  reloadPokemon(){
    this.getName();
    this.getTypes();
    this.getAbilities();
    this.frontImg();
    this.setParametersNull();
  }

  AddPokemonToTeam() {
   this.teamItem = new Pokemon(this.id, this.pokemonName, this.img, this.types1[0], this.types2[0], this.moves1[0], this.moves2[0]);
   console.log(this.teamItem);
   this.contadorTeam++;
   if((this.contadorTeam) <= 6){
      if(!localStorage.getItem(this.id)){
        localStorage.setItem(this.id, JSON.stringify(this.teamItem));
        alert("¡" + this.pokemonName.toUpperCase() + " esta muy contento de estar en tu equipo!")
      }
      else {
        alert("Este pokémon ha sido ya añadido a su equipo Pokémon");
      }
   }
   else {
    alert("Su equipo Pokémon ya tiene el máximo de 6 pokémon");
   }
  }

}
