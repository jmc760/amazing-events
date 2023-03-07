function captureData() {
    let text = {
        search: document.getElementById("search").value,
        lowerCase: document.getElementById("search").value.toLowerCase(),
        upperCase: document.getElementById("search").value.toUpperCase()
    }

    let checks = Array.from(document.querySelectorAll(".checks:checked")).map(category => category.id);

    let capturedData = data.events.filter(event => {
        return (event.name.includes(text.search) ||
            (event.name.toLowerCase()).includes(text.lowerCase) ||
            (event.name.toUpperCase()).includes(text.upperCase))
            && (checks.length === 0 || checks.includes(event.category))
    })

    console.log(capturedData)

    if (capturedData.length > 0) {
        renderCards("", "#cards-section", capturedData);
    } else {
        notFound("#cards-section");
    }
}

renderCards("", "#cards-section", data.events);
