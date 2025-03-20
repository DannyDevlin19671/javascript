// Chained promise calls to SWAPI
fetch("https://swapi.dev/api/people/1/")
    .then(response => response.json())
    .then(data => {
        console.log(`Character: ${data.name}`);
        return fetch(data.homeworld);
    })
    .then(response => response.json())
    .then(planet => {
        console.log(`Home Planet: ${planet.name}`);
        return fetch(planet.films[0]);
    })
    .then(response => response.json())
    .then(film => console.log(`First film appearance: ${film.title}`))
    .catch(error => console.error(error));
