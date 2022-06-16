// Создать объект с полем product, равным ‘iphone’
let newObject = {
    product: 'iphone'
}
console.log(newObject);

// Добавить в объект поле price, равное 1000 и поле currency, равное ‘dollar’
newObject.price = 1000;
console.log(newObject);
newObject['curency'] = 'dollar';
console.log(newObject);

//Добавить поле details, которое будет содержать объект с полями model и color
newObject.deteils = {};
newObject.deteils.model = 'X';
newObject['deteils']['color'] = 'green';
console.log(newObject)