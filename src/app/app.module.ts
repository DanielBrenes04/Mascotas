import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AgregarMascotaComponent} from "./agregar-mascota/agregar-mascota.component";
import {DetalleMascotaComponent} from "./detalle-mascota/detalle-mascota.component";
import {ListarMascotaComponent} from "./listar-mascota/listar-mascota.component";
import { HttpClientModule} from "@angular/common/http";
import { FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    AgregarMascotaComponent,
    DetalleMascotaComponent,
    ListarMascotaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
