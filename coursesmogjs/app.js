// number (1, 2, Infinity, 1.3, -2)
// string ('Hello', "Hello", `Hello`)
// bigInt
// Symbol
// Object ([], {})
// undefined
// null
// boolean (true, false)

// var let const

// let sayHello = "Hello";

// `${sayHello} Dima`;

// console.log(`${sayHello} Dima`);

// операторы (+ - / * ** ++ -- += -= >< <= >= % = == === != !== isNaN() && || )

// console.log (null);

// let num = 1;
// if (num === 1) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// const getNumber = +prompt("enter your number");

// if (getNumber % 2 === 0) {
//   alert("even");
// } else {
//   alert("odd");
// }

// getNumber % 2 === 0 ? alert("even") : alert("odd");

// switch (getNumber) {
//   case 10:
//     console.log("10");
//     break;
//   case 10:
//     console.log("20");
//     break;
//   default:
//     console.log("default");
// }

// console.log (null, false, 0 , '', undefined, NaN); // (false)

// console.log (2 && 1 && (3 || 2) || null && (undefined || 1));

// const enterNum = prompt('enter');
// if (1 || 3) {
//     console.log ('1');
// } else if (2 && 5) {
//     console.log ('2');
// }

// const getYourNick = confirm('Are you admin?');
// const getYourPassword = +prompt('get Your Password');

// if (getYourNick) {
//     const getYourPassword = +prompt('enter password');
//     if (getYourPassword === 'admin') {
//         alert('admin');
//     } else {
//         alert('You are not admin');
//     }
// } else {
//     console.log(alert('You are not admin'));
// }

// const getYourAge = prompt ('How old are you?');

// if (getYourAge < 18){
//     alert('young');
// } else if (getYourAge > 18 && getYourAge < 51) {
//     alert('middle');
// } else if (getYourAge > 50 && getYourAge < 101) {
//     alert('old');
// }

// let num = 0;
// while (num < 5) {
//     num++;
//     console.log(num);
// }

// let num1 = 0;
// do {
//     num1++;
//     console.log(num1);
// } while (num1 < 5);

// for (let i = 0; i <= 5; i++) {
//     console.log(i);
//     if(i === 2){
//         break;
//     }
// }

// for (let i = 0; i<=5; i++){
//     if (i % 2 === 0 && i != 0){
//         console.log(`${i} - четное число`);
//     }
//     else if (i === 0){
//         console.log (`${i} - это ноль`);
//     }
//     else {
//         console.log(`${i} - нечетное число`);
//     }
// }

let str = "abbbabaa";
// console.log (str.length);
// console.log (str[0]);

let countA = 0;
let countB = 0;
for (let i = 0; i < str.length; i++) {
  if (str[i] === "a") {
    countA++;
  } else if (str[i] === "b") {
    countB++;
  }
}

if (countA > countB) {
  console.log("a win");
} else if (countA < countB) {
  console.log("b win");
} else {
  console.log("egal");
}


// function decloration

const numUser = prompt('sad');

function getSumm () {
    return `hello ${numUser}`;
}

console.log(getSumm());


// function expresion

const getAny = function (a, b){
    return a + b;
};
console.log(getAny(1, 2));


const getNum = (a, b) => a + b;
console.log(getNum(1, 2));


(function getXueta(){
    console.log('IEFE');
})();


