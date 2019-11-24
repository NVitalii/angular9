import {Component, OnInit} from '@angular/core';
import {Book} from '../book';
import {BookService} from '../book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  book: Book;

  symbolCount: number;

  books: Book[];

  constructor(private bookService: BookService) {
    this.book = {
      price: 100,
      title: 'Angular 9 Core',
      year: 2019,
      author: 'Unknown'
    };
    this.bookService.getBooks().subscribe(books =>
      this.books = books);
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

