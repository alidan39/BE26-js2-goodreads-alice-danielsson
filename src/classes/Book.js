export class Book {
  #title;
  #author;
  #isRead;
  #score;
  #id;
  constructor(title, author, isRead = false, score = undefined, id = null) {
    this.#title = title;
    this.#author = author;
    this.#isRead = isRead;
    this.#score = score ?? undefined;
    this.#id = id;
  }

  toggleRead() {
    this.#isRead = !this.#isRead;
    // En bok som inte är läst ska inte ha något betyg.
    if (!this.#isRead) {
      this.#score = undefined;
    }
  }

  setScore(score) {
    // Betyget får bara vara mellan 1-5.
    if (score >= 1 && score <= 5) {
      this.#score = score;
      return true;
    }

    return false;
  }

  getTitle() {
    return this.#title;
  }

  getId() {
    return this.#id;
  }

  setId(id) {
    this.#id = id;
  }

  getAuthor() {
    return this.#author;
  }

  getIsRead() {
    return this.#isRead;
  }

  getScore() {
    return this.#score;
  }
}
