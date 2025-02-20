async function fetchFact() {
    try {
        const response = await fetch("http://localhost:3000/fact");
        const data = await response.json();
        document.getElementById("randomText").innerText = data.fact;
    } catch (error) {
        console.error("Error fetching fact:", error);
        document.getElementById("randomText").innerText = "Failed to load fact.";
    }
}

// Fetch fact on page load
fetchFact();

// Update fact every 60 seconds (60000 ms)
setInterval(fetchFact, 60000);
