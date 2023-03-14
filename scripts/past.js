async function pastCaptureData() {
    try {
        let text = {
            search: document.getElementById("search").value,
            lowerCase: document.getElementById("search").value.toLowerCase()
        }
        let checks = Array.from(document.querySelectorAll(".checks:checked")).map(category => category.id);

        url = "https://api-amazingevents.onrender.com/api/amazing-events?time=past";
        fetchResponse = await fetch(url);
        response = await fetchResponse.json();

        let capturedData = response.events.filter(event => {
            return (event.name.includes(text.search) ||
                (event.name.toLowerCase()).includes(text.lowerCase))
                && (checks.length === 0 || checks.includes(event.category))
        })

        if (capturedData.length > 0) {
            renderCards("past", "#cards-section", capturedData);
        } else {
            notFound("#cards-section");
        }
    } catch (error) {
        console.log("Sorry, an error has ocurred.");
    }
}

async function pastFetchApi() {
    try {
        url = "https://api-amazingevents.onrender.com/api/amazing-events?time=past";
        fetchResponse = await fetch(url);
        response = await fetchResponse.json();
        renderCards("past", "#cards-section", response.events);
    } catch (error) {
        console.log("Sorry, an error has ocurred.");
    }
}

pastFetchApi();


