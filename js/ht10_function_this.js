/* 1. Создать объект, который описывает ширину и высоту прямоугольника, а также может посчитать площадь фигуры:
const rectangle = {width:..., height:..., getSquare:...};*/
const rectangle = {
    width: 100,
    height: 50,
    getSquere() {
        return this.width * this.height
    }
}
console.log(rectangle.getSquere())

/* 2.Создать объект, у которого будет цена товара и его скидка, а также
два метода: для получения цены и для расчета цены с учетом скидки:
const price = {
price: 10,
discount: '15%',
... };
price.getPrice(); // 10
price.getPriceWithDiscount(); // 8.5 */
const price = {
    price: 1000,
    discount: '15%',
    getPrice() {
        return this.price
    },
    getPriceWithDiscount() {
        const discount = parseFloat(this.discount)
        const priceWithDiscount = this.price - (this.price * (discount / 100))
        return priceWithDiscount
    }
}
console.log(price.getPriceWithDiscount())

/* 3. Создать объект, у которого будет поле высота и метод “увеличить
высоту на один”. Метод должен возвращать новую высоту:
object.height = 10;
object.inc(); // придумать свое название для метода
object.height; // 11;*/

const objectIncHeight = {
    height: 10,
    getInc() {
        this.height += 1;
        return this.height
    }
}
console.log(objectIncHeight.height)
console.log(objectIncHeight.getInc())
console.log(objectIncHeight.height)

/* 4.Создать объект “вычислитель”, у которого есть числовое свойство
“значение” и методы “удвоить”, “прибавить один”, “отнять один”.
Методы можно вызывать через точку, образуя цепочку методов:
const numerator = {
value: 1,
double: function () {...},
plusOne: function () {...},
minusOne: function () {...},
}
numerator.double().plusOne().plusOne().minusOne();
numerator.value // 3 */
const numerator = {
    value: 1,
    getDouble() {
        this.value *= 2;
        return this
    },
    getPlusOne() {
        this.value += 1;
        return this;
    },
    getMinusOne() {
        this.value -= 1;
        return this;
    }
}
console.log(numerator.getDouble().getPlusOne().getMinusOne());

/* 5.Создать объект с розничной ценой и количеством продуктов.
Этот объект должен содержать метод для получения общей стоимости всех товаров (цена * количество продуктов)*/
const prodPrice = {
    price: 20,
    count: 100,
    getoverallValue() {
        return this.price * this.count;
    }
}
console.log(prodPrice.getoverallValue());

/* 6.Создать объект из предыдущей задачи. Создать второй объект, который описывает количество деталей и цену за одну деталь.
 Для второго объекта нужно узнать общую стоимость всех деталей, но нельзя создавать новые функции и методы.
Для этого “позаимствуйте” метод из предыдущего объекта.*/
const prodPrice2 = {
    price: 30,
    count: 100,
}
console.log(prodPrice.getoverallValue.apply(prodPrice2));
console.log(prodPrice.getoverallValue.call(prodPrice2));

/* 7. Даны объект и функция:
let sizes = {width: 5, height: 10},
getSquare = function () {return this.width * this.height};
Не изменяя функцию или объект, получить результат функции getSquare для объекта sizes */
let sizes = {
    width: 5,
    height: 10
},
    getSquare = function () { return this.width * this.height };
console.log(getSquare.call(sizes));
console.log(getSquare.apply(sizes));

/* 8. let element = {
height: 25,
getHeight: function () {return this.height;}
};
let getElementHeight = element.getHeight;
getElementHeight(); // undefined
Измените функцию getElementHeight таким образом, чтобы можно было вызвать getElementHeight() и получить 25.*/
let element = {
height: 25,
getHeight: function () {return this.height;}
};
let getElementHeight = element.getHeight.bind(element);
console.log(getElementHeight());



