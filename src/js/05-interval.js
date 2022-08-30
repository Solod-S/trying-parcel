import "../css/common2.css";
/*
 * Метод setInterval(callback, delay, args)
 * вызов функции с промежутком в несколько раз
 */

// const logger = (time) => console.log(`Лог каждые ${time}ms - ${Date.now()}`);

// console.log(`До вызова setInterval`);
// setInterval(logger, 2000, 2000);
// // запускаем последовательный вызова функции, каждые 2секунды, передаем аргумент с значением 2000
// console.log(`После вызова setInterval`);

/*
 * Очистка интервала с clearInterval(intervalId)
 */
let timerValue = 0;
const timer = (x) => {
  timerValue += 1;
  console.log(timerValue);
  if (timerValue === x) {
    clearInterval(intervalId);
    // обрываем интервальный вызов функции
    console.log(`таймер остановлен`);
  }
};

const intervalId = setInterval(timer, 1000, 3);
