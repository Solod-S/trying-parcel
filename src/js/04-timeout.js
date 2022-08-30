import { setTimeout } from "core-js";
import "../css/common2.css";
/*
 * Метод window.setTimeout(callback, delay, args) === setTimeout(функцию, время через сколько вызвать, аргументы)
 * Планировщик WEB Apis - отложеный вызов функции (важно помнить если на момент времени когда запланирован отложеный вызов функции выполняеться другая функция, setTimeout ждет когда она закончиться и тогда выполняет)
 */

const logMsg = (x) => {
  console.log(`Вызов Call-back функции через ${x} секунды`);
};

console.log(`До вызова setTimeout`);
const timeoutId1 = setTimeout(logMsg, 3000, 3);
console.log(
  "назначили переменную и теперь можем узнать индификатор:",
  timeoutId1
);
console.log(`После вызова setTimeout`);

/*
 * Очистка таймаута с clearTimeout(timeoutId)
 */

const logger = (time) => {
  console.log(`Лог через ${time}ms, потому что не отменили таймаут`);
};

const timeoutId2 = setTimeout(logger, 3000, 3000);
console.log(
  "назначили переменную и теперь можем узнать индификатор:",
  timeoutId2
);
//узнаем индификатор (каждому setTimeout браузер присваивает уникальный индификатор)
const shouldCancelTimer = Math.random() > 0.3;
//функция генерит в случайном порядке тру или фолс
console.log(shouldCancelTimer);

if (shouldCancelTimer) {
  // clearTimeout(2);
  clearTimeout(timeoutId2);
  console.log(`отмена тайм аута`);
}
//если нужно таймер отменить
