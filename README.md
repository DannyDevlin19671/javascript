# JavaScript Promises and Async/Await Tasks

This set of tasks will guide you through JavaScript's Promises, `async/await`, and handling `resolve` and `reject`. You'll use the Star Wars API (SWAPI) for practical, real-world scenarios.

## Objectives:
- Create and handle Promises (`.then()`, `.catch()`, `.finally()`)
- Use `async/await` for cleaner asynchronous code
- Practice robust error handling

---

## Tasks:

### Task 1: Basic Promise Creation
Create a Promise that resolves after 2 seconds with the message:

```
"Luke Skywalker is ready!"
```

Use `.then()` to log the message.

---

### Task 2: Handling Rejection
Create a Promise that randomly resolves or rejects after 2 seconds.

- Resolve message: `"The Force is strong!"`
- Reject message: `"Disturbance in the Force!"`

Use `.then()`, `.catch()`, and `.finally()` to handle both outcomes.

---

### Task 3: Convert Callback to Promise
Convert the following callback function to a Promise:

```javascript
function fetchCharacter(callback) {
  fetch("https://swapi.dev/api/people/1/")
    .then(res => res.json())
    .then(data => callback(null, data.name))
    .catch(err => callback(err, null));
}
```

Consume the Promise with `.then()` and `.catch()`.

---

### Task 4: Async/Await Basics
Refactor Task 3's solution to use `async/await`. Include error handling with `try-catch`.

---

### Task 5: Chaining Promises
Fetch a Star Wars character, their home planet, and the first film they appeared in, using Promise chaining (`.then()` and `.catch()`).

Log:
- Character name
- Home planet name
- First film title

---

### Task 6: Promise.all()
Fetch three characters concurrently using `Promise.all()`:
- Luke Skywalker (id: 1)
- C-3PO (id: 2)
- R2-D2 (id: 3)

Log each character's name.

---

### Task 7: Error Handling with Promise.all()
Repeat Task 6 but intentionally cause one request to fail. Handle the error gracefully and log a meaningful message.

---

### Task 8: Implement Timeout with Promise.race()
Fetch a character with a 2-second timeout. If the fetch takes too long, reject with the message: `"Operation timed out!"`

Handle success and timeout scenarios.

---

### Task 9: Real-world Async/Await
Use `async/await` to fetch detailed information of Luke Skywalker from:
```
https://swapi.dev/api/people/1/
```
Log the full JSON response.

---

### Task 10: Advanced Async/Await
Fetch details concurrently for three characters (ids: 1, 2, 3) using `async/await` and `Promise.all()`. Log an array containing details of each character.

---
Good luck, and may the Force be with you!