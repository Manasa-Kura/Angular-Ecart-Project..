import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCard } from '../product-card/product-card';
import { CartService } from '../cart.service/cart.service';
import { ProductDetails } from '../product-details/product-details';
import { BrandSection } from '../brand-section/brand-section';
@Component({
  selector: 'app-product-list',
  standalone: true,  
  imports: [CommonModule, ProductCard, ProductDetails, BrandSection],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {
  @Input() searchText: string = '';
  constructor(public cartService: CartService) {}
  selectedProduct: any = null;
  @Input() product: any;
  products = [
    { id:1, name:'Men Black T-Shirt', price:25, image:'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=400', stock:true },
    { id:2, name:'Women Summer Dress', price:45, image:'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=400', stock:true },
    { id:3, name:'Blue Denim Jacket', price:60, image:'https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=400', stock:true },
    { id:4, name:'Running Sports Shoes', price:120, image:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=400', stock:true },
    { id:5, name:'White Sneakers Shoes', price:90, image:'https://images.unsplash.com/photo-1528701800489-20be3c5d64a9?q=80&w=400', stock:true },
    { id:6, name:'Leather Formal Shoes', price:150, image:'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=400', stock:true },
    { id:7, name:'Gold Hoop Earrings', price:30, image:'https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=400', stock:true },
    { id:8, name:'Silver Stud Earrings', price:20, image:'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=400', stock:true },
    { id:9, name:'Diamond Bracelet', price:200, image:'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=400', stock:true },
    { id:10, name:'Beaded Bracelet', price:15, image:'https://images.unsplash.com/photo-1588444650733-dc2dff1f7c88?q=80&w=400', stock:true },
    { id:11, name:'Women Handbag', price:80, image:'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=400', stock:true },
    { id:12, name:'Men Leather Wallet', price:35, image:'https://images.unsplash.com/photo-1616627980727-ff7d39a4f6b1?q=80&w=400', stock:true },
    { id:13, name:'Stylish Sunglasses', price:50, image:'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=400', stock:true },
    { id:14, name:'Classic Wrist Watch', price:140, image:'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=400', stock:true },
    { id:15, name:'Women Heels Sandals', price:70, image:'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=400', stock:true },
    { id:16, name:'Men Hoodie Sweatshirt', price:55, image:'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=400', stock:true },
    { id:17, name:'Kids Casual Shoes', price:40, image:'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=400', stock:true },
    { id:18, name:'Women Necklace Set', price:90, image:'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=400', stock:true },
    { id:19, name:'Travel Backpack', price:65, image:'https://images.unsplash.com/photo-1509762774605-f07235a08f1f?q=80&w=400', stock:true },
    { id:20, name:'Sports Cap', price:20, image:'https://images.unsplash.com/photo-1521369909029-2afed882baee?q=80&w=400', stock:true }
  ];
  viewProduct(product: any){
    this.selectedProduct = product;
  }
  get filteredProducts(){
    if(!this.searchText){
      return this.products;
    }
    return this.products.filter(p =>
      p.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
  addProduct(product:any){
    this.cartService.addToCart(product);
    console.log(this.cartService.getCart());
  }
}
