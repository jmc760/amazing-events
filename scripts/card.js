function templateCard(time, event) {

    /*Adds badge to past or future events*/
    let badge = {
        src: "",
        alt: "",
        class: "none"
    }

    if (time === "past") {
        badge.src = "assets/img/leaves.svg";
        badge.alt = "Past Event Badge";
        badge.class = "badge";
    } else if (time === "future") {
        badge.src = "assets/img/badge.svg";
        badge.alt = "Coming Soon Badge";
        badge.class = "badge";
    }

    /*Creates card*/
    let card = 
        `<article class="card">
            <img class="${badge.class}" src=${badge.src} alt=${badge.alt}>
            <figure>
                <img src=${event.image} alt=${event.name}>
            </figure>
            <h2>${event.name}</h2>
            <p>${event.description}</p>
            <footer>
                <p class="price">$${event.price}</p>
                <a href="details.html?id=${event._id}">Ver más</a>
            </footer>
        </article>`;

    return card;
}

function renderCards(time, idContainer, eventsArray) {
    let container = document.querySelector(idContainer);
    arrayToPrint = eventsArray.map(event => templateCard(time, event));
    container.innerHTML = arrayToPrint.join("");
}

function notFound(idContainer){
    let card = 
        `<article class="notFound">
            <h2>Not found</h2>
            <p>:(</p>
        </article>`;
    let container = document.querySelector(idContainer);
    container.innerHTML = card;
    return card;
}