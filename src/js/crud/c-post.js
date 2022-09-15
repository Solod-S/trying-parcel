//POST запись нового объекта

const BASE_URL = "http://localhost:7777";

const newBook = {
  title: "Крутая книга",
  author: "Крутой чувак",
  genres: ["Крутой жанр"],
  rating: 10,
};
// новая книга для отправки на сервер

function addBook(newBook) {
  const options = {
    method: "POST",
    // метод записи
    headers: {
      "Content-Type": "application/json",
    },
    // заголовок в котором указываем тип контента
    body: JSON.stringify(newBook),
    // мы отправляем в боди застригифаиный объект  (ДОБАВЛЯЕМ КНИГУ)
  };

  return fetch(`${BASE_URL}/books`, options).then((response) =>
    response.json()
  );
  // ревузьтат функции добавление книги на сервер (в опциях method: "POST" +  headers: + body: JSON.stringify(newBook))
}

// addBook(newBook).then(renderBook).catch(error => console.log(error));
// addBook({
//   title: "Крутая книга2",
//   author: "Крутой чувак2",
//   genres: ["Крутой жанр2"],
//   rating: 10,
// }).then(renderBook);

// function renderBook(book) {
//   console.log("Пришел ответ от бекенда можно рисовать");
//   console.log(book);
// }

// function fetchBooks() {
//   return fetch(`${BASE_URL}/books`).then((response) => response.json());
// }
// function fetchBookById(id) {
//   return fetch(`${BASE_URL}/books/${id}`).then((response) => response.json());
// }
// fetchBookById(2);
// fetchBooks();

// на асинке
// на асинке
// на асинке
// на асинке
// на асинке
// на асинке

async function addBookAsync(book) {
  const options = {
    method: "POST",
    // метод записи
    headers: {
      "Content-Type": "application/json",
    },
    // заголовок в котором указываем тип контента
    body: JSON.stringify(book),
    // мы отправляем в боди застригифаиный объект (ДОБАВЛЯЕМ КНИГУ)
  };

  const response = await fetch(`${BASE_URL}/books`, options);
  // промисс ответа с сервера
  const newBook = await response.json();
  //распарсиваем (приводим к строке из объекта новую книгу)

  return newBook;
}

// для того чтобы ловить ошибку через try/cacth

async function addBookandUpdate() {
  try {
    const bookAdd = await addBookAsync({});
  } catch (error) {
    console.log(`ERROR`);
  }
}
//грубо говоря тут .then и .catch
//addBookAsync() возвращает промис и мы используем(addBookAsync().then().catch())
// addBookandUpdate используем без .then и .catch
addBookandUpdate();

//
//
//
//
//
//
//
// const BASE_URL = "http://localhost:4040";

// function addBook(book) {
//   const options = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(book),
//   };

//   return fetch(`${BASE_URL}/books`, options).then((res) => res.json());
// }

// // addBook({
// //   title: 'Тестовая книга по CSS',
// //   author: 'Я',
// //   genres: ['CSS'],
// //   rating: 9,
// // })
// //   .then(renderBook)
// //   .catch(error => console.log(error));

// // addBook({
// //   title: 'Тестовая книга по HTML',
// //   author: 'Я',
// //   genres: ['HTML'],
// //   rating: 7,
// // }).then(renderBook);

// function renderBook(book) {
//   console.log("Пришел ответ от бекенда можно рисовать");
//   console.log(book);
// }
