// Fetch with timeout using Promise.race
function fetchWithTimeout(url, timeout = 2000) {
    const fetchPromise = fetch(url).then(res => res.json());

    const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Operation timed out!")), timeout)
    );

    return Promise.race([fetchPromise, timeoutPromise]);
}

// Testing the fetch with timeout
fetchWithTimeout("https://swapi.dev/api/people/1/", 1000)
    .then(data => console.log(`Fetched: ${data.name}`))
    .catch(error => console.error(`Error: ${error.message}`));
