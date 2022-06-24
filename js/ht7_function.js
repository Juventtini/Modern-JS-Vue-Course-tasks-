/*Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение*/
function multiply() {
  if (!arguments) return 0;
  let res = 1;
  for (let i = 0; i < arguments.length; i++) {
    res *= arguments[i];
  }
  return res;

}
multiply(2, 4, 5, 6);
console.log(multiply(2, 4, 5, 6, 4));

/*Создать функцию, которая принимает строку и возвращает строку-перевертыш */
function reverseString(str) {
  let string = String(str);
  let reverseStr = '';
  for (let i = string.length; i--;) {
    reverseStr += string[i];
  }
  return reverseStr;
}

console.log(reverseString('test'));
reverseString('');
reverseString(null);
reverseString(undefined);
reverseString();

/*Создать функцию, которая в качестве аргумента может принять строку, числа,
null или undefined и возвращает строку, где каждый символ разделен пробелом и заменен на юникод - значение символа:
getCodeStringFromText("hello") // “104 101 108 108 111”
подсказка: в решении задачи вам помогут методы charCodeAt и trim */
function getCodeStringFromText(str) {
  let string = String(str);
  let res = '';

  for (let i = 0; i < string.length; i++) {
    res += string[i].charCodeAt() + ' ';
  }

  return res.trim();
}

console.log(getCodeStringFromText('hello'))
console.log(getCodeStringFromText(''))
console.log(getCodeStringFromText(null))
console.log(getCodeStringFromText(undefined))
console.log(getCodeStringFromText(1234))

/* Создать функцию угадай число Она принимает число от 1-10 
 (обязательно проверить что число не больше 10 и не меньше 0)
 Если число не соответствует условию то верните ошибку return new Error("Please provide number in range 0 - 10"). 
 Если переданно не число то верните ошибку return  new Error("Please provide a valid number");
 Далле функция генерирует рандомное число от 1-10 и сравнивает с заданным числом если они совпали то возвращает строку You win!
 если нет то строку You are lose, your number is 8 the random number is 5. Числа подставить реальные
  */
function guessTheNumber(num) {
  let number = +num
  let randomNum = Math.ceil(Math.random() * 10);
  if (typeof number !== "number" || isNaN(number)) { return new Error("Please provide a valid number") };
  if (number < 0 || number > 10) { return new Error("Please provide number in range 0 - 10") };
  if (randomNum === number) { return "You win!" };
  return `You are lose, your number is ${number}, the random number is ${randomNum}`;     
}
 console.log(guessTheNumber(5))