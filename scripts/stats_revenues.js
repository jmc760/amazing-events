function getRevenues(events) {
    if (Object.keys(events[0]).includes("assistance")) {
        return events.map(event => event.price * event.assistance);
    } else if (Object.keys(events[0]).includes("estimate")) {
        return events.map(event => event.price * event.estimate);
    }
}

function sum(array) {
    return array.reduce((acc, act) => acc + act, 0);
}

function printRevenue(events, category) {
    return sum(getRevenues((filterByCategory(events, category))));
}