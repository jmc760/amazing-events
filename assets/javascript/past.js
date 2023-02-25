function printPastEvents(events) {
    for (let event of events) {
        let cardSection = document.getElementById("cards-section");
        let card = document.createElement("article");
        card.innerHTML =
            `<img class="badge" src="assets/img/leaves.svg" alt="Coming Soon Badge">
            <figure>
                <img src=${event.image} alt=${event.name}>
            </figure>
            <h2>${event.name}</h2>
            <p>${event.description}</p>
            <footer>
                <p class="price">$${event.price}</p>
                <a href="details.html" class="past">Ver más</a>
            </footer>`;
        cardSection.appendChild(card);
    }
}

let referenceDate = getNumberDate(data.currentDate);
let arrPastEvents = [];

for (let event of data.events) {
    if (getNumberDate(event.date) < referenceDate) {
        arrPastEvents.push(event);
    }
}

printPastEvents(arrPastEvents);
