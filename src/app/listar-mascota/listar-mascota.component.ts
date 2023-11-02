import { Component, OnInit } from '@angular/core';
import {MascotasService} from "../servicios/mascotas.servicio";

@Component({
  selector: 'app-listar-mascota',
  templateUrl: './listar-mascota.component.html',
  styleUrls: ['./listar-mascota.component.css']
})
export class ListarMascotaComponent implements OnInit {

  mascotas: any;
  mascotaActual:any = null;
  currentIndex = -1;
  nombre = '';

  constructor(private mascotaService: MascotasService) { }

  ngOnInit(): void {
    this.obtenerMascotas();
  }

  obtenerMascotas(): void {
    this.mascotaService.getAll()
      .subscribe(
        data => {
          this.mascotas = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  setActivarMascota(mascota: any, index: number): void {
    this.mascotaActual = mascota;
    this.currentIndex = index;
  }

  eliminarTodasMascotas(): void {
    this.mascotaService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.eliminarTodasMascotas();
        },
        error => {
          console.log(error);
        });
  }

  buscarNombre(): void {
    this.mascotaService.findByName(this.nombre)
      .subscribe(
        data => {
          this.mascotas = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
