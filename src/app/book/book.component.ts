import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  book: {
    title: string,
    pages?: number,
    year: number,
    desription?: number,
    author: string
  };

  constructor() {
    this.book = {
      title: 'Angular 9 Core',
      year: 2019,
      author: 'Unknown'
    };

  }

  ngOnInit() {
  }

}
