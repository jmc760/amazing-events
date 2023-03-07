function filterFuture(events, referenceDate) {
    let futureEvents = events.filter(event => getNumberDate(event.date) > referenceDate);
    return futureEvents;
}

function futureCaptureData() {
    let text = {
        search: document.getElementById("search").value,
        lowerCase: document.getElementById("search").value.toLowerCase(),
        upperCase: document.getElementById("search").value.toUpperCase()
    }
    let checks = Array.from(document.querySelectorAll(".checks:checked")).map(category => category.id);
    let futureEvents = filterFuture(data.events, getNumberDate(data.currentDate));

    let capturedData = futureEvents.filter(event => {
        return (event.name.includes(text.search) ||
            (event.name.toLowerCase()).includes(text.lowerCase) ||
            (event.name.toUpperCase()).includes(text.upperCase))
            && (checks.length === 0 || checks.includes(event.category))
    })

    if (capturedData.length > 0) {
        renderCards("future", "#cards-section", capturedData);
    } else {
        notFound("#cards-section");
    }
}

let futureEvents = filterFuture(data.events, getNumberDate(data.currentDate));

renderCards("future", "#cards-section", futureEvents);