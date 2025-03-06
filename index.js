let myLibrary = [];

let shelfSpaces = document.querySelector(".shelf").children;
const addForm = document.querySelector(".add-form");

addForm.addEventListener("submit", function (e)
{
    e.preventDefault();

    const bookName = document.querySelector('input[name="bookName"]').value;
    const author = document.querySelector('input[name="author"]').value;
    const pages = document.querySelector('input[name="pages"]').value;
    const hasRead = document.querySelector('input[name="hasRead"]').checked;

    addBookToLibrary(bookName,author,pages,hasRead);
    displayLibraryOnPage();

    addForm.reset();
});



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
    console.log("ADDED");
    console.log(myLibrary);
    displayLibraryOnPage();
}

function displayLibraryOnPage()
{
    for (const [i, book] of myLibrary.entries())
    {
        if (shelfSpaces[i].className === "empty") 
        {
            shelfSpaces[i].className = "book"

            shelfSpaces[i].id = book.id;

            let bookTitle = document.createElement("p");
            bookTitle.innerText = book.title;

            let bookRemove = document.createElement("button");
            bookRemove.innerText = "X";
            bookRemove.className = "remove";

            let bookRead = document.createElement("input");
            bookRead.type = "image";
            bookRead.className = "read-button";
            if (book.read) 
            {
                bookRead.src = "icons/read.svg";
                bookRead.alt = "Read Icon";
            }
            else
            {
                bookRead.src = "icons/not-read.svg";
                bookRead.alt = "Not Read Icon";
            }

            shelfSpaces[i].appendChild(bookTitle);
            shelfSpaces[i].appendChild(bookRemove);
            shelfSpaces[i].appendChild(bookRead);

            addRemoveListeners(bookRemove);
            addReadListeners(bookRead);
        }

    }
    //refresh shelfSpaces after adding books
    shelfSpaces = document.querySelector(".shelf").children;
    console.log("DISPLAY");
    console.log(myLibrary);
}

function addRemoveListeners (bookRemove)
{
    bookRemove.addEventListener("click", function (e)
    {
        //remove from array
        for (const [i, book] of myLibrary.entries()) 
        {
            if (book.id === e.target.parentElement.id)
            {
                myLibrary.splice(i, 1);
                break;
            }
        }
        //remove from html
        for (const space of shelfSpaces)
        {
            if (space.className === "book")
            {
                while (space.lastElementChild) 
                {
                    space.removeChild(space.lastElementChild);
                }
                space.className = "empty";
            }
        }
        console.log("DELETED");
        console.log(myLibrary);
        displayLibraryOnPage();
    });
}

function addReadListeners (bookRead)
{
    bookRead.addEventListener("click", function (e)
    {
        for (const [i, book] of myLibrary.entries()) 
        {
            if (book.id === e.target.parentElement.id)
            {
                if (book.read)
                {
                    e.target.src = "icons/not-read.svg";
                    e.target.alt = "Not Read Icon";
                    book.read = false;
                }
                else
                {
                    e.target.src = "icons/read.svg";
                    e.target.alt = "Read Icon";
                    book.read = true;
                }
                break;
            }
        }
    });
}

addBookToLibrary("Harry Potter","J.K. Rowling", "329", false);
addBookToLibrary("Lord of the Rings","J.R.R. Tolkien", "613", true);
