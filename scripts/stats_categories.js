function getCategories(events) {
    function removeDuplicates(duplicated) {
        return duplicated.filter((item, index) => duplicated.indexOf(item) === index);
    }
    return removeDuplicates(events.map(event => event.category)).sort();
}

function filterByCategory(events, categoryToFilter) {
    return events.filter(event => event.category === categoryToFilter);
}