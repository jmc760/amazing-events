/* function createPastCard(event) {
    let pastCard = document.createElement("article");
    pastCard.innerHTML =
        `<img class="badge" src="assets/img/leaves.svg" alt="Past Event Badge">
        <figure>
            <img src=${event.image} alt=${event.name}>
        </figure>
        <h2>${event.name}</h2>
        <p>${event.description}</p>
        <footer>
            <p class="price">$${event.price}</p>
            <a href="details.html" class="past">Ver más</a>
        </footer>`;
    return pastCard;
} */

function filterPast(events, referenceDate) {
    let pastEvents = events.filter(event => getNumberDate(event.date) < referenceDate);
    return pastEvents;
}

renderCards(filterPast(data.events, getNumberDate(data.currentDate)));
