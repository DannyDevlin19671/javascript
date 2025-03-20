// Async/Await example
async function fetchCharacter() {
    try {
        const response = await fetch("https://swapi.dev/api/people/1/");
        const data = await response.json();
        console.log(`Character: ${data.name}`);
    } catch (error) {
        console.error(error);
    }
}

fetchCharacter();
