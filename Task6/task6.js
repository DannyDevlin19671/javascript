// Concurrent fetch requests
const urls = [
    "https://swapi.dev/api/people/1/",
    "https://swapi.dev/api/people/2/",
    "https://swapi.dev/api/people/3/"
];

Promise.all(urls.map(url => {
    fetch(url)
        .then(res => res.json())
    }))
    .then(results => results.forEach(character => console.log(character.name)))
    .catch(error => console.error(error));
