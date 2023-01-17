'use strict'
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
//Создайте функцию, которая принимает целое число в качестве аргумента и возвращает значение "Even"для четных или "Odd"нечетных чисел.

function evenOrOdd(number) {

    let result = Number.isInteger(number) ? number : 'error';

    if (result === number && result % 2 === 0) return alert('четное число')
    if (result === number && result % 2 !== 0) return alert('не четное число')

    return console.log(result);
}
const number = +prompt('Введите целое число', '2.2');
const a = evenOrOdd(number);
console.log(a)
