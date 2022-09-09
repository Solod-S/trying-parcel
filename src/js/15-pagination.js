/*
 * - Пагинация
 *   - страница и кол-во на странице
 * - Загружаем статьи при сабмите формы
 * - Загружаем статьи при нажатии на кнопку «Загрузить еще»
 * - Обновляем страницу в параметрах запроса
 * - Рисуем статьи
 * - Сброс значения при поиске по новому критерию
 *
 * https://newsapi.org/
 * 4330ebfabc654a6992c2aa792f3173a3
 * http://newsapi.org/v2/everything?q=cat&language=en&pageSize=5&page=1
 */

import articlesTpl from "../templates/articles.hbs";
//шаблонизатор
import "../css/common5.css";
import NewsApiServices from "../js/news-service";
//импорт класса для работы с интерфейсом
import LoadMoresBtn from "../js/load-more-btn";
//импорт класса для работы с кнопкой (кольцо загрузи, дисейбл и т д)

const LoadMoreBtn = new LoadMoresBtn({
  selector: '[data-action="load-more"]',
  hidden: true,
});
// делаем екземпляр + указываем селектор кнопки в объекте для конструктора + параметр чтобі кнопка была спрятана по умолчанию
const NewsApiService = new NewsApiServices();
// делаем екземпляр

const refs = {
  searchForm: document.querySelector(".js-search-form"),
  articlesContainer: document.querySelector(".js-articles-container"),
  // loadMore: document.querySelector('[data-action="load-more"]'),
  // после того как мы импортировали класс для работы с анимацией, мЫ работаем через него
};

// refs.loadMore.addEventListener("click", onLoadMore);
LoadMoreBtn.refs.button.addEventListener("click", onLoadMore);
// через класс (мЫ передали в него селектор кнопки и оно знает где кнопка)
refs.searchForm.addEventListener("submit", onSearchForm);

function onSearchForm(event) {
  event.preventDefault();
  // стоп перезагрузки
  if (NewsApiService.query === " ") {
    alert(`Введите слово для поиска`);
  }
  LoadMoreBtn.show();
  // показываем кнопку "Показать ещё"
  LoadMoreBtn.disable();
  // активируем режим "загрузка" на кнопке "Показать ещё"
  clearArticlesContainer();
  // очищаем контейнер с разметкой
  NewsApiService.query = event.currentTarget.elements.query.value;
  // то что вводим в поиск записуем в екземпляр
  NewsApiService.resetPage();
  // сбрасываем параметр Page для fetch запроса
  NewsApiService.fetchArticles().then(appendArticlesMarkup);
  //делаем фетч + распарсиваем данные + если все успешно увеличиваем this.page +1 (для пагинации)
  // + принимаем статьи в промисе и передаем функции разметки штм
}
// запрос на сервер за новыми новостями по кнопке ИСКАТЬ
function onLoadMore(event) {
  LoadMoreBtn.disable();
  // активируем режим "загрузка" на кнопке "Показать ещё"
  NewsApiService.fetchArticles().then(appendArticlesMarkup);
}
// запрос на сервер за новыми новостями по кнопке ПОКАЗАТЬ ЕЩЕ
function appendArticlesMarkup(articles) {
  LoadMoreBtn.enable();
  // деактивируем режим "загрузка" на кнопке "Показать ещё"
  refs.articlesContainer.insertAdjacentHTML("beforeend", articlesTpl(articles));
}
// делает разметку штм по полученному json

function clearArticlesContainer() {
  refs.articlesContainer.innerHTML = "";
}
// очищаем контейнер с разметкой

//
//
//
//
//
//
//
//
//
// const refs = {
//   searchForm: document.querySelector(".js-search-form"),
//   articlesContainer: document.querySelector(".js-articles-container"),
// };
// const loadMoreBtn = new LoadMoreBtn({
//   selector: '[data-action="load-more"]',
//   hidden: true,
// });
// const newsApiService = new NewsApiService();

// refs.searchForm.addEventListener("submit", onSearch);
// loadMoreBtn.refs.button.addEventListener("click", fetchArticles);

// function onSearch(e) {
//   e.preventDefault();

//   newsApiService.query = e.currentTarget.elements.query.value;

//   if (newsApiService.query === "") {
//     return alert("Введи что-то нормальное");
//   }

//   loadMoreBtn.show();
//   newsApiService.resetPage();
//   clearArticlesContainer();
//   fetchArticles();
// }

// function fetchArticles() {
//   loadMoreBtn.disable();
//   newsApiService.fetchArticles().then((articles) => {
//     appendArticlesMarkup(articles);
//     loadMoreBtn.enable();
//   });
// }

// function appendArticlesMarkup(articles) {
//   refs.articlesContainer.insertAdjacentHTML("beforeend", articlesTpl(articles));
// }

// function clearArticlesContainer() {
//   refs.articlesContainer.innerHTML = "";
// }
