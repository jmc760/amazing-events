function filterFuture(events, referenceDate) {
    let futureEvents = events.filter(event => getNumberDate(event.date) > referenceDate);
    return futureEvents;
}

function addFutureBadge(card){
    card.innerHTML += `<img class="badge" src="assets/img/badge.svg" alt="Coming Soon Badge">`;
    return card;
}

function renderFutureCards(events) {
    events.forEach(event => appendCard(addFutureBadge(createCard(event))));
}

renderFutureCards(filterFuture(data.events, getNumberDate(data.currentDate)));