import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProdutosComponent } from './produtos.component';   

import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';

const routes: Routes = [
  { path: '', component:   
 ProdutosComponent },
  { path: ':id', component: ProdutoDetalheComponent }
];

@NgModule({
  declarations: [
    ProdutosComponent,
    ProdutoDetalheComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProdutosModule { }