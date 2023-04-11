let myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}

const bookBtn = document.querySelector('#new-book-btn');

bookBtn.addEventListener('click', function() {
    let bookForm = document.querySelector('#book-form');
    bookForm.style.display = 'block';
})
