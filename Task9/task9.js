// Fetch Star Wars character details with async/await
async function getStarWarsCharacter() {
    try {
        const response = await fetch("https://swapi.dev/api/people/1/");
        const character = await response.json();
        console.log(character); // full character object
    } catch (error) {
        console.error(error);
    }
}

getStarWarsCharacter();