import { Component } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {
  clientes = [
    { id: 1, nome: 'Jordana Rodrigues Silva', email: 'jordana@silva.com' }, { id: 2, nome: 'Fernando Rodrigues Silva', email: 'fernando@silva.com' }
  ];
}