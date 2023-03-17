function printEventStatistics(events, idContainer) {
    let row = document.createElement("tr");
    row.innerHTML =
        `<td>${getHighestAttendance(events)}</td>
        <td>${getLowestAttendance(events)}</td>
        <td>${getLargestCapacity(events)}</td>`;
    let container = document.getElementById(idContainer);
    container.appendChild(row);
}

function printStatsByCategory(events, idContainer) {
    getCategories(events).forEach(category => {
        let row = document.createElement("tr");
        row.innerHTML =
            `<td>${category}</td>
            <td>$${printRevenue(events, category)}</td>
            <td>${printPercentage(events, category)}%</td>`;
        let container = document.getElementById(idContainer);
        container.appendChild(row);
    })
}