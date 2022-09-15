//PUT перезаписыывает (не заполненнЫе поля теряем)
// PATHC обновляет (добавляет только новое)

const BASE_URL = "http://localhost:7777";

function updateBookByid(update, bookId) {
  const option = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(update),
  };

  return fetch(`${BASE_URL}/books/${bookId}`, option).then((response) =>
    response.json()
  );
}
updateBookByid({ title: "FFFFFFFF" }, 2);

// на асинке
// на асинке
// на асинке
// на асинке
// на асинке
// на асинке

async function updateBookByidAsync(update, bookId) {
  const option = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(update),
  };

  const response = await fetch(`${BASE_URL}/books/${bookId}`, option);
  const updatedBook = response.then((response) => response.json());
  return updatedBook;
}

async function addAndRenderBook() {
  try {
    const book = await updateBookByidAsync({});
    console.log(book);
  } catch (error) {
    console.log(error);
  }
}

addAndRenderBook({ title: "FFFFFFFF" }, 2);

//
//
//
//
//
//
//
//
// const BASE_URL = "http://localhost:7777";

// function updateBookById(update, bookId) {
//   const options = {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(update),
//   };

//   return fetch(`${BASE_URL}/books/${bookId}`, options).then((res) =>
//     res.json()
//   );
// }

// // updateBookById({ title: 'Большая новая книга по NODEJS' }, 19);

// // updateBookById({ rating: 1 }, 18);

// // updateBookById({ rating: 4, author: 'Манго' }, 17);
