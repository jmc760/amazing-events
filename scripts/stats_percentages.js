function getCapacities(events) {
    return events.map(event => event.capacity);
}

function getCapacitiesTotal(events, category) {
    return sum(getCapacities(filterByCategory(events, category)))
}

function getAttendance(events) {
    return events.map(event => {
        if (Object.keys(event).includes("estimate")) {
            return event.estimate;
        } else if (Object.keys(event).includes("assistance")) {
            return event.assistance;
        }
    })
}

function getAttendanceTotal(events, category) {
    return sum(getAttendance(filterByCategory(events, category)))
}

function getPercentage(capacityTotal, attendanceTotal) {
    return ((attendanceTotal * 100) / capacityTotal);
}

function printPercentage(events, category) {
    return Math.round(
        getPercentage(getCapacitiesTotal(events, category), getAttendanceTotal(events, category)));
}
