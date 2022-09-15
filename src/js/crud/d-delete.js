import { async } from "fast-glob";

const BASE_URL = "http://localhost:7777";

function removeBook(bookId) {
  const option = {
    method: "DELETE",
  };
  return fetch(`${BASE_URL}/books/${bookId}`, option);
}
removeBook(1);
// на асинке
// на асинке
// на асинке
// на асинке
// на асинке
// на асинке

async function removeBookAsync(bookId) {
  const option = {
    method: "DELETE",
  };
  const response = await fetch(`${BASE_URL}/books/${bookId}`, option);
  return response;
}
removeBookAsync(1);

//
//
//
//
//
//
// const BASE_URL = "http://localhost:4040";
// function removeBook(bookId) {
//   const url = `${BASE_URL}/books/${bookId}`;
//   const options = {
//     method: "DELETE",
//   };

//   return fetch(url, options).then((res) => res.json());
// }

// // removeBook(15);
// // removeBook(14);
