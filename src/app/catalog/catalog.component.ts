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
  contador = 1;

  constructor(private data: DataServiceService) { }

  ngOnInit() {
    this.data.getPokemonNames().subscribe( data => this.pokemons$ = data["results"]);
    // this.data.getPokemonIds().subscribe(productoIds => this.pokemonId$ = productoIds);

    // this.route.params.pipe(switchMap((params: Params) => {
    //   this.visibilidad = 'oculto';
    //   return this.productoService.getProducto(+params['id'])}
    // ))
    // .subscribe(producto => { this.producto = producto; this.productorest = producto; this.setPrevPost(producto.id); this.visibilidad = 'visible'});

  }

}
