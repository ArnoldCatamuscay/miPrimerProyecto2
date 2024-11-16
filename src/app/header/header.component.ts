import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  nombres: String = "Arnold";
  apellidos: String = "Catamuscay";
  disciplina: String = "Desarrollador Backend con experiencia en el uso de Spring Boot con Java.";
  descripcion: String = "Estudiante de Ingeniería de Sistemas un apasionado por la tecnología y me gusta aprender cosas nuevas.";
}
