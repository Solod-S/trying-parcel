const BASE_URL = "http://localhost:7777";

function fetchBooks() {
  return fetch(`${BASE_URL}/books`).then((response) => response.json());
}
function fetchBookById(id) {
  return fetch(`${BASE_URL}/books/${id}`).then((response) => response.json());
}
fetchBookById(2);
fetchBooks();

// на асинке
// на асинке
// на асинке
// на асинке
// на асинке
// на асинке

async function fetchBooksAsync() {
  const response = await fetch(`${BASE_URL}/books`);
  const books = await response.then((response) => response.json());
  return books;
}

async function fetchBookByIdAsync(id) {
  const response = await fetch(`${BASE_URL}/books/${id}`);
  const book = await response.then((response) => response.json());
  return book;
}

// const BASE_URL = "http://localhost:4040";

// function fetchBooks() {
//   return fetch(`${BASE_URL}/books`).then((res) => res.json());
// }

// function fetchBookById(bookId) {
//   return fetch(`${BASE_URL}/books/${bookId}`).then((res) => res.json());
// }

// fetchBooks();
// fetchBookById(2);
// fetchBookById(4);
