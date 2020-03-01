const jeep = {
brand: 'Jeep Wrangler',
price: 34000,
description: function() {
    console.log(`The ${this.brand} is $ ${this.price}`)
}
}

console.log('The ' + jeep['brand'] + ' is $' + jeep['price'])