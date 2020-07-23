import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicoComponent } from './component/publico/publico.component';
import { PaginaRoutingModule } from './pagina-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PublicoComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    PaginaRoutingModule
  ]
})
export class PaginaModule { }
