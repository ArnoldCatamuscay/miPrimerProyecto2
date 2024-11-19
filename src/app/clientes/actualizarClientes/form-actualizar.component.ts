import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { Cliente } from '../cliente';
import { ClienteService } from '../servicios/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-actualizar',
  standalone: true,
  imports: [FormsModule, SweetAlert2Module, HttpClientModule],
  templateUrl: './form-actualizar.component.html',
  styleUrl: './form-actualizar.component.css'
})
export class FormActualizarComponent {

  public cliente: Cliente = new Cliente();
  public titulo: string = "Actualizar cliente";

  constructor(private clienteService: ClienteService, private router: Router, private route: ActivatedRoute) {}
  
  ngOnInit(): void {
    const clienteId = this.route.snapshot.paramMap.get('id');
    if(clienteId) {
      this.clienteService.getClientById(+clienteId).subscribe( cliente => {
        this.cliente = cliente;
      });
    }
  }

  public actualizarCliente(): void {
    console.log("Actualizando Cliente ", this.cliente);
    this.clienteService.update(this.cliente).subscribe(
      response => {
        console.log("Cliente actualizado exitosamente");
        this.router.navigate(['clientes/listarClientes']);
        Swal.fire('Cliente actualizado', `Cliente ${response.nombre} actualizado con éxito!`, 'success');
      },
      error => {
        console.error("Error al actualizar el cliente: ", error);
        Swal.fire('Error', 'No se pudo actualizar el cliente. Intente nuevamente', 'error');
      }
    );
  }
}
