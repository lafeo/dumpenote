const fs = require('fs')



const parser = (STRING) => {
    if(STRING.add){
        addBook(STRING.book.title, STRING.book.author, STRING.book.note);
    }
    else if(STRING.remove){
        addBook(STRING.book.title)
    }
}
const removeBook = (title) => {
    const notesArr = loadBook()
    const notesArr2 = []
    var contains = false
    notesArr.filter((note) => {
        if(note.title === title){
            contains = trues
        }
        else if(note.title != title){
            notesArr2.push({
                title: note.title,
                body: note.body
            })
        }
    })
    if(!contains){
         console.log('book not found');
        }
    saveBook(notesArr2)

}
const addBook = (title, author, body) => {
    const notesArr = loadBook()

    const duplicateBook = notesArr.filter((note) => note.title === title)
    
    if (duplicateBook.length === 0) {
        notesArr.push({
            title: title,
            author: author,
            note: body
        })
        console.log('new book added');
    }
    else{
        console.log('title exists')
        
    }
    saveBook(notesArr)
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