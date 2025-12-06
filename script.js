const numberOfFilms = +prompt('how many movies did you see?', '');

const personlaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('one of last seen movies?', ''),
    b = prompt('rating of current movie', ''),
    c = prompt('one of last seen movies?', ''),
    d = prompt('rating of current movie', '');

personlaMovieDB.movies[a] = b;
personlaMovieDB.movies[c] = d;

console.log(personlaMovieDB);