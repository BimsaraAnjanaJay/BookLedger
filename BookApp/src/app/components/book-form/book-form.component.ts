import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';

@Component({
    selector: 'app-book-form',
    standalone: true,
    imports: [CommonModule, FormsModule, RouterModule],
    templateUrl: './book-form.component.html',
    styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
    book: Book = {
        id: 0,
        title: '',
        author: '',
        isbn: '',
        publicationDate: new Date().toISOString().split('T')[0]
    };
    maxDate: string = new Date().toISOString().split('T')[0];
    submitted = false;
    isEditMode = false;

    constructor(
        private bookService: BookService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.isEditMode = true;
            this.getBook(id);
        }
    }

    getBook(id: string): void {
        this.bookService.getBook(Number(id))
            .subscribe({
                next: (data) => {
                    this.book = data;
                    // Format date for input type="date"
                    if (this.book.publicationDate) {
                        const date = new Date(this.book.publicationDate);
                        const year = date.getFullYear();
                        const month = ('0' + (date.getMonth() + 1)).slice(-2);
                        const day = ('0' + date.getDate()).slice(-2);
                        this.book.publicationDate = `${year}-${month}-${day}`;
                    }
                },
                error: (e) => console.error(e)
            });
    }

    saveBook(): void {
        if (this.isEditMode) {
            this.updateBook();
        } else {
            this.createBook();
        }
    }

    createBook(): void {
        // Backend API expects specific date format or ISO string might be fine.
        // Datepicker returns string in yyyy-MM-dd format which is fine.
        this.bookService.createBook(this.book)
            .subscribe({
                next: (res) => {
                    console.log(res);
                    this.submitted = true;
                    this.router.navigate(['/books']);
                },
                error: (e) => console.error(e)
            });
    }

    updateBook(): void {
        this.bookService.updateBook(this.book.id, this.book)
            .subscribe({
                next: (res) => {
                    console.log(res);
                    this.submitted = true;
                    this.router.navigate(['/books']);
                },
                error: (e) => console.error(e)
            });
    }
}
