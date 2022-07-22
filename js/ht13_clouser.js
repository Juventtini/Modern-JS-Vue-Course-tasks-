/* Создайте функцию которая бы умела делать:
minus(10)(6); // 4
minus(5)(6); // -1
minus(10)(); // 10
minus()(6); // -6
minus()(); // 0
Подсказка, функция minus должна возвращать другую функцию. */
function minus(num=0) {
    return function(anotherNum=0){
        return num - anotherNum;
    }
}
console.log(minus(10)(6))
console.log(minus(5)(6))
console.log(minus(10)())
console.log(minus()(6))
console.log(minus()())

/* Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами:
function multiplyMaker ...
const multiply = multiplyMaker(2);
multiply(2); // 4 (2 * 2)
multiply(1); // 4 (4 * 1)
multiply(3); // 12 (4 * 3)
multiply(10); // 120 (12 * 10) */
function multiplyMaker(numFirst) {    
    return function (numSecond) {
        return numFirst *= numSecond;
    }
}
const multiply = multiplyMaker(2);
console.log(multiply(2))
console.log(multiply(1))
console.log(multiply(3))
console.log(multiply(10))

/*Реализовать модуль, который работает со строкой и имеет методы:
a. установить строку
i. если передано пустое значение, то установить пустую строку
ii. если передано число, число привести к строке
b. получить строку
c. получить длину строки
d. получить строку-перевертыш
Пример:
модуль.установитьСтроку(‘abcde’);
модуль.получитьСтроку(); // ‘abcde’
модуль.получитьДлину(); // 5 */
function threeInOne() {
    let str = '';
    return {
    setStr(val = "") {
        return String(val);
        },
    getStr() {
        return str
        },
    getLength(val) {
        return val.length;   
        },
    getReverse(val) {
        return val.split('').reverse().join('');
    },
    }
}
const abra = threeInOne();
console.log(abra.getReverse('sdsdsd'));

/*Создайте модуль “калькулятор”, который умеет складывать, умножать, вычитать, делить и возводить в степень. Конечное значение округлить 
до двух знаков после точки (значение должно храниться в обычной переменной, не в this).
модуль.установитьЗначение(10); // значение = 10
модуль.прибавить(5); // значение += 5
модуль.умножить(2); // значение *= 2
модуль.узнатьЗначение(); // вывести в консоль 30 (здесь надо округлить)
Также можно вызывать методы цепочкой:
модуль.установитьЗначение(10).вСтепень(2).узнатьЗначение(); // 100*/
function calculator() {
    let number = 0;
    return {
        setNumber(num = 0) {
            number = num;
            return this;
        },
        plus(num) {
            number += num;
            return this;
        },
        minus(num) {
            number -= num;
            return this;
        },
        devide(num) {
            number /= num;
            return this;
        },
        pow(num=2) {
            number = Math.pow(number, num);
            return this;
        },
        getNumber2Sign() {
            return  Number(number.toFixed(2)) || 0;
        }
    }
}
const calculate = calculator();
console.log(calculate.setNumber(15).plus(15).pow(2).getNumber2Sign())
console.log(calculate.plus(15).getNumber2Sign())
