import {Injectable} from '@angular/core';
import {Book} from './book';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[];

  private $subject: BehaviorSubject<Book[]>;

  constructor() {
    this.$subject = new BehaviorSubject<Book[]>(this.books);
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
    this.$subject.next(this.books);
  }

  getBooks(): Observable<Book[]> {
    return this.$subject;
  }

  addBook(book: Book): void {
    this.books = [...this.books, book];
    this.$subject.next(this.books);
    // this.books.push(edit-book);
  }
}
