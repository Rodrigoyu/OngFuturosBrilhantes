// src/app/app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// 1. Importe seus componentes de página
import { Home } from './paginas/home/home';
import { Projetos } from './paginas/projetos/projetos';
import { Cadastro } from './paginas/cadastro/cadastro';

// 2. Defina as rotas
export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'projetos', component: Projetos },
  { path: 'cadastro', component: Cadastro },

  // Rota padrão: redireciona para 'home' se a URL estiver vazia
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 

  // (Opcional) Rota "Coringa" para páginas não encontradas
  { path: '**', redirectTo: '/home' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
