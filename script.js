let myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}



function render() {
    const bookGrid = document.querySelector('.library-grid');
    bookGrid.textContent = '';
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');

        const bookTitle = document.createElement('p');
        bookTitle.classList.add('book-title');
        bookTitle.textContent = `${book.title}`;
        bookCard.appendChild(bookTitle);

        const bookAuthor = document.createElement('p');
        bookAuthor.classList.add('book-author');
        bookAuthor.textContent = `by ${book.author}`;
        bookCard.appendChild(bookAuthor);

        const bookPages = document.createElement('p');
        bookPages.classList.add('book-pages');
        bookPages.textContent = `${book.pages} pages`;
        bookCard.appendChild(bookPages);

        const bookRead = document.createElement('p');
        bookRead.classList.add('book-read');
        bookRead.textContent = `${book.read ? 'Read' : 'Not read yet'}`;
        bookCard.appendChild(bookRead);

        const removeButton = document.createElement('button');
        removeButton.classList.add('remove-btn');
        removeButton.textContent = 'Remove';
        removeButton.onclick=`removeBook(${i})`;
        bookCard.appendChild(removeButton);
        

        bookGrid.appendChild(bookCard);
    }
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    render();
}

function addBookToLibrary() {
  let title = document.querySelector('#title').value;
  let author = document.querySelector('#author').value;
  let pages = document.querySelector('#pages').value;
  let read = document.querySelector('#read').checked;

  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  render();
}

const bookBtn = document.querySelector('#new-book-btn');

bookBtn.addEventListener('click', function() {
    let bookForm = document.querySelector('#book-form');
    bookForm.style.display = 'block';
})

document.querySelector('#book-form').addEventListener('submit', function() {
    event.preventDefault();
    addBookToLibrary();
})
