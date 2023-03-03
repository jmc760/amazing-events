function filterPast(events, referenceDate) {
    let pastEvents = events.filter(event => getNumberDate(event.date) < referenceDate);
    return pastEvents;
}

function addPastBadge(card){
    card.innerHTML += `<img class="badge" src="assets/img/leaves.svg" alt="Past Event Badge">`;
    return card;
}

function renderPastCards(events) {
    events.forEach(event => appendCard(addPastBadge(createCard(event))));
}

renderPastCards(filterPast(data.events, getNumberDate(data.currentDate)));
