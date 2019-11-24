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

  books: Book[];

  constructor() {
    this.book = {
      title: 'Angular 9 Core',
      year: 2019,
      author: 'Unknown'
    };

    this.books = [{
      title: 'JavaScript: The Good Parts',
      author: 'Douglas Crockford',
      year: 2008,
      pages: 172,
      description: 'This authoritative book scrapes away these bad features to reveal a subset of JavaScript that\'s more reliable, readable, and maintainable'
    },
      {
        title: 'Mastering TypeScript',
        author: 'Nathan Rozentals',
        year: 2015,
        pages: 364,
        description: 'Build enterprise-ready, industrial strength web applications using TypeScript and leading JavaScript frameworks'
      }];
  }

  isJavaScript(book: Book): boolean {
    return book.title.toLowerCase().indexOf('javascript') >= 0;
  }

  displaySymbolCount(text: string | number): void {
    this.symbolCount = String(text || '').length;
  }

  ngOnInit() {
    // Initializing
  }

}
