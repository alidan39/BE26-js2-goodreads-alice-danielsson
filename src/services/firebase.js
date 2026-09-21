const databaseUrl =
  "https://goodreads-a230d-default-rtdb.europe-west1.firebasedatabase.app";

async function saveBook(book) {
  const response = await fetch(`${databaseUrl}/books.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: book.getTitle(),
      author: book.getAuthor(),
      isRead: book.getIsRead(),
      score: book.getScore(),
    }),
  });

  const data = await response.json();
  book.setId(data.name);
}

async function deleteBook(book) {
  await fetch(`${databaseUrl}/books/${book.getId()}.json`, {
    method: "DELETE",
  });
}

async function updateReadStatus(book) {
  await fetch(`${databaseUrl}/books/${book.getId()}.json`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      isRead: book.getIsRead(),
    }),
  });
}

async function updateScore(book) {
  await fetch(`${databaseUrl}/books/${book.getId()}.json`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      score: book.getScore() ?? null,
    }),
  });
}

async function getBooks() {
  const response = await fetch(`${databaseUrl}/books.json`);
  return response.json();
}

export { saveBook, deleteBook, updateReadStatus, updateScore, getBooks };
