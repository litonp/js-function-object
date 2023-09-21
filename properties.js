var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 20
}
var penCount = shoppingCart.pen;
console.log(penCount);

var penCount2 = shoppingCart['pen'];
console.log(penCount2);

var properties = Object.keys(shoppingCart);
console.log(properties);

var propertyValues = Object.values(shoppingCart);
console.log(propertyValues);

shoppingCart.mouse = 15;
console.log(shoppingCart);

var propertyName = 'books';
var propertyValue = shoppingCart[propertyName];
console.log(propertyName, propertyValue);