import "../css/common2.css";
// https://alvarotrigo.com/blog/disable-button-javascript/
const timer = {
  startBtn: document.querySelector("button[data-action-start]"),
  stopBtn: document.querySelector("button[data-action-stop]"),
  clockface: document.querySelector(".js-clockface"),
  intervalId: null,
  // сюда запишем запуск интервальной функции
  isActive: false,
  //функция актитвна?
  start() {
    if (timer.isActive) {
      alert(`Функция уже актитвна`);
      return;
    }
    timer.isActive = true;
    // делаем тру
    const startTime = Date.now();
    // чтобы сохранить текущее время(время старта) (проще говоря получаем текущее время)
    timer.intervalId = setInterval(() => {
      // записуем в свойство обїекта интервал айди
      const currentTime = Date.now();
      // время на момент вызова интервальной функции
      const deltaTime = currentTime - startTime;
      // получаем разницу между текущим временем и временем запуска функции, каждый раз отнимаем от времени вызова функции в интервале (currentTime) стартовое время (startTime)=== получаем значение в милисекундах
      // const timeComponents = getTimeComponents(deltaTime);
      // console.log(timeComponents);
      const time = getTimeComponents(deltaTime);
      // const { hours, mins, secs } = getTimeComponents(deltaTime);
      //так как нам возвращаеться объект, мы сразу деструктуризируем его
      // console.log(`${hours}:${mins}:${secs}`);
      // console.log(
      //   pad(new Date(deltaTime).getUTCHours()),
      //   pad(new Date(deltaTime).getUTCMinutes()),
      //   pad(new Date(deltaTime).getUTCSeconds())
      // );

      timer.updateClockFace(time);
    }, 1000);
  },
  stop() {
    clearInterval(timer.intervalId);
    timer.isActive = false;
    const time = { hours: "00", mins: "00", secs: "00" };
    timer.updateClockFace(time);
    // убираем на фелс
  },
  updateClockFace({ hours, mins, secs }) {
    timer.clockface.textContent = `${hours}:${mins}:${secs}`;
  },
};

timer.startBtn.addEventListener("click", timer.start);
timer.stopBtn.addEventListener("click", timer.stop);
timer.updateClockFace({ hours: "00", mins: "00", secs: "00" });
//отрисовываем по умолчанию время
// timer.start();

/*
 * - Принимает время в миллисекундах
 * - Высчитывает сколько в них вмещается часов/минут/секунд
 * - Возвращает обьект со свойствами hours, mins, secs
 * - Адская копипаста со стека 💩
 */
function getTimeComponents(time) {
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  // считает часы
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  // считает минуты
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
  // считает секунды
  return { hours, mins, secs };
}

/*
 * Принимает число, приводит к строке и добавляет в начало 0 если число меньше 2-х знаков
 */
function pad(value) {
  return String(value).padStart(2, "0");
  // приобразует в строку,  если длина меньше 2 то слева добавляет 0
  // 1 ==> 01 // 12 ==> 12 // 5 ==> 05

  if (value < 10) {
    return "0" + String(value);
  } else {
    return String(value);
  }
  //если значение меньше 10 то плюсуем ноль вперед и значение переводим в строку
}

///////////////////////// ЧЕРЕЗ КЛАСС
///////////////////////////////

// const refs = {
//   startBtn: document.querySelector("button[data-action-start]"),
//   stopBtn: document.querySelector("button[data-action-stop]"),
//   clockface: document.querySelector(".js-clockface"),
// };

// class Timer {
//   constructor({ onTick }) {
//     this.intervalId = null;
//     this.isActive = false;
//     this.onTick = onTick;

//     this.init();
//   }

//   init() {
//     const time = this.getTimeComponents(0);
//     this.onTick(time);
//   }

//   start() {
//     if (this.isActive) {
//       return;
//     }

//     const startTime = Date.now();
//     this.isActive = true;

//     this.intervalId = setInterval(() => {
//       const currentTime = Date.now();
//       const deltaTime = currentTime - startTime;
//       const time = this.getTimeComponents(deltaTime);

//       this.onTick(time);
//     }, 1000);
//   }

//   stop() {
//     clearInterval(this.intervalId);
//     this.isActive = false;
//     const time = this.getTimeComponents(0);
//     this.onTick(time);
//   }

//   /*
//    * - Принимает время в миллисекундах
//    * - Высчитывает сколько в них вмещается часов/минут/секунд
//    * - Возвращает обьект со свойствами hours, mins, secs
//    * - Адская копипаста со стека 💩
//    */
//   getTimeComponents(time) {
//     const hours = this.pad(
//       Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
//     );
//     const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//     const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

//     return { hours, mins, secs };
//   }

//   /*
//    * Принимает число, приводит к строке и добавляет в начало 0 если число меньше 2-х знаков
//    */
//   pad(value) {
//     return String(value).padStart(2, "0");
//   }
// }

// const timer = new Timer({
//   onTick: updateClockface,
// });

// refs.startBtn.addEventListener("click", timer.start.bind(timer));
// refs.stopBtn.addEventListener("click", timer.stop.bind(timer));

// /*
//  * - Принимает время в миллисекундах
//  * - Высчитывает сколько в них вмещается часов/минут/секунд
//  * - Рисует интерфейс
//  */
// function updateClockface({ hours, mins, secs }) {
//   refs.clockface.textContent = `${hours}:${mins}:${secs}`;
// }
