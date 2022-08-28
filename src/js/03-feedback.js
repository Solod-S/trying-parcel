import throttle from "lodash.throttle";
import "../css/03-feedback.css";
import "../css/common.css";

const STORAGE_KEY = "inputLocallStorageKey";

const feedback = {
  form: document.querySelector(".feedback-form"),
  input: document.querySelector(".feedback-form input"),
  textArea: document.querySelector(".feedback-form textarea"),
  formData: {},
  onFormSubmit(event) {
    event.preventDefault();
    // стоп стандартному действию (перезагрузка)
    console.log("Мы собрали данные");
    event.target.reset();
    //сброс всех полей
  },
  onFormInput(event) {
    console.log(event.target.name);
    console.log(event.target.value);

    feedback.formData[event.target.name] = event.target.value;
    // в форм дату записываем {email: "value", message: "value"}
    // console.log((feedback.formData[event.target.name] = event.target.value));

    localStorage.setItem(STORAGE_KEY, JSON.stringify(feedback.formData));
    // переделываем в JSON {email: "value", message: "value"} ==> {"email": "value", "message": "value"} и записываем в локальное хранилище STORAGE_KEY
  },
  populateTextareaMulti() {
    const message = JSON.parse(localStorage.getItem(STORAGE_KEY));
    // возвращаем JSON в обычный объект и записываем в переменную

    if (!message) {
      return;
    }
    // если в localStorage нет интирисующей нас записи то заканчиваем функцию
    feedback.textArea.value = message.message;
    // вносим данные в поле ввода из message: "value"
    feedback.input.value = message.email;
    // вносим данные в поле ввода из email: "value"
  },
};

feedback.populateTextareaMulti();
// запускаем функцию которая заполняет поля из localStorage
feedback.form.addEventListener("submit", feedback.onFormSubmit);
// запускаем слушателя событий на отправку формы + колбек функцию
feedback.form.addEventListener("input", throttle(feedback.onFormInput, 500));
// запускаем слушателя событий на заполнение форм + колбек функцию + lodash.throttle (задержка 500 секунд)
