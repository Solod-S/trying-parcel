/*
 * - Cross-Origin Resource Sharing (CORS)
 *  - https://pokeapi.co/
 *  - https://darksky.net/dev
 * - Proxy
 *  - Хранение API ключей и секретов
 *  - https://lpj-weather-service.herokuapp.com/
 */
import "../css/common.css";

fetch(
  "https://lpj-weather-service.herokuapp.com/weather?lat=39.916668&lon=116.383331"
)
  .then((r) => r.json())
  .then(console.log);
fetch(
  "https://newsapi.org/v2/everything?q=kiev&from=2022-08-08&sortBy=publishedAt&apiKey=b241a4fabf1a45b68a02a21dc977d6a8"
)
  .then((response) => response.json())
  .then(console.log);
