import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
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