export interface Book {
  id: number;
  title: string;
  author: string;
  isbn: string;
  publicationDate: string; // Using string for date from API usually comes as string
}
