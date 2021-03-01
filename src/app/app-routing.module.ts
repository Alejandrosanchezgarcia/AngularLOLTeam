import { ContactaComponent } from './contacta/contacta.component';
import { CampeonComponent } from './campeon/campeon.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'equipo' , component: CampeonComponent},
  {path: 'contacta' , component: ContactaComponent},
  {path: 'busqueda' , component: BusquedaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
