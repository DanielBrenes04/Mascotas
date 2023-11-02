import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AgregarMascotaComponent} from "./agregar-mascota/agregar-mascota.component";
import {DetalleMascotaComponent} from "./detalle-mascota/detalle-mascota.component";
import {ListarMascotaComponent} from "./listar-mascota/listar-mascota.component";

const routes: Routes = [
  { path: 'agregar',component:AgregarMascotaComponent},
  { path: 'mascotas/:id',component:DetalleMascotaComponent},
  { path: 'mascotas',component:ListarMascotaComponent},
  { path: '',redirectTo:'mascotas',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
