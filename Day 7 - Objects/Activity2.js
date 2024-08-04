// Object methods
//Task 3 - Add amtehod to the book object that returns a string with the book's title and author and log resutl fof calling this method.

const book = {
    title : "javascript",
    author : "John Doe",
    year : 2010,
    fun : function() {
        console.log(`Title - ${this.title}, Author - ${this.author}, Year - ${this.year}`);
    }
}
book.fun()

//Task 4 - Add a mothod to the book object that take a parameter (year) and updated the book's year property, then log the updated object
book.updateYear = function(year){
    this.year = year;
};
book.updateYear(2001);
console.log(book.year);
console.log(book);