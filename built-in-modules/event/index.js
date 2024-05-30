const PizzaShop = require('./pizza-shop');
const DrinkMachine = require('./drink-machine');

const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine();

pizzaShop.on('order', (size, toppings) => {
    console.log(`Ordered a ${size}  pizza with ${toppings}`);
    drinkMachine.serveDrink(size);
});

pizzaShop.order('large', 'mushroom');
pizzaShop.displayOrderNumber();

// const EventEmitter = require('node:events');

// const emitter = new EventEmitter();

// emitter.on('order-pizza', (size, toppings) => {
//   console.log(`${size} pizza ordered with ${toppings} `);
// });

// emitter.on('order-pizza', (size) => {
//   size === 'large' && console.log(`getting a complimentary one too`);
// });

// console.log('Do the work before the event occurs');
// emitter.emit('order-pizza', 'large', 'mushroom');
