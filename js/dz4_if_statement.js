/*Чему равно а, почему?
let a = 0 || 'string'; 'string': Первое Тру

let a = 1 && 'string'; 'string': Последнее Тру

let a = null || 25; 25 Первое Тру

let a = null && 25; null Первое фолс

let a = null || 0 || 35; 35 первое тру

let a = null && 0 && 35; null первое фолс*/

/* Что отобразится в консоли. Почему?

12 + 14 + '12' = '2612' сначала арифметич 12+14 а потом со строкой 26+12 строка 2612

3 + 2 - '1' = 4 сначала 3+2 потом число 5 - 1 = число 4

'3' + 2 - 1 = 31 сначала строка 3 + число 2 строка 32 потом строку к числу 32-1

true + 2 = 3 число 3

+'10' + 1 = 11 чмсло 11

undefined + 2 = NaN андефаинд с числами к НаН

null + 5 = 5 нул к 0 + 5 число

true + undefined = Nan андефаинд к числу Нан
*/

/* Создать произвольную переменную, присвоеть ей значение и написать условие, если переменная равна “hidden”,
 присвоить ей значение “visible”, иначе - “hidden”.*/
let justVariable = 'value';
if (justVariable === 'hidden') {
    justVariable = 'visible'
} else {
    justVariable = 'hidden'
}
console.log(justVariable)

/*Создать переменную и присвойте ей число.
Используя if, записать условие:
- если переменная равна нулю, присвоить ей 1;
- если меньше нуля - строку “less then zero”;
- если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись). */
let justVar = 5;
if (justVar === 0) {
    justVar = 1
} else if (justVar < 0) {
    justVar = "less then zero"
} else {
    justVar *= 10;
}
console.log(justVar)

/* Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }.
Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение
'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false. */
let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }
if (car.age > 5) {
    console.log("Need Repair");
    car.needRepair = 'true';
    console.log(car)
} else {
    console.log(car);
}

/* Дан объект let item = { name: 'Intel core i7', price: '100$', discount: '15%' }.
Написать условие если у item есть поле discount и там есть значение которое не NaN а также есть поле price значение которого также не NaN 
то в объекте item создать поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль, обратите внимание что поля 
discount и price это строки и вам из них нужно получить числа чтобы выполнить расчет. иначе если поля discount нет то вывести просто поле 
price в консоль. */
let item = { name: 'Intel core i7', price: '100$', discount: '15%' };
if ((item.discount && item.discount !== NaN) && (item.price && item.price !== NaN)) {
    
    item.priceWithDiscount = parseInt(item.price) - (parseInt(item.price) * parseInt(item.discount)) / 100;
    console.log(item.priceWithDiscount)
} else if (!item.discount) {
    console.log(item.price)
}

/* Дан следующий код:
let product = {
name: “Яблоко”,
price: “10$”
};
let min = 10; // минимальная цена
let max = 20; // максимальная цена
Написать условие если цена товара больше или равна минимальной цене и меньше или равна максимальной цене 
то вывести в консоль название этого товара, иначе вывести в консоль что товаров не найдено. */
let product = {
name: 'Яблоко',
price: "21$"
};
let min = 10; // минимальная цена
let max = 20; //максимальная цена
let price = parseInt(product.price);
if (price >= min && price <= max) {
    console.log(product.name)
} else {
    console.log('Товаров не найдено')
}


