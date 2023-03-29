// alert('hello');

// const result = confirm("Are you here?");
// console.log (result);

// const answer = +prompt("Вам есть 18?", "18");
// console.log(answer + 5);
// +promt = number
// promt = string

// const answers = [];

// answers[0] = prompt("Кто такой Илья Аверков?", "");
// answers[1] = confirm("Это правда","");
// answers[1] = prompt("Должность", "");
// answers[2] = prompt("Кто по жизни", "");

//console.log(answers);
// console.log(typeof(null)); - ошибка ранних версий (запомнить)

// const user = 'Raul';

// alert(`Hi, ${user}`);

// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
// const personalMovieDB = {
// count: numberOfFilms,
// movies: {

// },
// actors: {

// },
// genres: [],
// privat: false
// };

// const a = prompt("Один из последних просмотренных фильмов?", ""),
// b = prompt("На сколько оцените его?"),
// c = prompt("Один из последних просмотренных фильмов?", ""),
// d = prompt("На сколько оцените его?");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

/* if (1) {
console.log('ok');
} else {
    console.log('error');
}
 */
/* const num = 50; */
/* 
if (num < 49){
    console.log('error');
} else if (num > 100 ) {
    console.log('many');
} else {
    console.log('ok');
}

(num === 50) ? console.log('ok') : console.log('error'); 
 */

/* const num = 50;

switch (num) {
    case 49:
        console.log('no');
        break;
    case 100:
        console.log('no');
        break;
    case 51:
        console.log('yes');
        break;
    default:
        console.log('no this time');
        break;
    
}

 */


/* const hamburger = 5;
const fries = null;

if (hamburger && fries) {
    console.log("я сыт");
} 

console.log((hamburger && fries)); */

/* const hamburger = 3;
const fries = 1;
const cola = 0;

console.log(hamburger === 3 && cola && fries);

console.log (1 && 0);
console.log(1 && 5); // возвращает последнее значение
console.log(null && 5); 
console.log(0 && 'iliya lox'); // первое неправдивое значение

// оператор && возвращает первое неправдивое значение, если оно есть
// если все аргументы равны, то возвращается значение последнего аргумента

if (hamburger === 3 && cola === 1 && fries) {
    console.log('я сыт');
} else {
    console.log('мы уходим');
} 
 */

// newFunction();

// function newFunction() {
//     let hamburger;
//     const fries = NaN;
//     const cola = 0;
//     const nuggets = 2;

//     // оператор && возвращает первое неправдивое значение, если оно есть
//     // если все аргументы равны, то возвращается значение последнего аргумента
//     if (hamburger && cola || fries === 3 && nuggets) {
//         console.log('все довольны');
//     } else {
//         console.log('мы уходим');
//     }

//     console.log(hamburger === 3 && (cola === 2 || fries === 3) && nuggets);

//     let johnReport, alexReport, samReport, mariaReport = 'done';

//     console.log(johnReport || alexReport || samReport || mariaReport);
// }

// 

// for (let i = 0; i < 3; i++){
//     console.log(i);
//     for (let j = 0; j < 3; j++){
//         console.log(j);
//     }
// }

// *
// **
// ***
// ****
// *****
// ******

// let result = "";
// const length = 7;

// for ( let i = 1; i < length; i++){

//     for (let j = 0; j < i; j++){
//         result += "*";
//     }

//     result += "\n";
// }

// console.log(result);

// first: for (let i = 0; i < 3; i++){
//     console.log(`First level: ${i}`);
//     for (let j = 0; j < 3; j++){
//         console.log(`Second level: ${j}`);
//         for (let k = 0; k < 5; k++){
//             if (k === 2) break first;
//             console.log(`Third level: ${k}`);
//         }
//     }
// }

// for (let i=5; i<=10; i++){
//     console.log(i);
// }

// for (let i = 20; i >= 10; i--){
//     if (i === 13) break;
//     console.log(i);
//     }

//     for (let i = 2; i<=10; i++){
//         if (i === 3) continue;
//         if (i === 5) continue;
//         if (i === 7) continue;
//         if (i === 9) continue;
//         console.log(i);
//     }


//     for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }




// let i = 2;
// while (i<=16){

//     if (i % 2 === 0){
//         i++;
//         continue;   
//     } else{
//         console.log(i);
        
//     }
//     i++;
// }


// const arrayOfNumbers = [];

//     for (let i = 5; i < 11; i++) {
//         arrayOfNumbers[i - 5] = i;
//     }

//     console.log(arrayOfNumbers);
//     return arrayOfNumbers;

    
   



'use strict';

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');

//     if (a !=null && b != null && a != '' && b != '' && a.length < 50){
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }

    
//  }
// if (personalMovieDB.count < 10 ){
//     console.log ("Просмотрено довольно мало фильмов");
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ){
//     console.log ("Вы классический зритель");
// } else if (personalMovieDB.count >=30) {
//     console.log ("Вы киноман");
// } else {
//     console.log ("Произошла ошибка");
// }

// console.log(personalMovieDB);

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let i = 1;
while (i<2) {
    const a = prompt('один из последних просмотренных фильмов?', '');
    const b = prompt ('на сколько оцените его?', '');
    i++;

if (a != null && b != null && a != '' && a.length < 50){
    personalMovieDB.movies[a] = b;
    console.log('done');
     } else {
        console.log('error');
        i--;
    }  
}
if (personalMovieDB.count < 10 ){
        console.log ("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ){
        console.log ("Вы классический зритель");
    } else if (personalMovieDB.count >=30) {
        console.log ("Вы киноман");
    } else {
        console.log ("Произошла ошибка");
    }
    
    console.log(personalMovieDB);
