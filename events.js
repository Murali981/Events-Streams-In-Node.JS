const EventEmitter = require("events"); // events is a built-in module available in node.js

const myEmitter = new EventEmitter(); // We are creating a instance of EventEmitter class

/* The above EventEmitters can emit named events and we can subscribe to these events. So basically listen to them  and then 
 react accordingly */

class Sales extends EventEmitter {
  constructor() {
    super();
  }
}

myEmitter.on("newSale", () => {
  console.log("There was a new sale!");
});

myEmitter.on("newSale", () => {
  console.log("Costumer name: Jonas");
});

myEmitter.on("newSale", (stock) => {
  console.log(`There are now ${stock} items left in stock.`);
}); // Once the myEmitter emits a newSale event then this myEmitter.on("newSale", () => {}) will pick up this event with number
// 9 as an argument to this callback function

myEmitter.emit("newSale", 9); // We have emitted this newSale event with stock of 9
