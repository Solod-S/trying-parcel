// const BASE_URL = "https://pokeapi.co/api/v2";

// function fetchPokemon(pokemonId) {
//   return fetch(`${BASE_URL}/pokemon/${pokemonId}`).then((response) =>
//     response.json()
//   );
// }

// export default { fetchPokemon };

const BASE_URL = "https://pokeapi.co/api/v2";

function fetchPockemon(id) {
  return fetch(`${BASE_URL}/pokemon/${id}`).then((response) => response.json());
  //ловим успех и раскодируем(распарсиваем) с помощью json() )
  // .then(renderPokemon)
  // // .then(pokemon => renderPokemon(pokemon))
  // // ловим успех => получаем данные (данные есть только в этом then) + делаем разметку
  // .catch((error) => console.log(error))
  // если ошибка ловим ее тут
}
// функция возвращает распарсенный результат фетча(промиса) = данные
//

export default { fetchPockemon };
