import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../model/services/products.service';
import { Iproducts } from '../model/services/iproducts';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  providers:[ProductsService],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent implements OnInit{
    constructor(private productsService:ProductsService){}
    products: Iproducts[] = [];

    ngOnInit(): void {
      this.products = this.productsService.getProducts();
    }
    mensagem: string = 'nenhuma ação realizada ainda';
    buttonColor= '#FF6452';
    changeColor(): void {
      this.mensagem = 'Botao clicando! A função foi chamada com sucesso';
      console.log('Função chamada ao clicar no Botão');
      this.buttonColor = 'red';
    }

}



