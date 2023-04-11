let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function render() {
    const libraryBook = document.querySelector('#library');
    libraryBook.textContent = '';
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let bookElement = document.createElement('p');
        bookElement.textContent = `${book.title}`;
        libraryBook.appendChild(bookElement);
    }
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
