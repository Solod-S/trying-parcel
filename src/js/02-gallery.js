import "../css/common.css";
import "../css/02-gallery.css";
import countries from "./02-countries.json";
import itemsTemplate from "../templates/gallery-items.hbs";

const galleryRef = document.querySelector(".js-gallery");

const markup = itemsTemplate(countries);
galleryRef.insertAdjacentHTML("beforeend", markup);
