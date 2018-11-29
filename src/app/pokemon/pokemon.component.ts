import { Pokemon } from './../shared/pokemon';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  pokemon$: Pokemon;
  idForm: FormGroup;
  id: string;

  constructor(private fb: FormBuilder) {
    this.crearFormulario();
   }

  ngOnInit() {
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
  }

}
