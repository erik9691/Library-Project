let myLibrary = [];

function Book(title, author, pages, read)
{
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read)
{
    book = new Book(title, author, pages, read)
    myLibrary.push(book);
}

console.log("Empty Library:");
console.log(myLibrary);
console.log("Full Library:");
addBookToLibrary("Harry Potter","J.K. Rowling", "329", false);
console.log(myLibrary);