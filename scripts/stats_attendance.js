function getHighestAttendance(events) {
    return (events.sort((a, b) =>
        ((b.assistance * 100) / b.capacity) - ((a.assistance * 100) / a.capacity)
    ))[0].name;
}

function getLowestAttendance(events) {
    return (events.sort((a, b) =>
        ((a.assistance * 100) / a.capacity) - ((b.assistance * 100) / b.capacity)
    ))[0].name;
}

function getLargestCapacity(events) {
    return (events.sort((a, b) => b.capacity - a.capacity))[0].name;
}