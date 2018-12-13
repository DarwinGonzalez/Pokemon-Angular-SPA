import { ConsultaServiceService } from './../services/consulta-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Consulta } from '../shared/contacto';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {
  consultaForm: FormGroup;
  consulta: Consulta;

  consultarest: Consulta;

  erroresForm = {

    'nombre': '',

    'apellidos': '',

    'telefono': '',

    'email': ''

  };


  mensajesError = {

    'nombre': {
      'required': 'El nombre es obligatorio.',

      'minlength': 'El nombre debe tener una longitud mÌnima de 2 caracteres.',

      'maxlength': 'El nombre no puede exceder de 25 caracteres.'
    },

    'apellidos': {

      'required': 'Los apellidos son obligatorios.',

      'minlength': 'Los apellidos deben tener una longitud mÌnima de 2 caracteres.',

      'maxlength': 'Los apellidos no pueden exceder de 25 caracteres.'
    },

    'telefono': {

      'required': 'El n˙mero de teléfono es obligatorio.',

      'pattern': 'El n˙mero de teléfono sólo puede contener números.'
    },

    'email': {

      'required': 'La dirección de email es obligatoria.',

      'email': 'La dirección de email no tiene el formato correcto.'
    },

  };

  constructor(private fb: FormBuilder, private consultaService: ConsultaServiceService) { this.crearFormulario(); }

  ngOnInit() {
  }

  crearFormulario() {
    this.consultaForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      apellidos: ['', [Validators.required] ],
      telefono: [0, [Validators.required, Validators.pattern]],
      email: ['', [Validators.required,Validators.email]],
      contactar: false,
      mensaje: ''
    });

    this.consultaForm.valueChanges.subscribe(datos => this.onCambioValor(datos));
    this.onCambioValor();
  }

  onSubmit() {
    this.consulta = this.consultaForm.value;
    this.consultarest = this.consulta;
    this.consultaService.enviarConsulta(this.consultarest)
      .subscribe(consulta => { this.consultarest = consulta });

    console.log(this.consulta);
    this.consultaForm.reset();
  }

  onCambioValor(data?: any) {
    if (!this.consultaForm) { return; } const form = this.consultaForm;
    for (const field in this.erroresForm) {
      // Se borrarán los mensajes de error previos
      this.erroresForm[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.mensajesError[field]; for (const key in control.errors) {
          this.erroresForm[field] += messages[key] + ' ';
        }
      }
    }
  }

}