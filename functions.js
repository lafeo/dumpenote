const fs = require('fs')
const app = require('./app.js')
const parser = (STRING) => {
    
    if(STRING.add){
        addBook(STRING.book.title, STRING.book.author, STRING.book.note);
    }
    else if(STRING.remove){
        removeBook(STRING.book.title)
    }
}
const removeBook = (title) => {
    const bookArr = loadBook()
    const bookArr2 = []
    var contains = false
    bookArr.filter((book) => {
        if(book.title === title){
            contains = true
        }
        else if(book.title != title){
            bookArr2.push({
                title: book.title,
                body: book.body
            })
        }
    })
    if(!contains){
         console.log('book not found');
         
        }
    saveBook(bookArr2)

}
const addBook = (title, author, body) => {
    const bookArr = loadBook()

    const duplicateBook = bookArr.filter((note) => note.title === title)
    
    if (duplicateBook.length === 0) {
        bookArr.push({
            title: title,
            author: author,
            note: body
        })
        console.log('new book added');
        app.exceptionString = 'a new book is added'
    }
    else{
        console.log('title exists')
        app.exceptionString = 'title exists'
        
    }
    saveBook(bookArr)
}
const saveBook = (notes) =>{
    fs.writeFileSync('notedb.json', JSON.stringify(notes))
}
const loadBook = () => {
    try {

        const noteJSON = fs.readFileSync('./notedb.json').toString()
        return JSON.parse(noteJSON)

    } catch (e) {
        return []
    }
}
module.exports = {
    addBook: addBook,
    removeBook: removeBook,
    parser: parser,
    loadBook: loadBook
}