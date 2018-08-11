import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Pagina2Component } from './pagina2.component';
import { Pagina2RoutingModule } from './pagina2-routing.module';



@NgModule({
  imports: [
    CommonModule,
    Pagina2RoutingModule
  ],
  declarations: [
    Pagina2Component
  ]
})
export class Pagina2Module { }
