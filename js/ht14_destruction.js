/* Используя rest оператор и деструктуризацию, создать функцию, которая принимает любое количество аргументов 
и возвращает объект, содержащий первый аргумент и массив из остатка:
func(‘a’, ‘b’, ‘c’, ‘d’) →
{ first: ‘a’, other: [‘b’, ‘c’, ‘d’] }*/
function returnObj(a,...other) {
return {first: a, other}
}
console.log(returnObj(12, 14, 44, 55, 66, 66, 77));

/* Организовать функцию getInfo, которая принимает объект вида
{ name: ..., info: { employees: [...], partners: [ … ] } }
и выводит в консоль имя (если имени нет, показывать ‘Unknown’) и первые две компании из массива partners:
const organisation = {
name: 'Google',
info: { employees: [‘Vlad’, ‘Olga’], partners: ['Microsoft', 'Facebook', 'Xing'] }
};
getInfo(organisation); →
Name: Google
Partners: Microsoft Facebook */
const organisation = {
  name: 'Google',
  info: { employees: ['Vlad', 'Olga'], partners: ['Microsoft', 'Facebook', 'Xing']   }
};

function getInfo(
  {
    name = 'Unknow',
    info: { partners: [first = 'none', second = 'none'] = []} = {}
  } = {}
) {
  console.log(`Name: ${name}`);
  console.log(`Partners: ${first}, ${second}`);
}

getInfo(organisation)
getInfo()

/* Дан объект:*/
let user = {
      "guid": "dd969d30-841d-436e-9550-3b0c649e4d34",
      "isActive": false,
      "balance": "$2,474.46",
      "age": 30,
      "eyeColor": "blue",
      "name": "Tameka Maxwell",
      "gender": "female",
      "company": "ENOMEN",
      "email": "tamekamaxwell@enomen.com",
      "phone": "+1 (902) 557-3898",
      "tags": [
        "aliquip",
        "anim",
        "exercitation",
        "non",
      ],
      "friends": [
        {
          "id": 0,
          "name": "Barber Hicks"
        },
        {
          "id": 1,
          "name": "Santana Cruz"
        },
        {
          "id": 2,
          "name": "Leola Cabrera"
        }
      ]
    };
/*Используя деструктуризацию получить значения из следующих полей
1. name,  balance, email
2. из массива tags получить первый и последний элемент
3. из массива friends получить значение поле name из первого элемента массива
Если какое то из полей не имеет значения то подставить значение по умолчанию. */
const { name: Name = "", balance: Balance = "", email: Email = "", tags: [firstTag = "", , , lastTag = ''], friends: [{ name: friendsName = ''}]} = user;
console.log(Name, Balance, Email);
console.log(firstTag, lastTag)
console.log(friendsName)

/*С помощью оператора rest, из объекта user (из предыдущей задачи) скопировать в новый массив значение следующих полей tags и friends.*/
const newArr = [...user.friends, ...user.tags]
console.log(newArr)