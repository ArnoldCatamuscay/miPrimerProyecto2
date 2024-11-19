import { Routes } from '@angular/router';
import { ClientesComponent } from './clientes/listarClientes/clientes.component';
import { FormComponent } from './clientes/crear-clientes/form.component';
import { FormActualizarComponent } from './clientes/actualizarClientes/form-actualizar.component';

export const routes: Routes = [
  {path:'', redirectTo: '/clientes/listarClientes', pathMatch: 'full'},
  {path: 'clientes/listarClientes', component: ClientesComponent},
  {path: 'clientes/crearClientes', component: FormComponent},
  {path: 'clientes/actualizar/:id', component: FormActualizarComponent}
];
