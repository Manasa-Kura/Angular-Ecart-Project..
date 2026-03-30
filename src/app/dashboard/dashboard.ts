import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';   
import { ProductList } from '../product-list/product-list';
import { SearchBar } from '../search-bar/search-bar';
import { Header } from '../header/header';
import { ViewChild } from '@angular/core';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, ProductList, SearchBar, Header], 
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})

export class Dashboard {

  searchValue: string = '';

  handleSearch(value: string){
    this.searchValue = value;
  }
  @ViewChild('searchComp') searchComponent!: SearchBar;
  clearFromParent(){
    this.searchComponent.clear();
  }

}
