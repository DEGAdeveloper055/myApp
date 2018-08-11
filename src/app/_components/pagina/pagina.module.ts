import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginaRoutingModule } from './pagina-routing.module';
import { PaginaComponent } from './pagina.component';

@NgModule({
  imports: [
    CommonModule,
    PaginaRoutingModule
  ],
  declarations: [
    PaginaComponent
  ]
})
export class PaginaModule { }
