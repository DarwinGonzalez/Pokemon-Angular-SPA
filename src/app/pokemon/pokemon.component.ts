import { DataServiceService } from './../services/data-service.service';
import { Pokemon } from './../shared/pokemon';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Params, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  pokemon$: Array<any> = [];;
  idForm: FormGroup;
  id: string = "";
  name: string = "";


  constructor(private fb: FormBuilder, private route: ActivatedRoute, private data: DataServiceService ) {
    this.crearFormulario();
   }

  ngOnInit() {
    this.id = "1";
  }

  crearFormulario() {
    this.idForm = this.fb.group({
      id:''
    });
  }

  onSubmit() {
    this.id = this.idForm.value;
    console.log(this.id);
    this.idForm.reset();
    console.log(this.id["id"]);
    this.getName();
  }

  getName(){
    this.data.getPokemonImages(Object.values(this.id)[0]).subscribe(data => this.pokemon$ = data["forms"]);
  }

}
