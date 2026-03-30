import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service/cart.service';
@Component({
  selector: 'app-product-details',
  standalone: true, 
  imports: [CommonModule],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetails {
  @Input() product: any;
  constructor(private cartService: CartService){}
  addProduct(product: any){
    this.cartService.addToCart(product);
  }
}