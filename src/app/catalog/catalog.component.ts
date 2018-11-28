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

  constructor(private data: DataServiceService) { }

  ngOnInit() {
    this.data.getPokemonNames().subscribe( data => this.pokemons$ = data["results"]);
    console.log(this.pokemons$);
    // this.getPokemonImages();
  }

  // getPokemonImages() {
  //   this.data.getPokemonNames().subscribe( data => this.pokemons$ = data["sprites"]);
  //   console.log(this.images$);
  // }

}
