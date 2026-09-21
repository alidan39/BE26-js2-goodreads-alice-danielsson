import { Book } from "./classes/Book.js";
import { saveBook, getBooks } from "./services/firebase.js";
import { displayBook } from "./components/displayBook.js";
import "./style.css";

const form = document.querySelector("form");
const booksContainer = document.querySelector("#books");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const book = new Book(title, author);
  displayBook(book, booksContainer);
  saveBook(book);

  form.reset();
});

async function loadBooks() {
  const data = await getBooks();
  for (const id in data) {
    const bookData = data[id];

    const book = new Book(
      bookData.title,
      bookData.author,
      bookData.isRead,
      bookData.score,
      id,
    );

    displayBook(book, booksContainer);
  }
}
loadBooks();
