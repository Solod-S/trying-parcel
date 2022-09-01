import "../css/common2.css";

// - Встроенный объект Date
//   - Создание
//   - Разница времени
//   - Date.now() и new Date().getTime()
//   - [Библиотека date-fns](https://date-fns.org/)
// - Мастерская: таймер

const date = new Date();
//встроенная библиотека для работы с временем
console.log(date);
console.log(date.getDate());
console.log(date.getMonth());
// считает с 9 месяца
console.log(date.getTime());
// сколько прошло времени в мс с 1 января 1970 00:00
const date1 = Date.now();
// показывает текущую дату (на момент создания) в количестве милисекунд с 1 января 1970 00:00
console.log("date1", date1);

setTimeout(() => {
  const date2 = Date.now();
  // показывает текущую дату (на момент создания) в количестве милисекунд с 1 января 1970 00:00
  console.log("date1", date1);
  console.log("date2", date2);

  console.log(date2 - date1);
  //даты можно отнимать
}, 3000);
