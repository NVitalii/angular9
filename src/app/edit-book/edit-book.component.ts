import {Component, OnInit} from '@angular/core';
import {BookService} from '../book.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Book} from '../book';

@Component({
  selector: 'app-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
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

  isValidControl(name: string): boolean {
    return this.bookForm.get(name).valid || this.bookForm.get(name).touched;
  }

  save() {
    this.bookService.addBook(this.bookForm.value as Book);
  }
}
