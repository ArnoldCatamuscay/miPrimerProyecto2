import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../cliente';
import { ClienteService } from '../servicios/cliente.service';
import { Router } from '@angular/router';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, HttpClientModule, SweetAlert2Module],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  public cliente: Cliente = new Cliente();
  public titulo: string = "Crear Cliente";

  constructor(private clienteService: ClienteService, private router: Router) {

  }

  public crearCliente() {
    console.log("Creando cliente");
    this.clienteService.create(this.cliente).subscribe(
      response => {
        console.log("Cliente creado exitosamente");
        console.log(this.cliente);
        this.router.navigate(['/clientes/listarClientes']);
        Swal.fire('Nuevo Cliente', `Cliente ${response.nombre} creado con éxito!`, 'success');
      }
    )
  }

}
