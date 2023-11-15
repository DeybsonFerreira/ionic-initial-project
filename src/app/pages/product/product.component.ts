import { Component, OnInit, ViewChild } from '@angular/core';
import { IonMenu } from '@ionic/angular';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  produtos = [
    { id: 1, nome: 'Produto A', preco: 10.99, qtd: 10 },
    { id: 2, nome: 'Produto B', preco: 20.49, qtd: 10 },
    { id: 3, nome: 'Produto C', preco: 5.0, qtd: 10 },
  ];

  itensPorPagina: number = 10;
  paginaAtual: number = 1;
  totalPaginas: number = Math.ceil(this.produtos.length / this.itensPorPagina);
  @ViewChild('menu') menu!: IonMenu;

  get produtosPorPagina(): any[] {
    const startIndex = (this.paginaAtual - 1) * this.itensPorPagina;
    const endIndex = startIndex + this.itensPorPagina;
    return this.produtos.slice(startIndex, endIndex);
  }

  nextPage() {
    if (this.paginaAtual < this.totalPaginas) {
      this.paginaAtual++;
    }
  }

  changeItemsPerPage() {
    this.totalPaginas = Math.ceil(this.produtos.length / this.itensPorPagina);
    this.paginaAtual = 1;
  }

  previousPage() {
    if (this.paginaAtual > 1) {
      this.paginaAtual--;
    }
  }
}
