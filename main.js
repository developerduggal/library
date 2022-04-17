let myLibrary = [];
const booksGrid = document.querySelector("#books-grid");
const addBookBtn = document.querySelector("#add-book-btn");
const formPopup = document.querySelector("#form-popup");

// constructor function to create Book objects.
function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

// create Book objects for testing
const book1 = new Book("Thinking in Bets", "Debra Fine", 224, false);
const book2 = new Book("The Fine Art Of Small Talk", "Annie Duke", 288, true);
const book3 = new Book("Thinking in Bets", "Debra Fine", 224, false);
const book4 = new Book("The Fine Art Of Small Talk", "Annie Duke", 288, true);
const book5 = new Book("Thinking in Bets", "Debra Fine", 224, false);
const book6 = new Book("The Fine Art Of Small Talk", "Annie Duke", 288, true);

// manually add books to the myLibrary array
function addBookToLibrary(book) {
  myLibrary.push(book);
}
addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book4);
addBookToLibrary(book5);
addBookToLibrary(book6);

// create a book card using data from Book object and display it on screen.
function createBookCard(book) {
  // create all the book card elements
  const bookCard = document.createElement("div");
  const title = document.createElement("p");
  const author = document.createElement("p");
  const pages = document.createElement("p");
  const readBtn = document.createElement("button");
  const removeBtn = document.createElement("button");

  bookCard.classList.add("book-card");
  readBtn.classList.add("card-btn");
  readBtn.classList.add("read-btn");
  removeBtn.classList.add("card-btn");
  removeBtn.classList.add("remove-btn");

  title.textContent = `"${book.title}"`;
  author.textContent = book.author;
  pages.textContent = `${book.pages} pages`;
  removeBtn.textContent = "Remove";

  // customize the read button between 'read' and 'unread' based on the given information.
  if (book.isRead) {
    readBtn.classList.add("green-btn");
    readBtn.textContent = "Read";
  } else {
    readBtn.textContent = "Not Read";
    readBtn.classList.add("red-btn");
  }

  // push all the book card to the DOM.
  bookCard.appendChild(title);
  bookCard.appendChild(author);
  bookCard.appendChild(pages);
  bookCard.appendChild(readBtn);
  bookCard.appendChild(removeBtn);
  booksGrid.appendChild(bookCard);
}

// Extract all the Book objects inside myLibrary and show them on screen in a card format.
for (let i = 0; i < myLibrary.length; i++) {
  createBookCard(myLibrary[i]);
}

// to open a form to collect information when the '+ Add book' button is clicked.
function openForm() {
  formPopup.style.display = "block";
}

// to close the form upon submission
function closeForm() {
  formPopup.style.display = "none";
}

// remove a book card when the 'Remove' button is clicked.
const removeButtons = document.querySelectorAll(".remove-btn");
const bookCards = document.querySelectorAll(".book-card");
for (let i = 0; i < removeButtons.length; i++) {
  removeButtons[i].addEventListener("click", () => bookCards[i].remove());
}

// toggle read button between 'Read' and not 'Read' when clicked.
const readButtons = document.querySelectorAll('.read-btn');
for (let i = 0; i < readButtons.length; i++) {
  readButtons[i].addEventListener("click", () => {
    if (readButtons[i].classList.contains("green-btn")) {
      readButtons[i].classList.remove("green-btn");
      readButtons[i].classList.add("red-btn");
      readButtons[i].textContent = "Not Read";
    } else {
      readButtons[i].classList.remove("red-btn");
      readButtons[i].classList.add("green-btn");
      readButtons[i].textContent = "Read"
    }
  });
};

// create book card upon form submission
