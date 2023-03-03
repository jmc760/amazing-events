/* function printFutureEvents(events) {
    for (let event of events) {
        let cardSection = document.getElementById("cards-section");
        let card = document.createElement("article");
        card.innerHTML =
            `<img class="badge" src="assets/img/badge.svg" alt="Coming Soon Badge">
            <figure>
                <img src=${event.image} alt=${event.name}>
            </figure>
            <h2>${event.name}</h2>
            <p>${event.description}</p>
            <footer>
                <p class="price">$${event.price}</p>
                <a href="details.html" class="upcoming">Ver más</a>
            </footer>`;
        cardSection.appendChild(card);
    }
} */

function filterFuture(events, referenceDate) {
    let futureEvents = events.filter(event => getNumberDate(event.date) > referenceDate);
    return futureEvents;
}

renderCards(filterFuture(data.events, getNumberDate(data.currentDate)));