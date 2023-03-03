function renderCards(events) {
    events.forEach(event => appendCard(createCard(event)));
}

renderCards(data.events);

