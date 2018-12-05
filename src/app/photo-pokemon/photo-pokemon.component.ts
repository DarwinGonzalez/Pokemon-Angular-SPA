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
  pokemon$: Array<any> = [];

  constructor(private route: ActivatedRoute, private data: DataServiceService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.route.params.subscribe(params => this.id = params['id']);
    this.data.getPokemonImages(this.id).subscribe(data => this.pokemon$ = data["results"]);
  }

}
