import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cliente-detalhe',
  templateUrl: './cliente-detalhe.component.html',
  styleUrls: ['./cliente-detalhe.component.css']
})
export class ClienteDetalheComponent implements OnInit {
  cliente: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id');
      // Aqui você buscaria o cliente pelo ID no seu serviço
      this.cliente = this.clientesService.getClienteById(id);
    });
  }
}