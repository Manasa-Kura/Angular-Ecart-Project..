import { Component, ContentChildren, QueryList, AfterContentInit, ElementRef, ContentChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-brand-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './brand-section.html',
  styleUrl: './brand-section.css'
})

export class BrandSection implements AfterContentInit {
  @ContentChildren('card') cards!: QueryList<ElementRef>;
  ngAfterContentInit(){
    console.log("Total cards:", this.cards.length);

  // @ContentChild('card') card!: ElementRef;
  // ngAfterContentInit(){
  //   console.log("First card:", this.card);
  
  }
}