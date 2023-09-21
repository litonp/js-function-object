// array vs object
var shoppingItems = ['books', 'sunglass', 'shoes', 'pen'];

var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 20,
    shoes: 2
}

const keys = Object.keys(shoppingCart);
console.log(keys);

const values = Object.values(shoppingCart);
console.log(values);

//  var keys = ['books', 'sunglass', 'keyboard', 'mouse', 'pen', 'shoes'];
for (var i = 0; i < keys.length; i++) {
    var propertyName = keys[i];
    var propertyValue = shoppingCart[propertyName];
    // console.log(propertyValue, propertyName);
}

// for in loop
for (var propertyName in shoppingCart) {
    var value = shoppingCart[propertyName];
    console.log(propertyName, value);
}