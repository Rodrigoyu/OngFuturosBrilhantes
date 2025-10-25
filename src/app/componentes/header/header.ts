import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- 1. IMPORTE O CommonModule
import { RouterModule } from '@angular/router'; // <-- 2. IMPORTE O RouterModule

@Component({
  selector: 'app-header',
  // Se 'imports' não existir, adicione a propriedade 'standalone: true'
  standalone: true, 
  imports: [
    CommonModule,   // <-- 3. ADICIONE AQUI
    RouterModule  // <-- 4. ADICIONE AQUI
  ],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  
  isMenuAberto = false; // Sua lógica do menu

  toggleMenu() {
    this.isMenuAberto = !this.isMenuAberto; 
  }
}