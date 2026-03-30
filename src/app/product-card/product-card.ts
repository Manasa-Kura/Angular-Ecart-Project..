import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],   // ✅ required for *ngIf
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {

  @Input() product: any;

  @Output() cartEvent = new EventEmitter<any>();

  addToCart(){
    this.cartEvent.emit(this.product);
  }

}