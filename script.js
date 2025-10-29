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
    for (let i = 0; i < myLibrary.length; i++) {
        let card = document.createElement("div");
        card.setAttribute("class", "card");
        card.textContent = myLibrary[i].title;
        bookshelf.appendChild(card);
    }
}


// Operands

displayBooks();


// Debug
addBookToLibrary("The Hobbit", "J. R. R. Tolkien", 420, true);
addBookToLibrary("Homework", "Me", 24, false);
addBookToLibrary("Prüfungsamt", "IU University", 23, true);
console.log(myLibrary);


