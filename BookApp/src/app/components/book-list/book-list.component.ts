import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // includes NgFor, NgIf, DatePipe
import { RouterModule } from '@angular/router'; // includes RouterLink
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';

@Component({
    selector: 'app-book-list',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
    books: Book[] = [];

    constructor(private bookService: BookService) { }

    ngOnInit(): void {
        this.retrieveBooks();
    }

    retrieveBooks(): void {
        this.bookService.getBooks()
            .subscribe({
                next: (data) => {
                    this.books = data;
                },
                error: (e) => console.error(e)
            });
    }

    refreshList(): void {
        this.retrieveBooks();
    }

    deleteBook(id: number): void {
        if (confirm('Are you sure you want to delete this book?')) {
            this.bookService.deleteBook(id)
                .subscribe({
                    next: (res) => {
                        console.log(res);
                        this.refreshList();
                    },
                    error: (e) => console.error(e)
                });
        }
    }
}
