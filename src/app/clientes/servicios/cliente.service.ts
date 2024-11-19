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

  update(cliente: Cliente): Observable<Cliente> {
    console.log("Actualizando cliente desde el servicio", cliente);
    return this.htpp.put<Cliente>(`${this.urlEndPoint}/${cliente.id}`, cliente, {headers: this.httpHeaders});
  }

  deleteCliente(id: number): Observable<void> {
    console.log("Eliminando Cliente desde el servicio");
    return this.htpp.delete<void>(`${this.urlEndPoint}/${id}`, { headers: this.httpHeaders });
  }

  getClientById(id: number): Observable<Cliente> {
    console.log("Obteniendo cliente con ID: ", id);
    return this.htpp.get<Cliente>(`${this.urlEndPoint}/${id}`);
  }
}
