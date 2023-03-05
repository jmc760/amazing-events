function createDetailCard(event){
    let card = document.createElement("article");
    card.innerHTML =
        `<figure>
            <img src="${event.image}" alt="${event.name}">
        </figure>
        <div>
            <h2>${event.name}</h2>
            <div>
                <p>Date:</p><p>${event.date}</p>
                <p>Description:</p><p>${event.description}</p>
                <p>Category:</p><p>${event.category}</p>
                <p>Place:</p><p>${event.place}</p>
                <p>Capacity:</p><p>${event.capacity}</p>
                <p>Price:</p><p>${event.price}</p>
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

let query = location.search;

let params = new URLSearchParams(query);

let id_query = parseInt(params.get("id"));

appendDetailCard(createDetailCard(findEventById(data.events, id_query)));

