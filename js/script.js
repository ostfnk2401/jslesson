const numberOfFilms = +prompt('Сколько фильмов ви уже посмотрели,', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последний просмотренних фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последний просмотренних фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);