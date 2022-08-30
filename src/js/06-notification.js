import "../css/common2.css";
/**
 * - Показываем и скрываем добавляя/удаляя класс is-visible
 * - Скрываем через определённое время
 * - Скрываем при клике
 * - Не забываем чистить таймер
 */
const NOTIFICATION_DELAY = 3000;
// время через которое будем закрывать нотификейшн
let timeOutId = null;
// обьявляем "ничто" (хороший тон)
const refs = {
  notification: document.querySelector(".js-alert"),
};

refs.notification.addEventListener("click", onNotificationClick);

showNotification();

/*
 * Функции
 */

function onNotificationClick() {
  hideNotification();
  clearTimeout(timeOutId);
  // при клике по натификашке снимаем тайм аут по переменной (в которую записываеться таймаут при запуске нотификашки)
}

function showNotification() {
  refs.notification.classList.add("is-visible");
  timeOutId = setTimeout(hideNotification, NOTIFICATION_DELAY);
  // делаем таймаут hideNotification (отложеный запуст функции закрытия нотификейшен через 3секунды) и записуем в let timeOutId (null);
}

function hideNotification() {
  console.log(`Спрятали нотификейшн`);
  refs.notification.classList.remove("is-visible");
}
