//BigInt
const max = Number.MAX_SAFE_INTEGER;
// = 9007199254740991
max + 1;

console.log(max + 1);
// 9007199254740992
max + 2;
// max + 2 no work 

BigInt(Number.MAX_SAFE_INTEGER) + 2n;
9007199254740992 + 2n

console.log(9007199254740992n + 2n);
// = 9007199254740993n
1234567890123456789 * 123;
console.log(1234567890123456789 * 123);

1234567890123456789n * 123n;
console.log(1234567890123456789n * 123n);

typeof 123
// = number
typeof 123n
// = bigint
42n === BigInt(42);
// = true
42n == 42;
// = true 
if (0n) {
    console.log('if');
} else {
    console.log('else');
}
// = else, because 0n converted on false
(7 + 6 - 5) * 4 ** 3 / 2 % 3;
console.log((7 + 6 - 5) * 4 ** 3 / 2 % 3);
// = 1
(7n + 6n - 5n) * 4n ** 3n / 2n % 3n;
console.log((7n + 6n - 5n) * 4n ** 3n / 2n % 3n);
// = 1n
BigInt(Number.MAX_SAFE_INTEGER) + 2.5;
// = ?? (typeerror)
1 + 1n;
console.log(1 + 1n);
//typeerror
123 < 124n
console.log(123<124n);
// = true

BigInt(123);
console.log(BigInt(123));
// = 123n
BigInt(1.5);
// = RangeError
BigInt('1.5');
// = SyntaxError




// Symbols
// let id = Symbol("id");
// let id1 = Symbol("id");

// alert (id == id1);
//false 
// alert (id);
// TypeError: Cannot convert a Symbol value to a string

// alert(id.toString());
// Symbol(id), теперь работает
// alert(id.description);
// id

// let user = {
   // name: "Vasya"
// };

// let id_2 = Symbol("id");

// user[id] = 1 
// alert(user[id]);
// мы можем получить доступ к данным по ключу-символу
// user [id] = "Их идентификатор";

// let user = { name: "Вася" };
// Объявляем в нашем скрипте свойство "id"
// user.id = "Наш идентификатор";
// ...другой скрипт тоже хочет свой идентификатор...
// user.id = "Их идентификатор"
// Ой! Свойство перезаписано сторонней библиотекой!

// let id = Symbol("id");
// let user = {
//  name: "Вася",
  // [id]: 123 // просто "id: 123" не сработает
// };

// let id = Symbol("id");
// let user = {
//  name: "Вася",
//  age: 30,
//  [id]: 123
// };

// for (let key in user) alert(key); // name, age (свойства с ключом-символом нет среди перечисленных)

// хотя прямой доступ по символу работает
// alert( "Напрямую: " + user[id] );

// let id = Symbol("id");
// let user = {
//  [id]: 123
// };

// let clone = Object.assign({}, user);

// alert( clone[id] ); // 123
// console.log(clone[id]);

// читаем символ из глобального реестра и записываем его в переменную
let id = Symbol.for("id"); // если символа не существует, он будет создан

// читаем его снова и записываем в другую переменную (возможно, из другого места кода)
let idAgain = Symbol.for("id");

// проверяем -- это один и тот же символ
alert( id === idAgain ); // true

// получаем символ по имени
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

// получаем имя по символу
alert( Symbol.keyFor(sym) ); // name
alert( Symbol.keyFor(sym2) ); // id

let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");

alert( Symbol.keyFor(globalSymbol) ); // name, глобальный символ
alert( Symbol.keyFor(localSymbol) ); // undefined для неглобального символа

alert( localSymbol.description ); // name


const storeName = 'Noir';
const storeDescripton = {
    budget: 10000,
    employes : ['Iliya', 'Danik', 'Raul'],
    products :{
        'Notebook': 600,
        'Mouse': 50
    },
    open: true
};
console.log([storeDescripton.employes[0]]);

// примитивы (значения которые не могут быть изменены)


console.log(typeof 42);
// expected output: "number"

console.log(typeof 'blubber');
// expected output: "string"

console.log(typeof true);
// expected output: "boolean"

console.log(typeof undeclaredVariable);
// expected output: "undefined"

// Числа
typeof 37 === 'number';
typeof 3.14 === 'number';
typeof(42) === 'number';
typeof Math.LN2 === 'number';
typeof Infinity === 'number';
typeof NaN === 'number'; // несмотря на то, что это "Not-A-Number" (не число)
typeof Number(1) === 'number'; // никогда не используйте эту запись!

// Строки
typeof '' === 'string';
typeof 'bla' === 'string';
typeof '1' === 'string'; // обратите внимание, что число внутри строки всё равно имеет тип строки
typeof (typeof 1) === 'string'; // typeof всегда вернёт в этом случае строку
typeof String('abc') === 'string'; // никогда не используйте эту запись!


// Booleans
typeof true === 'boolean';
typeof false === 'boolean';
typeof Boolean(true) === 'boolean'; // никогда не используйте эту запись!


// Символы
typeof Symbol() === 'symbol'
typeof Symbol('foo') === 'symbol'
typeof Symbol.iterator === 'symbol'


// Undefined
typeof undefined === 'undefined';
typeof declaredButUndefinedVariable === 'undefined';
typeof undeclaredVariable === 'undefined';


// Объекты
typeof {a: 1} === 'object';

// используйте Array.isArray или Object.prototype.toString.call
// чтобы различить обычные объекты и массивы
typeof [1, 2, 4] === 'object';

typeof new Date() === 'object';


// То что ниже приводит к ошибкам и проблемам. Не используйте!
typeof new Boolean(true) === 'object';
typeof new Number(1) === 'object';
typeof new String('abc') === 'object';


// Функции
typeof function() {} === 'function';
typeof class C {} === 'function';
typeof Math.sin === 'function';

// Это было определено с рождения JavaScript
typeof null === 'object';

// Все функции-конструкторы, созданные с помощью 'new', будут иметь тип 'object'
var str = new String('String');
var num = new Number(100);

typeof str; // Вернёт 'object'
typeof num; // Вернёт 'object'

// Но существует исключение для конструктора Function

var func = new Function();

typeof func; // Вернёт 'function'

typeof /s/ === 'function'; // Chrome 1-12 Не соответствует ECMAScript 5.1
typeof /s/ === 'object';   // Firefox 5+  Соответствует ECMAScript 5.1

typeof undeclaredVariable === 'undefined';
typeof newLetVariable; let newLetVariable; // ReferenceError
typeof newConstVariable; const newConstVariable = 'hello'; // ReferenceError

typeof document.all === 'undefined'; //исключение




