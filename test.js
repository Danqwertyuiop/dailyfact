function fetchFact() {
    fetch("/api/fact") // Ensure this matches the API route
        .then(response => response.json())
        .then(data => {
            document.getElementById("randomText").innerText = data.fact;
        })
        .catch(error => console.error("Error fetching fact:", error));
}

// Fetch a new fact every second
setInterval(fetchFact, 1000);

// Fetch one fact immediately on page load
fetchFact();
