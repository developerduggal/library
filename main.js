const myLibrary = [];
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

// create objects for testing using the Book object constructor.
const book1 = new Book("The Fine Art Of Small Talk", "Debra Fine", 224, true);
const book2 = new Book("Thinking in Bets", "Annie Duke", 288, false);

// manually add books to the myLibrary array
function addBookToLibrary(book) {
  myLibrary.push(book);
}

addBookToLibrary(book1);
addBookToLibrary(book2);

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
  removeBtn.classList.add("remove");

  title.textContent = `${book.title}`;
  author.textContent = book.author;
  pages.textContent = `${book.pages} pages`;
  removeBtn.textContent = "Remove";

  removeBtn.addEventListener("click", () => {
    myLibrary.splice(myLibrary.indexOf(book), 1);
    updateBooksGrid();
  });


  // customize the read button between 'read' and 'unread' based on the given information.
  if (book.isRead) {
    readBtn.classList.add("green-btn");
    readBtn.textContent = "Read";
  } else {
    readBtn.textContent = "Not Read";
    readBtn.classList.add("red-btn");
  }


  readBtn.addEventListener("click", () => {
    book.isRead = !book.isRead;
    updateBooksGrid();
  })

  // push all the book card to the DOM.
  bookCard.appendChild(title);
  bookCard.appendChild(author);
  bookCard.appendChild(pages);
  bookCard.appendChild(readBtn);
  bookCard.appendChild(removeBtn);
  booksGrid.appendChild(bookCard);
}

const removeButtons = document.querySelectorAll(".remove");

// Extract all the Book objects inside myLibrary and show them on screen in a card format.
const render = function () {
  for (let i = 0; i < myLibrary.length; i++) {
    createBookCard(myLibrary[i]);
  }
};

const addBookForm = document.querySelector("#add-book-form");

// to open a form to collect information when the '+ Add book' button is clicked.

function openForm() {
  addBookForm.reset();
  formPopup.style.display = "block";
}

// to close the form upon submission
function closeForm() {
  formPopup.style.display = "none";
}

// to reset the grid
const resetBooksGrid = () => {
  booksGrid.innerHTML = "";
};

// to update the grid according to the current status of myLibrary array.
const updateBooksGrid = function () {
  resetBooksGrid();
  render();
};

// close the form when the form is submitted
const submitButton = document.querySelector("#submit-btn");
submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  closeForm();
  const inputTitle = document.querySelector("#inputTitle").value;
  const inputAuthor = document.querySelector("#inputAuthor").value;
  const inputPages = document.querySelector("#inputPages").value;
  const inputIsRead = document.querySelector("#inputIsRead").checked;
  const newBook = new Book(inputTitle, inputAuthor, inputPages, inputIsRead);
  addBookToLibrary(newBook);
  updateBooksGrid();
});

// toggle read button between 'Read' and not 'Read' when clicked.
const readButtons = document.querySelectorAll(".read-btn");
for (let i = 0; i < readButtons.length; i++) {
  readButtons[i].addEventListener("click", () => {
    if (readButtons[i].classList.contains("green-btn")) {
      readButtons[i].classList.remove("green-btn");
      readButtons[i].classList.add("red-btn");
      readButtons[i].textContent = "Not Read";
    } else {
      readButtons[i].classList.remove("red-btn");
      readButtons[i].classList.add("green-btn");
      readButtons[i].textContent = "Read";
    }
  });
}

render();
// add the appropriate book card upon form submission
