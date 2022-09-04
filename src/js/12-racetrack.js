import { resolve } from "core-js/fn/promise";
import { reject } from "lodash";
import "../css/common3.css";

let raceCounter = 0;
const horses = [
  "Secretariat",
  "Eclipse",
  "West Australian",
  "Flying Fox",
  "Seabiscuit",
];
const refs = {
  startBtn: document.querySelector(".js-start-race"),
  winnerField: document.querySelector(".js-winner"),
  progressField: document.querySelector(".js-progress"),
  tableBody: document.querySelector(".js-results-table > tbody"),
  updateWinnerField(message) {
    refs.winnerField.textContent = message;
    //функция обновления поля победителя
  },
  updateProgressField(message) {
    refs.progressField.textContent = message;
    //функция обновления поля прогресса
  },
  updateResultTable({ horse, time, raceCounter }) {
    const tr = `<tr><td>${raceCounter}</td><td>${horse}</td><td>${time}</td></tr>`;
    refs.tableBody.insertAdjacentHTML("beforeend", tr);
    //функция обновления таблички победителей
  },
  showWinner(horses) {
    Promise.race(horses).then(({ horse, time }) => {
      refs.updateWinnerField(
        `🎉 Победил ${horse}, финишировав за ${time} времени`
      );
      // выводим в поле победителя строку
      refs.updateResultTable({ horse, time, raceCounter });
      // записуем в табличку победителя (передаем из объекта horse, time + raceCounter (let raceCounter))
    });
    // Promise.race => возвращает самый быстро выполняющийся промис (остальные не возвращает) === результат выполнения первый промис
  },
  waitingRestHorses(horses) {
    Promise.all(horses).then(
      () => refs.updateProgressField("📝 Заезд окончен, принимаются ставки.")
      // выводим в поле прогресса строку
    );
    //Promise.all => возвращает массив с отсортированными промисами (по времени выполнения) === результат выполнения массив
  },
  onStart() {
    raceCounter += 1;
    refs.updateWinnerField("");
    // перед запуском обнуляем поле победителя
    refs.updateProgressField("");
    // перед запуском обнуляем поле прогресса
    const horsesPromises = horses.map(run); // horses.map((horse) => run);
    //создаем массив провисов === мы проходимся по массиву лошадей, создаем новый массив и для каждой функции выполняем функцию Run
    refs.updateProgressField("🤖 Заезд начался, ставки не принимаются!");
    // выводим в поле прогресса строку
    refs.showWinner(horsesPromises);
  },
};

refs.startBtn.addEventListener("click", refs.onStart);

function getRandomTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
//рандомное время (получает мин и макс время и возвращает случайное время)

function run(horse) {
  return new Promise((resolve, reject) => {
    const time = getRandomTime(1000, 2000);
    setTimeout(() => {
      resolve({ horse, time });
    }, time);
  });
}
// функция симулирует забег

// run("Secretariat")
//   .then((x) => console.log(x))
//   .catch();

// console.log(`массив промисов`, horsesAllStart);

// /*
//  * Promise.race([]) для ожидания первого выполнившегося промиса
//  */

// /*
//  * Promise.all([]) для ожидания всех промисов
//  */

// let raceCounter = 0;
// const refs = {
//   startBtn: document.querySelector(".js-start-race"),
//   winnerField: document.querySelector(".js-winner"),
//   progressField: document.querySelector(".js-progress"),
//   tableBody: document.querySelector(".js-results-table > tbody"),
// };

// refs.startBtn.addEventListener("click", onStart);

// function onStart() {
//   raceCounter += 1;
//   const promises = horses.map(run);

//   updateWinnerField("");
//   updateProgressField("🤖 Заезд начался, ставки не принимаются!");
//   determineWinner(promises);
//   waitForAll(promises);
// }

// function determineWinner(horsesP) {
//   Promise.race(horsesP).then(({ horse, time }) => {
//     updateWinnerField(`🎉 Победил ${horse}, финишировав за ${time}
//     времени`);
//     updateResultsTable({ horse, time, raceCounter });
//   });
// }

// function waitForAll(horsesP) {
//   Promise.all(horsesP).then(() => {
//     updateProgressField("📝 Заезд окончен, принимаются ставки.");
//   });
// }

// function updateWinnerField(message) {
//   refs.winnerField.textContent = message;
// }

// function updateProgressField(message) {
//   refs.progressField.textContent = message;
// }

// function updateResultsTable({ horse, time, raceCounter }) {
//   const tr = `<tr><td>${raceCounter}</td><td>${horse}</td><td>${time}</td></tr>`;
//   refs.tableBody.insertAdjacentHTML("beforeend", tr);
// }

// /*
//  * Promise.race([]) для ожидания первого выполнившегося промиса
//  */

// /*
//  * Promise.all([]) для ожидания всех промисов
//  */

// function run(horse) {
//   return new Promise((resolve) => {
//     const time = getRandomTime(2000, 3500);

//     setTimeout(() => {
//       resolve({ horse, time });
//     }, time);
//   });
// }
