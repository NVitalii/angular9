import {Component, OnInit} from '@angular/core';
import {Book} from '../book';
import {BookService} from '../book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  book: Book;

  symbolCount: number;

  books: Book[];

  constructor(bookService: BookService) {
    this.book = {
      title: 'Angular 9 Core',
      year: 2019,
      author: 'Unknown'
    };
    this.books = bookService.getBooks();
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

