// Creating a simple promise
const simplePromise = new Promise((resolve, reject) => {
console.log("Waiting for Promise...");
setTimeout(() => resolve("Luke Skywalker is ready!"), 2000);
});

// Consuming the promise
simplePromise
.then(result => console.log(result))
.catch(error => console.error(error));
