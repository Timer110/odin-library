const myLibrary = [];

function Book (title, author, pages, read) {
    if (!new.target) {
        throw new Error("You must use the 'new' Operator to call the constructor-Function");
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
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
    
}

let hobbit = new Book("The Hobbit", "Author", 324, true);
let homework = new Book("Homework", "Me", 24, false)

hobbit.info();
homework.info();
