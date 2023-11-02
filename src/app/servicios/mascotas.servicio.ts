import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const baseUrl: string = 'http://localhost:3000/mascotas'

@Injectable({
  providedIn: 'root'
})
export class MascotasService {

  constructor(private http:HttpClient) {}

  getAll(): Observable<any>
  {
    return this.http.get(baseUrl);
  }

  get(id:any): Observable<any>
  {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data:{nombre:string;raza:string;FNacimiento:Date;genero:string}): Observable<any>
  {
    return this.http.post(baseUrl,data);
  }

  update(id:any, data:any): Observable<any>
  {
    return this.http.put(`${baseUrl}/${id}`,data);
  }
  delete(id:any): Observable<any>
  {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByName(name: any): Observable<any> {
    console.log(name);
    return this.http.get(`${baseUrl}?nombre=${name}`);
  }


}
