// Создать функцию, которая принимает число n и возвращает массив, заполненный числами от 1 до n;
function getArray(num) {
    let array = [];
    for (let i = 1; i <= num; i++) {
        array.push(i);
    } return array
}
console.log(getArray(10));

// Создать функцию, которая принимает массив, а возвращает новый массив с дублированными элементами входного массива.
// doubleArray([1,2,3]) // [1,2,3,1,2,3]
function doubleArray(arr) {
    return arr.concat(arr)
}

console.log(doubleArray([1, 2, 3, 4, 5])) // [1,2,3,1,2,3]

/* Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого массива первый элемент, 
а возвращает массив из оставшихся значений. changeCollection([1,2,3], [‘a’, ’b’, ‘c’])  // [ [2,3], [‘b’, ‘c’] ]
Не забудьте про проверкку того что массив является массивом. Это можно сделать с помощью метода Array.isArray(arr); */
function changeCollection() {
    const res = [];
    for (let i = 0; i < arguments.length; i++) {
    if (Array.isArray(arguments[i])) {
      const el = arguments[i].slice();
      el.shift();
      res.push(el)
    }
  }
  return res;
}

console.log(changeCollection([1, 2, 3]))

/* Создать функцию которая принимает массив пользователей, поле которое хочу проверить и значение на которое хочу 
проверять указанное поле. Проверять что все аргументы переданы. Если что то не переданно то возвращать объект ошибки 
return new Error('Error message') . Возвращать новый массив с пользователями соответсвующие указанным параметрам.
Массив пользователей*/
const users = [
  {
    "_id": "5e36b779dc76fe3db02adc32",
    "balance": "$1,955.65",
    "picture": "http://placehold.it/32x32",
    "age": 33,
    "name": "Berg Zimmerman",
    "gender": "male"
  },
  {
    "_id": "5e36b779d117774176f90e0b",
    "balance": "$3,776.14",
    "picture": "http://placehold.it/32x32",
    "age": 37,
    "name": "Deann Winters",
    "gender": "female"
  },
  {
    "_id": "5e36b779daf6e455ec54cf45",
    "balance": "$3,424.84",
    "picture": "http://placehold.it/32x32",
    "age": 36,
    "name": "Kari Waters",
    "gender": "female"
  }
]


function filterUsers(arr, key, value) {

  if (!Array.isArray(arr)) return new Error('The first argument should be an array');
  if (typeof key !== "string" || key === '') return new Error('The key should be a valid string');
  if (value === undefined || value === null) return new Error('The value should be a valid value.');

  const res = [];

  for (i = 0; i < arr.length; i++) {
    if (arr[i][key] === value) {
      res.push(arr[i])
    }
  }

  return res;
}

console.log(filterUsers(users, "age", 36))
