// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
 }
 
 function validateInput(testInput) {
    console.log(Number(testInput))
    if (typeof testInput === 'string' && testInput.length === 0){
        return `Empty`
    } else if (typeof Number(testInput) === 'number' && !isNaN(Number(testInput))) {
        return `Is a Number`
    } else if (isNaN(Number(testInput))) {
        return `Not a Number`
    }
    
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    if (validateInput(pilot) === 'Empty' || validateInput(pilot) !== 'Not a Number') {
        alert('Pilot name cannot be blank or a number!')
    } else if (validateInput(copilot) === 'Empty' || validateInput(copilot) !== 'Not a Number') {
        alert('Copilot name cannot be blank or a number!')
    } else if (validateInput(fuelLevel) === 'Empty' || validateInput(fuelLevel) !== 'Is a Number') {
        alert('Fuel Level must be a valid number!')
    } else if (validateInput(cargoLevel) === 'Empty' || validateInput(cargoLevel) !== 'Is a Number') {
        alert('Cargo Mass must be a valid number!')
    }

    console.log(document, list, pilot, copilot, fuelLevel, cargoLevel)
 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch().then( function(response) {
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;