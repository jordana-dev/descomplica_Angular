import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ClientesComponent } from './clientes.component';
import { ClienteDetalheComponent } from './cliente-detalhe/cliente-detalhe.component';

const routes: Routes = [
  { path: '', component: ClientesComponent },
  { path: ':id', component: ClienteDetalheComponent }
];

@NgModule({
  declarations: [
    ClientesComponent,
    ClienteDetalheComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ClientesModule { }