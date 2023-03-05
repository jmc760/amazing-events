function createDetailCard(event){
    let card = document.createElement("article");
    card.innerHTML =
        `<figure>
            <img src="${event.image}" alt="${event.name}">
        </figure>
        <div>
            <h2>${event.name}</h2>
            <div>
                <p class="description">Date:</p><p>${event.date}</p>
                <p class="description">Description:</p><p>${event.description}</p>
                <p class="description">Category:</p><p>${event.category}</p>
                <p class="description">Place:</p><p>${event.place}</p>
                <p class="description">Capacity:</p><p>${event.capacity}</p>
                <p class="description">Price:</p><p>$${event.price}</p>
            </div>
        </div>`;
    return card;
}

function appendDetailCard(card){
    let cardSection = document.getElementById("card-section");
    cardSection.appendChild(card);
}

function findEventById(events, id){
    let eventFound = events.find(event => event._id === id);
    return eventFound;
}

let params = new URLSearchParams(location.search);

let id_query = parseInt(params.get("id"));

appendDetailCard(createDetailCard(findEventById(data.events, id_query)));

