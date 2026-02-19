using Microsoft.AspNetCore.Mvc;
using BookApi.Models;

namespace BookApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class BooksController : ControllerBase
{
    private static List<Book> _books = new List<Book>
    {
        new Book { Id = 1, Title = "The Great Gatsby", Author = "F. Scott Fitzgerald", Isbn = "9780743273565", PublicationDate = new DateTime(1925, 4, 10) },
        new Book { Id = 2, Title = "1984", Author = "George Orwell", Isbn = "9780451524935", PublicationDate = new DateTime(1949, 6, 8) }
    };

    [HttpGet]
    public ActionResult<IEnumerable<Book>> GetBooks()
    {
        return Ok(_books);
    }

    [HttpGet("{id}")]
    public ActionResult<Book> GetBook(int id)
    {
        var book = _books.FirstOrDefault(b => b.Id == id);
        if (book == null)
        {
            return NotFound();
        }
        return Ok(book);
    }

    [HttpPost]
    public ActionResult<Book> CreateBook(Book book)
    {
        if (book.PublicationDate > DateTime.Now)
        {
            return BadRequest("Publication date cannot be in the future.");
        }

        if (!System.Text.RegularExpressions.Regex.IsMatch(book.Author, @"^[a-zA-Z\s.]+$"))
        {
             return BadRequest("Author can only contain letters, spaces, and dots.");
        }
        
        if (!System.Text.RegularExpressions.Regex.IsMatch(book.Isbn, @"^[0-9-]+$"))
        {
             return BadRequest("ISBN can only contain numbers and dashes.");
        }

        book.Id = _books.Any() ? _books.Max(b => b.Id) + 1 : 1;
        _books.Add(book);
        return CreatedAtAction(nameof(GetBook), new { id = book.Id }, book);
    }

    [HttpPut("{id}")]
    public IActionResult UpdateBook(int id, Book book)
    {
        if (id != book.Id)
        {
            return BadRequest();
        }

        if (book.PublicationDate > DateTime.Now)
        {
            return BadRequest("Publication date cannot be in the future.");
        }

        if (!System.Text.RegularExpressions.Regex.IsMatch(book.Author, @"^[a-zA-Z\s.]+$"))
        {
             return BadRequest("Author can only contain letters, spaces, and dots.");
        }
        
        if (!System.Text.RegularExpressions.Regex.IsMatch(book.Isbn, @"^[0-9-]+$"))
        {
             return BadRequest("ISBN can only contain numbers and dashes.");
        }

        var existingBook = _books.FirstOrDefault(b => b.Id == id);
        if (existingBook == null)
        {
            return NotFound();
        }

        existingBook.Title = book.Title;
        existingBook.Author = book.Author;
        existingBook.Isbn = book.Isbn;
        existingBook.PublicationDate = book.PublicationDate;

        return NoContent();
    }

    [HttpDelete("{id}")]
    public IActionResult DeleteBook(int id)
    {
        var book = _books.FirstOrDefault(b => b.Id == id);
        if (book == null)
        {
            return NotFound();
        }

        _books.Remove(book);
        return NoContent();
    }
}
