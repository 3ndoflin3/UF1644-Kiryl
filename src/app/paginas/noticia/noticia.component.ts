import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/model/noticia';
import { NoticiaService } from 'src/app/services/noticia.service';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss']
})
export class NoticiaComponent implements OnInit {

  noticias: Array<Noticia>;
  noticia: Noticia;

  constructor(private noticiaService: NoticiaService) {

    this.noticias = new Array<Noticia>();
    this.noticia = new Noticia();

  }

  ngOnInit() {
    console.trace('Obtener listado');
    this.obtenerListado();

    /* console.debug('Noticias Recibidas %s', JSON.stringify(NOTICIASMAPEADAS));
    this.noticias = NOTICIASMAPEADAS; */
  }


  obtenerListado() {
    console.trace('Obtener listado');
    this.noticiaService.obtenerNoticias().subscribe(
      data => {

        /**
         * Mapea todo lo que encuentre dentro de items en el JSON y lo devuelve para pintarlo en el HTML
         */
        this.noticias = data;
        console.debug('Noticias Recibidas %o', this.noticias);

      },
      error => {
        console.error('Error obteniendo el listado');
      }
      
    );
  }

}
