async function statsFetchApi() {
    try {
        /*Table 1*/
        let url = "https://api-amazingevents.onrender.com/api/amazing-events";
        let fetchResponse = await fetch(url);
        let responseApi = await fetchResponse.json();
        printEventStatistics(responseApi.events, "tbody1");

        /*Table 2*/
        let futureUrl = "https://api-amazingevents.onrender.com/api/amazing-events?time=upcoming";
        let futureFetchResponse = await fetch(futureUrl);
        let futureResponseApi = await futureFetchResponse.json();
        printStatsByCategory(futureResponseApi.events, "tbody2");

        /*Table 3*/
        let pastUrl = "https://api-amazingevents.onrender.com/api/amazing-events?time=past";
        let pastFetchResponse = await fetch(pastUrl);
        let pastResponseApi = await pastFetchResponse.json();
        printStatsByCategory(pastResponseApi.events, "tbody3");
    } catch (error) {
        console.log("Sorry, an error has ocurred.");
        console.log(error)
    }
}

statsFetchApi();