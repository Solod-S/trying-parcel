import "../css/common2.css";
import BSN from "bootstrap.native";
// import { setTimeout } from "core-js";
// const myModal = new BSN.Modal("#subscription-modal");
// //импортируем бутстрап (делаем эскиз) и передаем ссылку на модалку
// //====================================
// //https://thednp.github.io/bootstrap.native/

// //show.bs.modal
// //This event fires immediately when the show instance method is called.
// //This event can be default prevented.
// //====================================
// //hide.bs.modal
// //This event is fired immediately when the hide instance method has been called.
// //This event can be default prevented.
// //====================================
// const PROMPT_DELAYS = 3000;
// // //задержка
// let promptCounter = 0;
// // // счетчик нотификашек
// const MAX_PROMPT_ETEMP = 3;
// // // количество попыток

// let hasSubscribed = false;
// // // подписалися?
// // const intervalId = setInterval(() => {
// //   if (promptCounter === MAX_PROMPT_ETEMP || hasSubscribed) {
// //     // если счетчик нотификашек = 3 или есть подписка
// //     clearInterval(intervalId);
// //     // очищаем интервальный вызов функций
// //     console.log(`Конец нотификации`);
// //     return;
// //     // обрываем вызов функций
// //   }
// //   console.log(`Подпишитесь на нашу рассылку`, Date.now());
// //   promptCounter += 1;
// //   // на каждом выполнении в счетчик нотификашек делаем +1
// // }, PROMPT_DELAYS);
// //====================================
// //====================================
// //====================================

const refs = {
  modal: document.querySelector("#subscription-modal"),
  btnClose: document.querySelector('[data-dismiss="modal"]'),
  subscribeBtn: document.querySelector("button[data-subscribe]"),
};
const PROMPT_DELAY = 3000;
// // //задержка
const MAX_PROMPT_ATTEMPTS = 3;
// // // количество попыток
let promptCounter = 0;
// // // счетчик нотификашек
let hasSubscribed = false;
// // // подписалися?
const modal = new BSN.Modal("#subscription-modal");

openModal();

refs.modal.addEventListener("hide.bs.modal", openModal);
// // слушатель событий модалка и действие закрытие модалки (вн ивент бутстрап найтив) + сет таймаут с запускам модадки

refs.subscribeBtn.addEventListener("click", onSubscribeBtnClick);
// при клике на кнопку подписаться запуск функции отмена надоедалки
refs.btnClose.addEventListener("click", () => modal.hide());
// //при клике на кнопку закрыть закрываем модаку
function openModal() {
  if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed) {
    console.log("Максимальное кол-во надоеданий или подписался");
    return;
  }

  setTimeout(() => {
    console.log("Открываем надоедалку");
    modal.show();
    promptCounter += 1;
  }, PROMPT_DELAY);
}
// //проверка счетчика + сет таймаут с запускам модадки
function onSubscribeBtnClick() {
  hasSubscribed = true;
  // запись тру в hasSubscribed
  modal.hide();
  // закріваем модалку
}
