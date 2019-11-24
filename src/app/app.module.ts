import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BooksComponent} from './books/books.component';
import {QuotePipe} from './quote.pipe';
import {EditBookComponent} from './edit-book/edit-book.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CustomizerDirective} from './customizer.directive';
import {BookDetailsComponent} from './book-details/book-details.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    QuotePipe,
    EditBookComponent,
    CustomizerDirective,
    BookDetailsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
