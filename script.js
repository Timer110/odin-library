// DOM Elements
const bookshelf = document.querySelector(".bookshelf");
const inputTitle = document.querySelector("#title");
const inputAuthor = document.querySelector("#author");
const inputPages = document.querySelector("#pages");
const inputRead = document.querySelector("#read");
const inputButtonAddBook = document.querySelector("#addBook");

// Variables
const myLibrary = [];


// Functions
function Book (title, author, pages, read, id) {
    if (!new.target) {
        throw new Error("You must use the 'new' Operator to call the constructor-Function");
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.id = id;
    if (read == true) {
        this.read = "read";
    }
    if (read == false){
        this.read = "not read yet";
    }
    this.info = function() {
        console.log(this.title + " by " + this.author + ", " + this.pages + " pages, " + this.read);
    }
}

function addBookToLibrary (title, author, pages, read) {
    let tempId = crypto.randomUUID();
    let newBook = new Book(title, author, pages, read, tempId)
    myLibrary.push(newBook);
}

function displayBooks () {
    bookshelf.innerHTML = "";

    for (let i = 0; i < myLibrary.length; i++) {
        let card = document.createElement("div");
        card.setAttribute("class", "card");

        let h3Title = document.createElement("h3");
        card.appendChild(h3Title);

        let h4Author = document.createElement("h4");
        card.appendChild(h4Author);

        let pPages = document.createElement("p");
        pPages.setAttribute("class", "pCard");
        card.appendChild(pPages);

        let pRead = document.createElement("p")
        pRead.setAttribute("class", "pCard")
        card.appendChild(pRead);

        let pId = document.createElement("p")
        pId.setAttribute("class", "pCard")
        card.appendChild(pId);



        h3Title.textContent = myLibrary[i].title;
        h4Author.textContent = myLibrary[i].author;
        pPages.textContent = myLibrary[i].pages;
        pRead.textContent = myLibrary[i].read;
        pId.textContent = myLibrary[i].id;
        bookshelf.appendChild(card);
    }
}

//Eventlisteners

inputButtonAddBook.addEventListener("click", function () {
    let tempTitle = inputTitle.value;
    let tempAuthor = inputAuthor.value;
    let tempPages = inputPages.value;
    let tempRead = inputRead.checked;

    addBookToLibrary(tempTitle, tempAuthor, tempPages, tempRead);
    displayBooks();
} );


// Operands



// Debug
addBookToLibrary("The Hobbit", "J. R. R. Tolkien", 420, true);
// addBookToLibrary("Homework", "Me", 24, false);
// addBookToLibrary("Prüfungsamt", "IU University", 23, true);
displayBooks();
console.log(myLibrary);


