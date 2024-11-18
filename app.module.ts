import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProdutosModule } from './produtos/produtos.module';
import { ClientesModule } from './clientes/clientes.module';

const routes: Routes = [
  { path: '', redirectTo: '/produtos', pathMatch: 'full' },
  { path: 'produtos', loadChildren: () => import('./produtos/produtos.module').then(m => m.ProdutosModule) },
  { path: 'clientes', loadChildren: () => import('./clientes/clientes.module').then(m => m.ClientesModule) }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }