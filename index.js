let myLibrary = [];

let shelfSpaces = document.querySelector(".shelf").children;


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

function displayLibraryOnPage(library)
{
    for (const [i, book] of library.entries())
    {
        if (shelfSpaces[i].className === "empty") 
        {
            shelfSpaces[i].className = "book"

            let bookTitle = document.createElement("p");
            bookTitle.innerText = book.title;

            shelfSpaces[i].appendChild(bookTitle);
        }
        
    }
    //refresh shelfSpaces after adding books
    shelfSpaces = document.querySelector(".shelf").children;
}


addBookToLibrary("Harry Potter","J.K. Rowling", "329", false);
addBookToLibrary("Lord of the Rings","J.R.R. Tolkien", "613", true);
console.log("Library:");
console.log(myLibrary);
displayLibraryOnPage(myLibrary);