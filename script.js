'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How many movies did you see?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        alert('You must enter a number bigger that 0')
        numberOfFilms = +prompt('How many movies did you see?', '');
    }

}
start();


const personlaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
    for (let i = 0; i < personlaMovieDB.count; i++) {
        const lastMovieName = prompt('One of last seen movies?', ''),
            currentMovieRating = +prompt('Rating of current movie (1 - 10)', '')
        if (lastMovieName && lastMovieName.length > 0 && lastMovieName.length <= 50 && currentMovieRating) {
            personlaMovieDB.movies[lastMovieName] = currentMovieRating;
        } else {
            if (lastMovieName.length > 50) {
                alert('Movie name lenght must be less than 50 characters!')
            } else if (!lastMovieName) {
                alert('You must enter movie name');
            } else if (!currentMovieRating || isNaN(currentMovieRating)) {
                alert('You must rate the movie (1 - 10)');
            }
            i--
        };
    }
}

function detectPersonalLevel() {
    if (personlaMovieDB.count > 0 && personlaMovieDB.count <= 30) {
        alert('Youa are movie lover')
    } else if (personlaMovieDB.count > 30) {
        alert('You are movie freak!')
    } else { alert("Error occured") }
}

function showMyDB(hiden) {
    if (!hiden) {
        console.log(personlaMovieDB);
    }
}

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personlaMovieDB.genres.push(prompt(`Your favorite genre at number ${i} is:`));
    }
}

writeYourGenres();

showMyDB(personlaMovieDB.privat);