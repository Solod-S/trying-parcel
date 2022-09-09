export default class LoadMoreBtn {
  constructor({ selector, hidden = false }) {
    this.refs = this.getRefs(selector);

    hidden && this.hide();
    // вычисление по сокращенной схеме (вместо if (hidden) {this.hide()})
  }

  getRefs(selector) {
    const refs = {};
    refs.button = document.querySelector(selector);
    refs.label = refs.button.querySelector(".label");
    refs.spinner = refs.button.querySelector(".spinner");

    return refs;
  }

  enable() {
    this.refs.button.disabled = false;
    this.refs.label.textContent = "Показать ещё";
    this.refs.spinner.classList.add("is-hidden");
  }
  // выключить состояние загрузку на копке
  disable() {
    this.refs.button.disabled = true;
    this.refs.label.textContent = "Загружаем...";
    this.refs.spinner.classList.remove("is-hidden");
  }
  // выключить состояние загрузку на копке
  show() {
    this.refs.button.classList.remove("is-hidden");
  }
  // показать кнопку

  hide() {
    this.refs.button.classList.add("is-hidden");
  }
  // спрятать кнопку
}
