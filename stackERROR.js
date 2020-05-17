app.post('/api', (request, response) => {
    
    const k = {
        title: exceptionString,
    }
    console.log('i got a request');
    console.log(request.body);//now we get the stuff the user has entered
    functions.parser(request.body);
    response.send(k)
});

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