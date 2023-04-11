let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
  let title = document.querySelector('#title').value;
  let author = document.querySelector('#author').value;
  let pages = document.querySelector('#pages').value;
  let read = document.querySelector('#read').checked;

  let newBook = new Book(title, author, pages, read);
  console.log(newBook);
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
