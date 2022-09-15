// Синтаксис async/await
// Последовательные операции
// Паралельные операции с Promise.all()
// try...catch (try/catch vs then().catch())

import { async } from "fast-glob";

// // Function declaration
// async function foo() {
//   // ...
// }

// // Functional expression
// const foo = async function () {
//   // ...
// };

// // Arrow function
// const foo = async () => {
//   // ...
// };

// // Object method
// const user = {
//   async foo() {
//     // ...
//   },
// };

// // Class method
// class User {
//   async foo() {
//     // ...
//   }
// }

async function getFruitTest(name) {
  const fruits = {
    strawberry: "🍓",
    kiwi: "🥝 ",
    apple: "🍎",
  };

  return fruits[name];
}
getFruitTest(`kiwi`).then((fruit) => console.log(fruit));
// async автоматически делает результат функции промисом

async function getFruit(name) {
  const fruits = {
    strawberry: "🍓",
    kiwi: "🥝 ",
    apple: "🍎",
  };
  // return Promise.resolve(fruits[name]);
  return new Promise((resolve, reject) =>
    setTimeout(() => resolve(fruits[name]), 500)
  );
}

// function makeSmuzi() {
//   getFruit("strawberry").then((fruit) => {
//     console.log(fruit);
//     getFruit("kiwi").then((fruit) => {
//       console.log(fruit);
//       getFruit("apple").then((fruit) => {
//         console.log(fruit);
//       });
//     });
//   });
//   // 100% будет последовательное выполнение PROMISE HELL!
// }
// makeSmuzi();
// ПОСЛЕДОВАТЕЛЬНЫЙ ВЫЗОВ БЕЗ async/await

async function asyncMakeSmuzi() {
  console.time("asyncMakeSmuzi");
  try {
    // //-------

    // const strawberry = await getFruit("strawberry");
    // console.log(`await`, strawberry);
    // // забираем вначале strawberry
    // const kiwi = await getFruit("kiwi");
    // console.log(`await`, kiwi);
    // // затем забираем kiwi

    // //-------
    const strawberry = getFruit("strawberry");
    // делаем промис с strawberry
    const kiwi = getFruit("kiwi");
    // делаем промис с kiwi
    const apple = getFruit("apple");
    // делаем промис с apple
    const fruits = await Promise.all([strawberry, kiwi, apple]);
    console.log(fruits);
    // делаем массив промиссов и ждем пока он выполниться __ await говорит подожди пока этот промис резолвница
    return fruits;
    console.timeEnd("asyncMakeSmuzi");
  } catch (error) {
    console.log(error, `ERROR`);
  }
}
asyncMakeSmuzi().then((fruits) => console.log(fruits));
///
//
//
//
//
//
//
//
//
// делаем асинхроную функцию (async + await)
// console.log(
//   getFruit("apple")
//     .then((response) => response.json())
//     .then((data) => console.log(data))
// );
// function getFruit(name) {
//   const fruits = {
//     strawberry: "🍓",
//     kiwi: "🥝 ",
//     apple: "🍎",
//   };

//   return new Promise((resolve, reject) =>
//     setTimeout(() => resolve(fruits[name]), 500)
//   );
// }

// async function aMakeSmoothie() {
//   try {
//     console.time("aMakeSmoothie");
//     const apple = getFruit("apple");
//     const kiwi = getFruit("kiwi");
//     const berry = getFruit("strawberry");

//     const fruits = await Promise.all([apple, kiwi, berry]);
//     console.log(fruits);
//     console.timeEnd("aMakeSmoothie");

//     return fruits;
//   } catch (error) {
//     console.log("Ошибка");
//   }
// }

// aMakeSmoothie();

// async function fn () {}

// const fn  = async function () {}

// const arr = async () => {}

// const x = {
//   async getname () {}
// }

// class X {
//   async getName () {}
// }
