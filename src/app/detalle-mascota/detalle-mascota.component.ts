import { Component, OnInit } from '@angular/core';
import {MascotasService} from "../servicios/mascotas.servicio";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-detalle-mascota',
  templateUrl: './detalle-mascota.component.html',
  styleUrls: ['./detalle-mascota.component.css']
})
export class DetalleMascotaComponent implements OnInit {

  mascotaActual:any = null;
  mensaje = '';

  constructor(private mascotaService: MascotasService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.mensaje = '';
    this.obtenerMascota(this.route.snapshot.paramMap.get('id'));
  }

  obtenerMascota(id: any): void {
    this.mascotaService.get(id)
      .subscribe(
        data => {
          this.mascotaActual = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  actualizarMascota(): void {
    this.mascotaService.update(this.mascotaActual.id, this.mascotaActual)
      .subscribe(
        response => {
          console.log(response);
          this.mensaje = 'La mascota ha sido actualizado satisfactoriamente';
        },
        error => {
          console.log(error);
        });
  }

  borrarMascota(): void {
    this.mascotaService.delete(this.mascotaActual.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/mascotas']);
        },
        error => {
          console.log(error);
        });
  }

}

