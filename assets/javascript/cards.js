function createCard(event){
    let card = document.createElement("article");
    card.innerHTML =
        `<figure>
            <img src=${event.image} alt=${event.name}>
        </figure>
        <h2>${event.name}</h2>
        <p>${event.description}</p>
        <footer>
            <p class="price">$${event.price}</p>
            <a href="details.html">Ver más</a>
        </footer>`;
    return card;
}

function appendCard(card){
    let cardSection = document.getElementById("cards-section");
    cardSection.appendChild(card);
}

function renderCards(events) {
    events.forEach(event => appendCard(createCard(event)));
}