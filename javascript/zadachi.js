// let arr = [];
// for (let i=0;i<10;i++){
//     arr[i]= 'x';
//     }
//     console.log(arr);

// let i = 1;
// while(i<=5){
// console.log(i);
// i++;
// }

// const result = [1,2,3,4,5];
// for (let i = 0; i< result.length; i++){
// console.log(result[i]);
// }

// const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];

//     for (let i = 0; i < arr.length; i++) {
//         result[i] = arr[i];
//     }

//     console.log(result);
//     return result;

// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];
// for( let i = 0; i < arr.length; i++) {
//     result[i] = arr[i];}
//     console.log(result);

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// for (let i = 0; i<data.length;i++) {
//     if (typeof(data[i]) === 'number'){
//         data[i] = data[i] * 2;
//     } else if (typeof(data[i]) === 'string'){
//         data[i] = `${data[i]}- 'done`;
//     }
// }
// console.log(data);
// const data = [5, 10, 'Shopping', 20, 'Homework'];

//     for (let i = 0; i < data.length; i++) {
//         if (typeof(data[i]) === 'number') {
//             data[i] = data[i] * 2;
//         } else if (typeof(data[i]) === 'string') {
//             data[i] = `${data[i]} - done`;
//         }
//     }

//     console.log(data);

// const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];

//     for (let i = 1; i <= data.length; i++) {
//         result[i - 1] = data[data.length - i];
//     }

//     console.log(result);

// const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];

//     for (let i = 1; i <= data.length; i++) {
//         result[i - 1] = data[data.length - i]
//     }

//     console.log(result);

// let result = "";
// const length = 7;

// for ( let i = 1; i < length; i++){

//     for (let j = 0; j < i; j++){
//         result += "*";
//     }

//     result += "\n";
// }

// console.log(result);

// Есть массив, в котором хранятся любые числа
// (положительные и отрицательные ну и нули),
//  поместить в отдельный массив элементы которые положительные
//  и вывести этот новый массив(в консоль)

// const arr = [-3, 5, -8, 16, 20, -23, 0];
// const result = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 0) {
//     result.push(arr[i]);
//   }
// }
// console.log(result);

// 2) Вывести из массива все четные числа
// (можешь в отдельный массив их поместить)

// const arr = [-3, 5, -8, 16, 20, -23, 0];
// const arr2 = arr.filter((item)=>item % 2 === 0);
// console.log(arr2);

// const arr = [1,2,3,4,-6,10,-5,78];
// const result = arr.filter(item => item > 0)
// 				  .sort((a, b) => a - b);

// console.log(result);

// const arr = [-3, 5, -8, 16, 20, -23, 0];
// const result = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 0) {
//     result.push(`${arr[i] + ' - положительное число'}`);
//   } else if
//   (arr[i] < 0){
//     result.push(`${arr[i] + ' - отрицательное число'}`);
//   }

// }
// console.log(result);
const arr = [-1, 1, 2, 3,-5];
let i = 0;
while (i < arr.length) {
  if (arr[i] > 0) {
    arr[i] = `${arr[i] + " - положительное число "}`;
  } else if (arr[i] < 0) {
    arr[i] = `${arr[i] + " - отрицательное число"}`;
  }
  i++;
}
console.log(arr);
