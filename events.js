const EventEmitter = require("events"); // events is a built-in module available in node.js

const http = require("http"); // http is a built-in module available in node.js

/* The above EventEmitters can emit named events and we can subscribe to these events. So basically listen to them  and then 
 react accordingly */

class Sales extends EventEmitter {
  constructor() {
    super();
  }
}

const myEmitter = new Sales(); // We are creating a instance of Sales class

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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request received!");
  console.log(req.url);
  res.end("Request received");
});

server.on("request", (req, res) => {
  console.log("Another Request received");
});

server.on("close", () => {
  console.log("Server closed");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Waiting for requests...");
});
