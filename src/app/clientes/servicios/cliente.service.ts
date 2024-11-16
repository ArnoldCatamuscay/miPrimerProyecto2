import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  private urlEndPoint: string = 'http://localhost:5000/api/clientes';

  constructor(private htpp: HttpClient) { }

  getClientes(): Observable<Cliente[]>{
    console.log("Listando clientes desde el servicio");
    return this.htpp.get<Cliente[]>(this.urlEndPoint);
  }

  create(cliente: Cliente): Observable<Cliente>{
    console.log("Creando cliente desde el servicio");
    return this.htpp.post<Cliente>(this.urlEndPoint, cliente, {headers: this.httpHeaders});
  }
}
