const API_KEY = "b241a4fabf1a45b68a02a21dc977d6a8";
const BASE_URL = "https://newsapi.org/v2";
export default class NewsApiServices {
  constructor() {
    this.searchQuery = "";
    //то что будем искаьб
    this.page = 1;
    // страничка которая нам нужна для пагинации
  }
  fetchArticles(searchQuery) {
    const options = {
      headers: { Authorization: API_KEY },
    };
    // ключ авторизации
    const url = `${BASE_URL}/everything?q=${this.searchQuery}&language=en&pageSize=5&page=${this.page}`;
    // url для запроса

    return fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        this.incrementPage();
        // this.page +1 (для пагинации)
        return data.articles;
        //возвразаем [{article}, {article}] в промисе
      });
    //делаем фетч + распарсиваем данные + если все успешно увеличиваем this.page +1 (для пагинации)
    // + возвращаем статьи в промисе
  }
  get query() {
    return this.searchQuery;
  }
  // получить значение this.searchQuery
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
  // задать значение this.searchQuery
  resetPage() {
    this.page = 1;
  }
  // сбрасываем параметр Page для fetch запроса
  incrementPage() {
    this.page += 1;
  }
  //this.page +1 (для пагинации)
}

// const API_KEY = "4330ebfabc654a6992c2aa792f3173a3";
// const BASE_URL = "https://newsapi.org/v2";
// const options = {
//   headers: {
//     Authorization: API_KEY,
//   },
// };

// export default class NewsApiService {
//   constructor() {
//     this.searchQuery = "";
//     this.page = 1;
//   }

//   fetchArticles() {
//     const url = `${BASE_URL}/everything?q=${this.searchQuery}&language=en&pageSize=5&page=${this.page}`;

//     return fetch(url, options)
//       .then((response) => response.json())
//       .then(({ articles }) => {
//         this.incrementPage();
//         return articles;
//       });
//   }

//   incrementPage() {
//     this.page += 1;
//   }

//   resetPage() {
//     this.page = 1;
//   }

//   get query() {
//     return this.searchQuery;
//   }

//   set query(newQuery) {
//     this.searchQuery = newQuery;
//   }
// }
