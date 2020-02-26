import { Component, OnInit } from '@angular/core';
import { NoticiaService } from 'src/app/services/noticia.service';
import {  FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Noticia } from 'src/app/model/noticia';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  
  formulario: FormGroup;
  noticia: Noticia;

  constructor(private noticiaService: NoticiaService, private builder: FormBuilder) {
    this.noticia = new Noticia();
    this.formulario = this.builder.group({

        id: new FormControl(0),
        titulo: new FormControl(
          '', // Valor inicial
          [Validators.required, Validators.minLength(2), Validators.maxLength(50)]
        ),
        fecha: new FormControl(
          '', // Valor inicial
          [Validators.required, Validators.minLength(6), Validators.maxLength(15)]
        ),
        longTitle: new FormControl(
          '', // Valor inicial
          [Validators.required, Validators.minLength(2), Validators.maxLength(50)]
        ),
        textoNoticia: new FormControl(
          '', // Valor inicial
          [Validators.required, Validators.minLength(2), Validators.maxLength(50)]
        ),
        imagen: new FormControl('', [Validators.required, Validators.minLength(0), Validators.maxLength(200)])
      });

}
  ngOnInit() {
   
  }

  enviar( formData ) {
    console.debug('click en enviar %o', formData);
    
      if(formData.id ===0){
        this.crear(formData);
      }

  }/* enviar */

  crear(datosEnviados){// data informacion que te llega en la peticion, error si da error, y el () lo hace siempre 

    this.noticia.titulo = datosEnviados.titulo;
    this.noticiaService.crearNoticia(this.noticia).subscribe(
      data => {
        console.log('Data del post %o', datosEnviados);
        this.noticia = data;
    },

    error =>{
      console.error('Error en el metodo POST');

    },

    () => {
      console.log('Finally del Post');

    }
    
    );

  }

}
