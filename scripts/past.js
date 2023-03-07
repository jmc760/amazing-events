function filterPast(events, referenceDate) {
    let pastEvents = events.filter(event => getNumberDate(event.date) < referenceDate);
    return pastEvents;
}

function pastCaptureData() {
    let text = {
        search: document.getElementById("search").value,
        lowerCase: document.getElementById("search").value.toLowerCase(),
        upperCase: document.getElementById("search").value.toUpperCase()
    }
    let checks = Array.from(document.querySelectorAll(".checks:checked")).map(category => category.id);
    let pastEvents = filterPast(data.events, getNumberDate(data.currentDate));

    let capturedData = pastEvents.filter(event => {
        return (event.name.includes(text.search) ||
            (event.name.toLowerCase()).includes(text.lowerCase) ||
            (event.name.toUpperCase()).includes(text.upperCase))
            && (checks.length === 0 || checks.includes(event.category))
    })

    console.log(capturedData);

    if (capturedData.length > 0) {
        renderCards("past", "#cards-section", capturedData);
    } else {
        notFound("#cards-section");
    }
}

let pastEvents = filterPast(data.events, getNumberDate(data.currentDate));

renderCards("past", "#cards-section", pastEvents);
