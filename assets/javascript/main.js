function addZeroToMonth(dateWithoutZero) {
    let dateWithZero =
        dateWithoutZero.substring(0, 5) + "0" +
        dateWithoutZero.substring(5, dateWithoutZero.length);
    return dateWithZero;
}

function correctMonthDate(dateToCorrect) {
    let monthDateCorrected;
    if (dateToCorrect.charAt(6) == "-") {
        monthDateCorrected = addZeroToMonth(dateToCorrect);
    } else {
        monthDateCorrected = dateToCorrect;
    }
    return monthDateCorrected;
}

function removeDash(dashedDate) {
    let undashedDate =
        dashedDate.slice(0,4)+
        dashedDate.slice(5,7)+
        dashedDate.slice(8,10);
    return undashedDate;
}

function getNumberDate(date){
    let numberDate = parseInt(
        removeDash(correctMonthDate(date))
    )
    return numberDate;
}

let referenceDate = getNumberDate(data.currentDate);
console.log(referenceDate);

let arrPastEvents=[];
let arrFutureEvents=[];
for(let event of data.events){
    if(getNumberDate(event.date)<referenceDate){
        arrPastEvents.push(event);
    } else if(getNumberDate(event.date)>referenceDate){
        arrFutureEvents.push(event);
    }
}
console.log(arrPastEvents);
console.log(arrFutureEvents);