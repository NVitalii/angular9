import {Component, OnInit} from '@angular/core';
import {Book} from '../book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  book: Book;

  symbolCount: number;

  constructor() {
    this.book = {
      title: 'Angular 9 Core',
      year: 2019,
      author: 'Unknown'
    };
  }

  displaySymbolCount(text: string | number): void {
    this.symbolCount = String(text || '').length;
  }

  ngOnInit() {
    // Initializing
  }

}
