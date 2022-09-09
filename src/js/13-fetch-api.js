/*
 * - HTTP-запросы в браузере
 *  - Fetch API
 *  - Владка Network
 *  - HTTP-методы
 *  - Заголовки
 *  - MIME-типы
 *  - Параметры запроса
 * - Документация REST API
 * - Обработка 404 с fetch
 * - Аутентификация
 * - Библиотеки-обёртки
 * - https://pokeapi.co/
 */

import "../css/common4.css";
import pokemonCardTemplate from "../templates/pokemon-card.hbs";
// импортируем шаблон
import API from "../js/api-service.js";

const refs = {
  cardContainer: document.querySelector(".js-card-container"),
  searchForm: document.querySelector(".js-search-form"),
  onsubmit(event) {
    event.preventDefault();
    // гтмена перезагрузки
    console.log(event.currentTarget.elements.query.value);
    // event.currentTarget. => все єлементы => name="query" => значение
    const query = event.currentTarget.elements.query.value;
    // то что при сабмите будет в <input type="text" class="form-control" name="query" />
    API.fetchPockemon(query)
      .then(renderPokemon)
      .catch(onFetchError)
      .finally(() => refs.searchForm.reset());
    // распарсиваем => рендерим и рисуем разметку => если что можем словить ошибку => при любомр результате чистим форму(файнали)
  },
  // внутри метода обїекта запускаем фетч, ловим промис и рисуем разметку
};

// //делаем запрос => раскодируем (на прототипе есть три метода text(для таблиц csv),json(объект),blob(видео, аудио + картинки)) => получаем дату (json)
// fetch("https://pokeapi.co/api/v2/pokemon/2")
//   .then((response) => response.json())
//   //ловим успех и раскодируем(распарсиваем) с помощью json() )
//   .then((pokemon) => {
//     console.log(pokemon);
//     const marKUp = pokemonCardTemplate(pokemon);
//     // делаем разметку с помощью шаблонизатора
//     console.log(marKUp);
//     refs.cardContainer.innerHTML = marKUp;
//     // рисуем разметку
//   })
//   // ловим успех => получаем данные (данные есть только в этом then) + делаем разметку
//   .catch((error) => console.log(error));
// // если ошибка ловим ее тут

//делаем запрос => раскодируем (на прототипе есть три метода text(для таблиц csv),json(объект),blob(видео, аудио + картинки)) => получаем дату (json)

refs.searchForm.addEventListener("submit", refs.onsubmit);

function onFetchError() {
  return alert(`МЫ НЕ НАШЛИ ТАКОГО ЗВЕРЯ`);
}
// функция если что то пошло не так для кеч

// function fetchPockemon(id) {
//   return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((response) =>
//     response.json()
//   );
//   //ловим успех и раскодируем(распарсиваем) с помощью json() )
//   // .then(renderPokemon)
//   // // .then(pokemon => renderPokemon(pokemon))
//   // // ловим успех => получаем данные (данные есть только в этом then) + делаем разметку
//   // .catch((error) => console.log(error))
//   // если ошибка ловим ее тут
// }
// функция возвращает распарсенный результат фетча(промиса) = данные
//
function renderPokemon(pokemon) {
  const marKUp = pokemonCardTemplate(pokemon);
  // делаем разметку с помощью шаблонизатора
  refs.cardContainer.innerHTML = marKUp;
  // рисуем разметку
}
//функция рисует интерфейс

//pokemon?limit=100000&offset=0.
// после ? идет строка запроса с доп параметрами имя = значение &(и) имя = значение
// fetch("https://pokeapi.co/api/v2/pokemon?limit=22")
//   .then((r) => r.json())
//   .tnen(console.log);
fetch(`https://pixabay.com/api/?key=29776170-5db4a15cb76834f05dd09f0ed&q=cat+dog&image_type=photo
`);
//https://pixabay.com/api/?key={ KEY }&q=yellow+flowers&image_type=photo
//базовый url => приватный ключ => ключевка по картинка => тип графики = фото

const url = "https://newsapi.org/v2/everything?q=cars";
// переменная с базовым url
const options = {
  headers: {
    Authorization: "4330ebfabc654a6992c2aa792f3173a3",
  },
};
// объект с настройками

fetch(url, options)
  .then((r) => r.json())
  .then(console.log);

// делаем фетч с базовым юрл + объектом настроек

//
//
//
// import pokemonCardTpl from "../templates/pokemon-card.hbs";
// import API from "./api-service";
// import getRefs from "./get-refs";

// const refs = getRefs();

// refs.searchForm.addEventListener("submit", onSearch);

// function onSearch(e) {
//   e.preventDefault();

//   const form = e.currentTarget;
//   const searchQuery = form.elements.query.value;

//   API.fetchPokemon(searchQuery)
//     .then(renderPokemonCard)
//     .catch(onFetchError)
//     .finally(() => form.reset());
// }

// function renderPokemonCard(pokemon) {
//   const markup = pokemonCardTpl(pokemon);
//   refs.cardContainer.innerHTML = markup;
// }

// function onFetchError(error) {
//   alert("Упс, что-то пошло не так и мы не нашли вашего покемона!");
// }

// // =========================================

// const url = "https://newsapi.org/v2/everything?q=cars";
// const options = {
//   headers: {
//     Authorization: "4330ebfabc654a6992c2aa792f3173a3",
//   },
// };

// fetch(url, options)
//   .then((r) => r.json())
//   .then(console.log);
