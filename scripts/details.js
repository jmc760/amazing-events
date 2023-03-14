async function detailsFetchApi() {
    try {
        function createDetailCard(event) {
            let card = document.createElement("article");
            card.innerHTML =
                `<figure>
                    <img src="${event.response.image}" alt="${event.response.name}">
                </figure>
                <div>
                    <h2>${event.response.name}</h2>
                    <div>
                        <p class="description">Date:</p><p>${event.response.date}</p>
                        <p class="description">Description:</p><p>${event.response.description}</p>
                        <p class="description">Category:</p><p>${event.response.category}</p>
                        <p class="description">Place:</p><p>${event.response.place}</p>
                        <p class="description">Capacity:</p><p>${event.response.capacity}</p>
                        <p class="description">Assistance:</p><p>${event.response.assistance}</p>
                        <p class="description">Price:</p><p>$${event.response.price}</p>
                    </div>
                </div>`;
            return card;
        }

        function appendDetailCard(card) {
            let cardSection = document.getElementById("card-section");
            cardSection.appendChild(card);
        }

        let params = new URLSearchParams(location.search);
        let id_query = params.get("id");

        url = "https://api-amazingevents.onrender.com/api/amazing-events/"+id_query;
        fetchResponse = await fetch(url);
        responseApi = await fetchResponse.json();

        function cleanDate(){
            responseApi.response.date = responseApi.response.date.substring(0,10);
        }

        cleanDate();
        appendDetailCard(createDetailCard(responseApi));
    } catch (error) {
        console.log("Sorry, an error has ocurred.");
    }
}

detailsFetchApi();