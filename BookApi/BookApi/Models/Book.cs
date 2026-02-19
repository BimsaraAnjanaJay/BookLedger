using System.ComponentModel.DataAnnotations;

namespace BookApi.Models;

public class Book
{
    public int Id { get; set; }

    [Required]
    public string Title { get; set; } = string.Empty;

    [Required]
    [RegularExpression(@"^[a-zA-Z\s.]+$", ErrorMessage = "Author can only contain letters, spaces, and dots.")]
    public string Author { get; set; } = string.Empty;

    [Required]
    [RegularExpression(@"^[0-9-]+$", ErrorMessage = "ISBN can only contain numbers and dashes.")]
    public string Isbn { get; set; } = string.Empty;

    [Required]
    public DateTime PublicationDate { get; set; }
}
