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
  pokemonId$: number[] = [];
  urlImagen: string;
  id: string = "";

  constructor(private data: DataServiceService) { }

  ngOnInit() {
    this.data.getPokemonNames().subscribe(data => this.pokemons$ = data["results"]);
  }

  addClass(id: any) {
    this.id = id;
  }

  onHover(item){
    this.id = ((item.url).split('/').splice(6,7,1))[0];
    console.log(((item.url).split('/').splice(6,7,1))[0]);
    return true;
  }
}
