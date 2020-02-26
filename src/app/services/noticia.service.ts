import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Noticia } from '../model/noticia';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private http: HttpClient) {
    console.trace('Pokemon service constructor')
  }

  crearNoticia(noticia: Noticia): Observable<any> {
    const url = 'http://localhost:3000/page/';
    console.debug(url);
    return this.http.post<any>(url, noticia);
  }

  obtenerNoticias(): Observable<any[]> {
    const url = 'http://localhost:3000/page/';
    console.debug(url);
    return this.http.get<any[]>(url);
  }

  getDetalle(id: number): Observable<any> {
    const url = `http://localhost:3000/page/${id}/`;
    console.debug(url);
    return this.http.get<any>(url);
  }
}
