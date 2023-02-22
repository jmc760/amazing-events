let cardSection = document.getElementById("cards-section");

for(let event of data.events) {
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
    cardSection.appendChild(card);
};