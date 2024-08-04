// This keyword
const book = {
    title : "javascript",
    author : "John Doe",
    year : 2010,
    getTitleandYear : function(){
        return this.title + " was published in " + this.year;
    }
}

console.log(book.getTitleandYear());
