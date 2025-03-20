// Intentional error in one promise
const urls = [
    "https://swapi.dev/api/people/1/",
    "https://swapi.dev/api/INVALID_URL", // This will cause an error
    "https://swapi.dev/api/people/3/"
];

Promise.all(urls.map(url => fetch(url).then(res => {
    if (!res.ok) throw new Error(`Failed to fetch ${url}`);
    return res.json();
})))
    .then(results => results.forEach(character => console.log(character.name)))
    .catch(error => console.error(`Error: ${error.message}`));