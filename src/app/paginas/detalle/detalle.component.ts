import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/model/noticia';
import { ActivatedRoute } from '@angular/router';
import { NoticiaService } from 'src/app/services/noticia.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {

  noticia: Noticia;
  id: number;
  titulo: string;

  constructor(private noticiaService: NoticiaService, private route: ActivatedRoute) {
    this.noticia = new Noticia();
    this.route.params.subscribe(
      params => {
        console.debug('Paramteros URL detalle component %o', params);
        return this.id = params.id;
      }

    );
    this.titulo = '';
  }// constructor()

  ngOnInit() {
    console.trace('onInit() detalle id: ' + this.id);
    this.getDetalle(this.id);
  }// ngOnInit()

  getDetalle(id: number) {
    console.trace('getDetalle()')
    this.noticiaService.getDetalle(id).subscribe(
      data => {
        console.debug('Noticias recibidas %o', data);
        this.noticia = data;
         /*
          this.noticia.id = data.filter(x => x.id === id).map(y => y.id);
          this.noticia.titulo = data.filter(x => x.id === id).map( y => y.title);
          this.noticia.longTitle = data.filter(x => x.id === id).map( y => y.longTitle);
          this.noticia.fecha = data.filter(x => x.id === id).map( y => y.publicationDate);
          this.noticia.textoNoticia = data.filter(x => x.id === id).map( y => y.text);
          this.noticia.imagen = data.filter(x => x.id === id).map( y => y.imageSEO);
          */
        
        console.debug('Noticia recibida %o', this.noticia);
      });

      
      
  }
}
