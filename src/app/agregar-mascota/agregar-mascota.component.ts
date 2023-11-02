import {Component, OnInit} from "@angular/core";
import {MascotasService} from "../servicios/mascotas.servicio";

@Component({
  selector: 'app-agregar-mascota',
  templateUrl: './agregar-mascota.component.html',
  styleUrls: ['./agregar-mascota.component.css']
})
export class AgregarMascotaComponent implements OnInit {

  mascota = {
    nombre: '',
    raza: '',
    FNacimiento: new Date(),
    genero: ''
  };
  submitted = false;

  constructor(private mascotasService: MascotasService) {
  }

  ngOnInit(): void {
  }

  salvarMascota(): void {
    const data = {
      nombre: this.mascota.nombre,
      raza: this.mascota.raza,
      FNacimiento: this.mascota.FNacimiento,
      genero: this.mascota.genero
    };

    this.mascotasService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  nuevoMascota(): void {
    this.submitted = false;
    this.mascota = {
      nombre: '',
      raza: '',
      FNacimiento: new Date(),
      genero: ''
    };
  }

}
