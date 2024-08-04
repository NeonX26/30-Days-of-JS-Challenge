// Nested Object
//Task 5 - Create a nested object representing a library with properties like name and books(an array book objects), and log the library object to the console
const library = {
    name: "Library",
    books: [
        {
            title: "javascript",
            author: "John Doe",
            year: 2010
        },
        {
            title: "python",
            author: "mac Doe",
            year: 2000
        }
    ]
}

console.log(library);

//Task 6 Access and log the name of the library and the title of all the books in the library
library.getLibraryInfoAndBooksTitle = function(){
    console.log(this.name);
    console.log(this.address);
    console.log("Books Available:")
    this.books.forEach((book) => {
        console.log(book.title);
    })
}

library.getLibraryInfoAndBooksTitle();