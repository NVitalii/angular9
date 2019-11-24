import {Component, OnInit} from '@angular/core';
import {BookService} from '../book.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Book} from '../book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  bookForm: FormGroup;

  constructor(private bookService: BookService, formBuilder: FormBuilder) {
    this.bookForm = formBuilder.group({
      title: formBuilder.control('', [Validators.required]),
      author: formBuilder.control('', [Validators.required]),
      pages: formBuilder.control('', [Validators.required]),
      year: formBuilder.control('', [Validators.required]),
      description: formBuilder.control('', [Validators.required]),
    });
  }

  ngOnInit() {
  }

  save() {
    this.bookService.addBook(this.bookForm.value as Book);
  }
}
