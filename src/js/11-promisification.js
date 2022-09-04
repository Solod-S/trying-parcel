/*
 * Промисификация:
 * - Поблема доступа к результату промиса с колбеком
 * - Функция которая возвращает промис
 */

import { setTimeout } from "core-js";

// const makeOrder = (dish) => {
//   const DELAY = 1000;

//   const promise = new Promise((ok, notOk) => {
//     setTimeout(() => {
//       const passed = Math.random() > 0.5;
//       if (passed) {
//         ok(`✅ Вот ваш заказ: ${dish}`);
//         // console.log(`Вот ваш заказ`);
//         // если генерит тру вызываю функцию ок и передаю туда строкку
//       }
//       notOk("❌ Упс, у нас закончились продукты");
//       // console.log(`Упс, у нас закончились продукты`);
//       // если генерит фалс вызываю функцию нотОк и передаю туда строкку
//     });
//   }, DELAY);
//   return promise;
// };

// makeOrder("пирожок")
//   .then(onMakeOrderSuccess)
//   .catch(onMakeOrderError)
//   .finally(console.log(`Я finally и выполнюсь в любом случае`));
// //then выполниться если саксем а catch с ошибкой + finally в любом случае выполняеться
// function onMakeOrderSuccess(ok) {
//   console.log("onMakeOrderSuccess");
//   console.log(ok);
// }

// function onMakeOrderError(notOk) {
//   console.log("onMakeOrderError");
//   console.log(notOk);
// }

/*
 * Промисификация «синхронных» функций
 * - Promise.resolve()
 * - Promise.reject()
 */
console.log(`-------------------------------`);
const makeOrder1 = (dish) => {
  const passed = Math.random() > 0.5;
  return Promise.resolve(`✅ Вот ваш заказ: ${dish}`);
  // ты 100% резолвишься (решаешься) и у нас нет второй функции для ошибки
  const promise = new Promise((resolve) =>
    resolve(`✅ Вот ваш заказ: ${dish}`)
  );
  // можно и так но хуже код
};

makeOrder1("кола").then(onMakeOrderSuccess);
// makeOrder1 возвращает нам промис а then отлавливает успешное выполнение

function onMakeOrderSuccess(result) {
  console.log("onMakeOrderSuccess");
  console.log(result);
}

function onMakeOrderError(error) {
  console.log("onMakeOrderError");
  console.log(error);
}

/*
 * Покемоны с https://pokeapi.co/
 */
fetch("https://pokeapi.co/api/v2/pokemon/1")
  .then((r) => r.json())
  .then((pokemon) => console.log(pokemon));
// фетчим с сервера инфу (тамджейсон) + зенами выполняем функции (грубо говоря фетч возвращает промис со всеми прибамбасами с сервера)

const fetchPokemonById = (id) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((r) => r.json());
};
// делаем функцию которая с сервера будет тягать покемонов по передаваемому id

fetchPokemonById(1).then(onFetchSuccess).catch(onFetchError);

fetchPokemonById(2).then(onFetchSuccess).catch(onFetchError);

fetchPokemonById(-3).then(onFetchSuccess).catch(onFetchError);

function onFetchSuccess(pokemon) {
  console.log("onFetchSuccess -> onFetchSuccess");
  console.log(pokemon);
}

function onFetchError(error) {
  console.log("onFetchError -> onFetchError");
  console.log("Это в блоке catch");
  console.log(error);
}

// makePromise
// const makePromise = () => {
//   return new Promise((resolve, reject) => {
//     const passed = Math.random() > 0.5;

//     setTimeout(() => {
//       if (passed) {
//         resolve('✅ Куку это resolve');
//       }

//       reject('❌ все пропало это reject');
//     }, 2000);
//   });
// };

// makePromise()
//   .then(result => console.log(result))
//   .catch(error => console.log(error));
