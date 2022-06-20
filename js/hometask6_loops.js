/* На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова
будут в верхнем регистре. Использовать for или while. */
let str = 'I am in easycode';
let result = '';
for (let i = 0; i < str.length; i++) {
    if (i === 0 || str[i - 1] === ' ') {
        result += str[i].toUpperCase()
    } else {
        result += str[i]
    }    
}
console.log(result);

/* Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква становится первой, предпоследняя - второй итд).*/
let stroka = 'tseb eht ma i';
let result1 = '';
for (let i = stroka.length; i--;) {
  result1 += stroka[i];
}
console.log(result1);

/*Факториал числа - произведение всех натуральных чисел от 1 до n
включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10. Использовать for. */
let result2 = 1;
for (let i = 1; i < 10; i++) {
    result2 *= i;    
}
console.log(result2)

/*На основе строки “JavaScript is a pretty good language” сделать новую строку,
где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for. */

let strings = 'JavaScript is a pretty good language';
let newStr = '';
for (let i = 0; i < strings.length; i++) {
    if (strings[i] === 0 || strings[i - 1] === ' ') {
        newStr += strings[i].toUpperCase()
    } else if (strings[i] !== ' ') {
        newStr += strings[i];
    }
}
console.log(newStr)

/* Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль. 
Массив [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of. */

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
for (let number of array) {
    if (number % 2) {
        console.log(number)
    }
}

// /*Дан объект:
let list = {
name: 'denis',
work: 'easycode',
age: 29
}
// Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. Использовать for in.*/

for (let key in list) {
    if (typeof list[key] === 'string') {
        list[key] = list[key].toUpperCase()
    }
}
console.log(list)