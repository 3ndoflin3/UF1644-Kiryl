import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleComponent } from './paginas/detalle/detalle.component';
import { NoticiaComponent } from './paginas/noticia/noticia.component';
import { FormularioComponent } from './paginas/formulario/formulario.component';


const routes: Routes = [
  { path: '', redirectTo: 'noticia', pathMatch: 'full' },
  { path: 'noticia', component: NoticiaComponent },
  { path: 'noticia/:id', component: DetalleComponent },
  { path: 'formulario', component: FormularioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RUTAS = [
  {
    "enlace": "/",
    "nombre": "Inicio"
  },
  {
    "enlace": "/noticia",
    "nombre": "Listado"
  },
  {
    "enlace": "formulario",
    "nombre": "Formulario"
  }
];