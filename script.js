const numberOfFilms = +prompt("Сколько фильмов?", "");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

for (let i = 0; i < personalMovieDB.count; i++) {
    const a = prompt("Последний фильм?", ""),
          b = +prompt("Оценка", "");

    personalMovieDB.movies[a] = b;
}  

console.log(personalMovieDB);
