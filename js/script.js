"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const movieDB = {
    movies: [
      "Логан",
      "Лига справедливости",
      "Ла-ла лэнд",
      "Одержимость",
      "Скотт Пилигрим против...",
    ],
  };

  const addform = document.querySelector(".add"),
    addInput = addform.querySelector(".adding__input"),
    poster = document.querySelector(".promo__bg"),
    genre = poster.querySelector(".promo__genre"),
    adv = document.querySelectorAll(".promo__adv img"),
    movieList = document.querySelector(".promo__interactive-list"),
    checkbox = addform.querySelector('[type="checkbox"]');

  addform.addEventListener("submit", (event) => {
    event.preventDefault();

    let newFilm = addInput.value;
    const favorite = checkbox.checked;

    if (newFilm) {
      if (newFilm.length > 21) {
        newFilm = `${newFilm.substring(0, 22)}...`;
      }

      if (favorite) {
        console.log("Добавляем любимый фильм");
      }

      movieDB.movies.push(newFilm);
      sortArr(movieDB.movies);
      createMovieList(movieDB.movies, movieList);
    }

    event.target.reset();
  });

  const deleteAdv = (arr) => {
    arr.forEach(function (item) {
      item.remove();
    });
  };

  const makeChanges = () => {
    poster.style.backgroundImage = "url('../img/bg.jpg')";
    genre.textContent = "драма";
  };

  const sortArr = (arr) => {
    arr.sort();
  };

  function createMovieList(films, parent) {
    parent.innerHTML = "";
    sortArr(films);

    films.forEach((film, i) => {
      parent.innerHTML =
        parent.innerHTML +
        `<li class="promo__interactive-item">${i + 1}  ${film}
      <div class="delete"></div>
  </li>`;
    });

    document.querySelectorAll(".delete").forEach((btn, i) => {
      btn.addEventListener("click", () => {
        btn.parentElement.remove();
        movieDB.movies.splice(i, 1);

        createMovieList(films, parent);
      });
    });
  }

  // const deleteFilm = (e) => {
  //   for (let node of movieList.childNodes) {
  //     if (node.nodeName == "#text") {
  //       continue;
  //     }
  //   }
  // };

  // const filmsList = movieList.querySelectorAll(".promo__interactive-item");
  // const deleteFilm = (e) => {
  //   filmsList.forEach((item, i) => {});
  // };

  // const btnDelete = document.querySelectorAll(".delete");
  // btnDelete.forEach((btn, i) => {
  //   btn.addEventListener("click", deleteFilm);
  // });

  deleteAdv(adv);
  makeChanges();
  createMovieList(movieDB.movies, movieList);
});
