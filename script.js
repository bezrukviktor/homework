'use strict';

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', ''),
    personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', '');

        if(a != '' && a != '' && a != null && b != null && a.length < 50) {
            personalMovieDB.movies[a] = b;
        }
}

console.log(personalMovieDB);