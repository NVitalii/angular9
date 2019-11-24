import {Injectable} from '@angular/core';
import {Book} from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[];

  constructor() {
    this.books = [{
      title: 'JavaScript: The Good Parts',
      author: 'Douglas Crockford',
      year: 2008,
      pages: 172,
      price: 100,
      description: 'This authoritative books scrapes away these bad features to reveal a subset of JavaScript that\'s more reliable, readable, and maintainable'
    },
      {
        title: 'Mastering TypeScript',
        author: 'Nathan Rozentals',
        year: 2015,
        pages: 364,
        price: 200,
        description: 'Build enterprise-ready, industrial strength web applications using TypeScript and leading JavaScript frameworks'
      }];
  }

  getBooks(): Book[] {
    return this.books;
  }

  addBook(book: Book): void {
    //this.books = [...this.books, book];
    this.books.push(book);
  }
}
