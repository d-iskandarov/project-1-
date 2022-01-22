"use strict"; 

let number = 5;
const leftBorderWidth = 1; 
number = 10; 
console.log (number);


// Прямых констант в JS не бывает; Выдаст значение obj.a = 10;
const obj = {
    a: 50
};
obj.a = 10; 
console.log(obj);

console.log(abc);
var abc = 'Ivan';

{
    var result = 50;
}

console.log(result);


// alert(5);
[].push('a');


// КЛАССИФИКАЦИЯ ДАННЫХ В JS

let number1 = 4.6;

console.log(-4/0);
//Результат: Infinity - "бесконечность" либо "- бесконечность"

console.log ('string' * 9); // NaN - not a number

const persone = 'Alex';

const bool = false;

// console.log(something);

let und;
console.log(und);

const key = 'age'

const isPerson = {
    name: 'John',
    age: 25,
    isMarried: false
};

// console.log(isPerson.name);
console.log(isPerson.name); //John
console.log(isPerson['name']); //John


console.log(isPerson[key]); //25
console.log(isPerson['age']); //25
console.log(25); //25

let arr = ['plum.png', 'orange.jpg', 'apple.bmp', {}, []];
console.log(arr[4]);

// 7. ПРОСТОЕ ОБЩЕНИЕ С ПОЛЬЗОВАТЕЛЕМ

// alert('Hello');

// const isResult = confirm('Are you here?');
// console.log(isResult);

// const isAnswer = prompt('Вам есть 18?','');
// console.log((isAnswer+5));


const isAnswers = [];

// isAnswers[0] = prompt ('Как Ваше имя', '');
// isAnswers[1] = prompt ('Как Ваше фамилия', '');
// isAnswers[2] = prompt ('Сколько Вам лет', '');

// document.write(isAnswers);
console.log(typeof(isAnswers));
console.log(typeof(null));//object - официал признанная ошибка




// 8 ИНТЕРПОЛЯЦИЯ 

const category = 'toys';
console.log(`https://someurl.com/${category}/5`);

const isUser = 'Ivan';

alert(`Привет ${isUser},I love ${category}`);

let a = b;
























