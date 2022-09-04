/*
 * Создание промиса
 *  - Класс Promise
 *  - resolve
 *  - reject
 *  - Promise.prototype.then(onResolve, onReject)
 */

const promise = new Promise((resolve, reject) => {
  // первый аргумент - успешное выполнение, второй аргумент - не успешное выполнение
  const canFulfill = Math.random() > 0.5;
  // гениратор true-false

  setTimeout(() => {
    if (canFulfill) {
      resolve(
        "СУПЕР! Промис выполнился успешно, с результатом (исполнен, fulfilled)"
      );
    }
    // если результат true
    reject("УПС Промис выполнился с ошибкой (отклонён, rejected)");
    // если результат false
  }, 1000);
});
promise.then(
  (success) => console.log(success),
  (notsuccess) => console.log(notsuccess)
);
// первый аргумент - успешное выполнение resolve, второй аргумент - не успешное выполнение reject

promise.then(onFulfilled, onRejected);
// тоже самое но с колбекфункциями
function onFulfilled(result) {
  // console.log("onFulfilled -> onFulfilled");
  console.log(`✅ ${result}`);
}

function onRejected(error) {
  // console.log("onRejected -> onRejected");
  console.log(`❌ ${error}`);
}

// /*
//  * Цепочки промисов (chaining)
//  * Promise.prototype.catch(error)
//  * Promise.prototype.finally()
//  */

promise
  .then(onFulfilled)
  .then((x) => {
    console.log(x);
    // возврат(return) call-back функции внутри .then становиться значением следующего .then в цепочки
    return 10;
  })
  .then((y) => {
    console.log(y);
  })
  .catch((error) => console.log(error))
  // отлавливает ошибку в любом месте цепочки (чтобы не писать .then(успешное, неуспешное))
  // если ловит ошибку в цепочки то цепочка останавливаеться и выполняеться catch
  .finally(() => console.log("Я буду выполнен в любом случае"));
// then есои хорошо, catch если плохо, а finally в любом случае

//.then(успешное, неуспешное) ТАК НЕ ДЕЛАЕМ, всегда передаем успешное выполнение + catch который ловит ошибки и не дает выолнить успешное выполнение в промисе
