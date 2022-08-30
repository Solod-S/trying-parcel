import "../css/common.css";
import "../css/02-gallery.css";
import countries from "./02-countries.json";
import itemsTemplate from "../templates/gallery-items.hbs";

const galleryRef = document.querySelector(".js-gallery");

const markup = itemsTemplate(countries);
galleryRef.insertAdjacentHTML("beforeend", markup);

const startBtn = document.querySelector(".js-start");
const stopBtn = document.querySelector(".js-stop");
let timerId = null;

let total = 11;

startBtn.addEventListener("click", () => {
  timerId = setInterval(() => {
    total -= 1;
    if (total <= 0) {
      clearInterval(timerId);
    }
    console.log(total);
  }, 1000);
});

stopBtn.addEventListener("click", () => {
  clearInterval(timerId);
  console.log(`Interval with id ${timerId} has stopped!`);
});
const date = new Date();

console.log(date);
console.log(date.toString());
