let string = "some test string";

// Получить первую и последнюю буквы строки
console.log(string[0], string[string.length - 1]);

// Сделать первую и последнюю буквы в верхнем регистре
console.log(string[0].toUpperCase() + string.slice(1, -1) + string[string.length - 1].toUpperCase());

// Найти положение слова ‘string’ в строке
console.log(string.indexOf('string'));

// Найти положение второго пробела (“вручную” ничего не считать)
const firstSpace = string.indexOf(' ');
const secondSpace = string.indexOf(' ', firstSpace + 1);
console.log(secondSpace);

// Получить строку с 5-го символа длиной 4 буквы
const substri = string.substr(5, 4);
console.log(substri);

// Получить строку с 5-го по 9-й символы
console.log(string.slice(5, 9));

// Получить новую строку из исходной путем удаления последних 6-и символов (то есть исходная строка без последних 6и символов)
console.log(string.slice(0, -6));

// Из двух переменных a=20 и b=16 получить переменную string, в которой будет содержаться текст “2016”
a = 20;
b = 16;
console.log(a.toString() + b.toString())
