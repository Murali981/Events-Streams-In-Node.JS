const fs = require("fs");

const crypto = require("crypto");

const start = Date.now();

process.env.UV_THREADPOOL_SIZE = 1;

setTimeout(() => console.log("Timer 1 has finished"), 0); // This timer will expire after zero seconds.

setImmediate(() => console.log("Immediate 1 has finished")); // This timer will run immediately.

fs.readFile("test-file.txt", () => {
  // Below all functions are in event loop.
  console.log("I/O finished");
  console.log(
    "----------------------------------------------------------------"
  );
  setTimeout(() => console.log("Timer 2 has finished"), 0); // This timer will expire after zero seconds.
  setTimeout(() => console.log("Timer 3 has finished"), 3000); // This timer will expire after zero seconds.
  setImmediate(() => console.log("Immediate 2 has finished")); // This timer will run immediately.

  process.nextTick(() => console.log("Process.nextTick"));

  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password encrypted");
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password encrypted");
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password encrypted");
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password encrypted");
  });
});

console.log("Hello from the top-level code");
