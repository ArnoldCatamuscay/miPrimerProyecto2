import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Cliente } from '../cliente';
import { RouterLink, RouterModule } from '@angular/router';
import { ClienteService } from '../servicios/cliente.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule, RouterLink, HttpClientModule],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent {
  clientes: Cliente[] = [];

  constructor(private objClienteService: ClienteService) { }

  ngOnInit(): void {
    this.objClienteService.getClientes().subscribe
    (
      clientes => {
        console.log("listando clientes");
        this.clientes = clientes;
      }
    );
  }
}
