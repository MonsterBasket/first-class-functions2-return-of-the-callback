function returnFirstTwoDrivers(array){
    return array.slice(0,2);
}
function returnLastTwoDrivers(array){
    return array.slice(array.length-2);
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fare){
    return (multiplier) => fare * multiplier;
}
function fareDoubler(fare){
    return createFareMultiplier(fare)(2);
}
// function fareTripler(fare){
//     return createFareMultiplier(fare)(3);
// }
const fareTripler = (fare) => createFareMultiplier(fare)(3); 
//Is this still a const?  Or is it now just a function?  Is there a difference?

function selectDifferentDrivers(array, func){
    return func(array);
}