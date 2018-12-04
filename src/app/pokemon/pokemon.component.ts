import { DataServiceService } from './../services/data-service.service';
import { Pokemon } from './../shared/pokemon';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Params, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';


@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
  animations: [
    trigger('listStagger', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(-15px)' }),
            stagger(
              '50ms',
              animate(
                '550ms ease-out',
                style({ opacity: 1, transform: 'translateY(0px)' })
              )
            )
          ],
          { optional: true }
        ),
        query(':leave', animate('50ms', style({ opacity: 0 })), {
          optional: true
        })
      ])
    ])
  ]
})
export class PokemonComponent implements OnInit {

  pokemon$: Array<any> = [];
  types$: Array<any> = [];
  idForm: FormGroup;
  id: string;
  name: string = "";


  constructor(private fb: FormBuilder, private route: ActivatedRoute, private data: DataServiceService) {
    this.crearFormulario();
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.route.params.subscribe(params => this.id = params['id']);
    this.data.getPokemonImages(this.id).subscribe(data => this.pokemon$ = data["results"]);
  }

  crearFormulario() {
    this.idForm = this.fb.group({
      id: ''
    });
  }

  onSubmit() {
    this.id = this.idForm.value;
    console.log(this.id);
    this.idForm.reset();
    console.log(this.id["id"]);
    this.getName();
    this.getTypes();
    this.types$ = [];
  }

  getName() {
    this.data.getPokemonImages(Object.values(this.id)[0]).subscribe(data => this.pokemon$ = data["forms"]);
  }

  getTypes() {
    this.data.getPokemonImages(Object.values(this.id)[0]).subscribe(data => this.types$.push(data["types"][0]["type"]));
    this.data.getPokemonImages(Object.values(this.id)[0]).subscribe(data => this.types$.push(data["types"][1]["type"]));
  }

}
