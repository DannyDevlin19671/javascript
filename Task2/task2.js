// Promise randomly resolves or rejects
const randomPromise = new Promise((resolve, reject) => {
    console.log("Waiting for Promise...");
    setTimeout(() => {
        if (Math.random() < 0.5) resolve("The Force is strong!");
        else reject("Disturbance in the Force!");
    }, 2000);
});

// Handling Promise
randomPromise
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => console.log("Promise finished!"));
