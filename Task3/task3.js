// Original callback function
function getStarWarsCharacter(callback) {
    fetch("https://swapi.dev/api/people/1/")
        .then(response => response.json())
        .then(data => callback(null, data.name))
        .catch(error => callback(error, null));
}

// Converted to Promise
function getCharacterPromise() {
    return new Promise((resolve, reject) => {
        fetch("https://swapi.dev/api/people/1/")
            .then(response => response.json())
            .then(data => resolve(data.name))
            .catch(error => reject(error));
    });
}

// Consuming the promise
getCharacterPromise()
    .then(name => console.log(`Character: ${name}`))
    .catch(error => console.error(error));
