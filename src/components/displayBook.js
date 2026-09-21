import {
  deleteBook,
  updateReadStatus,
  updateScore,
} from "../services/firebase.js";

function setupDeleteButton(deleteButton, book, bookElement) {
  deleteButton.addEventListener("click", function () {
    deleteBook(book);
    bookElement.remove();
  });
}

function setupScoreButton(scoreButton, book, scoreInput, scoreDisplay) {
  scoreButton.addEventListener("click", function () {
    // Betyg kan bara sparas om boken är läst.
    if (book.getIsRead()) {
      const score = Number(scoreInput.value);
      const scoreSaved = book.setScore(score);
      if (scoreSaved) {
        scoreDisplay.textContent = `Betyg: ${book.getScore()}/5`;
        updateScore(book);
        scoreInput.value = "";
      } else {
        scoreDisplay.textContent = "Betyget måste vara mellan 1-5";
      }
    } else {
      scoreDisplay.textContent = "Boken behöver vara läst för att betygsättas!";
    }
  });
}

function setupReadButton(readButton, book, readStatus, scoreDisplay) {
  readButton.addEventListener("click", function () {
    book.toggleRead();
    updateReadStatus(book);
    updateScore(book);
    readStatus.textContent = book.getIsRead() ? "Läst" : "Inte läst";

    scoreDisplay.textContent =
      book.getIsRead() && book.getScore() !== undefined
        ? `Betyg: ${book.getScore()}/5`
        : "";
  });
}

// Hämtar HTML-mallen och skapar en kopia för den nya boken.
function createBookElement() {
  const template = document.querySelector("#book-template");
  const bookElement = template.content.firstElementChild.cloneNode(true);
  return bookElement;
}

export function displayBook(book, booksContainer) {
  const bookElement = createBookElement();

  const bookTitle = bookElement.querySelector(".book-title");
  const bookAuthor = bookElement.querySelector(".book-author");
  const readStatus = bookElement.querySelector(".read-status");
  const readButton = bookElement.querySelector(".read-button");
  const scoreInput = bookElement.querySelector(".score-input");
  const scoreButton = bookElement.querySelector(".score-button");
  const scoreDisplay = bookElement.querySelector(".book-score");
  const deleteButton = bookElement.querySelector(".delete-button");

  bookTitle.textContent = book.getTitle();
  bookAuthor.textContent = book.getAuthor();
  readStatus.textContent = book.getIsRead() ? "Läst" : "Inte läst";

  readButton.textContent = "Markera som läst";
  scoreButton.textContent = "Betygsätt";
  deleteButton.textContent = "Ta bort bok";

  if (book.getScore() !== undefined && book.getIsRead()) {
    scoreDisplay.textContent = `Betyg: ${book.getScore()}/5`;
  }

  setupScoreButton(scoreButton, book, scoreInput, scoreDisplay);
  setupReadButton(readButton, book, readStatus, scoreDisplay);
  setupDeleteButton(deleteButton, book, bookElement);

  booksContainer.append(bookElement);
}
