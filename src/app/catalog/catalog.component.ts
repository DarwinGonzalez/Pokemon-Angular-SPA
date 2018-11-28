import { DataServiceService } from './../services/data-service.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  pokemons$: Array<any> = [];
  images$: Array<any> = [];
  urlImagen: string;
  contador = 1;

  constructor(private data: DataServiceService) { }

  ngOnInit() {
    this.data.getPokemonNames().subscribe( data => this.pokemons$ = data["results"]);
    this.data.getPokemonImages(1).subscribe( data => this.images$ = data["sprites"]);
    console.log(this.pokemons$);
  }

  getPokemonImages(id) {
    this.data.getPokemonImages(id).subscribe( data => this.urlImagen = data["sprites"].front_default);
    console.log(this.images$);
    this.contador++;
    return this.urlImagen;
  }

}
