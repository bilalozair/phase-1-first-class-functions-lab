// Code your solution in this file!
// let driverNames =['Antonia', 'Nuru', 'Amari', 'Mo'];
// test = [...driverNames]

const returnFirstTwoDrivers = function (driverNames) {
     return driverNames.slice(0,2);
}
const returnLastTwoDrivers = function(driverNames) {
    return driverNames.slice(-2);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier (multiplier) {
    return function (fare) {
        return multiplier*fare;
    }
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
function selectDifferentDrivers(driverNames,returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(driverNames);
}