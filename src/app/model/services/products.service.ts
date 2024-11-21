import { Injectable } from '@angular/core';
import { Iproducts } from './iproducts';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Iproducts[] = [
    { id: 1, name: 'Dunk Panda', price: 1500.0, description: 'Preto de couro', image: './dunk1.png'},
    { id: 2, name: 'Dunk Grey fog ', price: 750.0, description: 'cinza e branco', image: './dunk2.png' },
    { id: 3, name: 'Dunk Orange', price: 2000.0, description: 'Branco com detalhes em laranja', image: './dunk3.png' }
  ];
  getProducts(): Iproducts[] {
    return this.products;
  }
}
