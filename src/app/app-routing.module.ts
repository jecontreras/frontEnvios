import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicoComponent } from './pagina/component/publico/publico.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pagina/pagina.module').then(module => module.PaginaModule)
  },
  {
    path: "**",
    loadChildren: () => import('./pagina/pagina.module').then(module => module.PaginaModule)
  },
  {
    path: "index",
    loadChildren: () => import('./pagina/pagina.module').then(module => module.PaginaModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
