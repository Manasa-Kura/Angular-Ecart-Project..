import { Component, Output , EventEmitter, ViewChild, ElementRef} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css'
})
export class SearchBar {

  @Output() searchEvent = new EventEmitter<string>();
  @ViewChild('searchInput',{static:false}) input!: ElementRef;
  search(value: string){
    this.searchEvent.emit(value);
  }
   clear(){
    this.input.nativeElement.value = '';
    this.searchEvent.emit('');
  }

}