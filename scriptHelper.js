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
    } else {
        // console.log(list, pilot, copilot, fuelLevel, cargoLevel)
        const faultyItems = document.getElementById('faultyItems')
        const launchStatus = document.getElementById('launchStatus')
        const pilotStatus = document.getElementById('pilotStatus')
        const copilotStatus = document.getElementById('copilotStatus')
        const fuelStatus = document.getElementById('fuelStatus')
        const cargoStatus = document.getElementById('cargoStatus')
        
        faultyItems.setAttribute('style', 'visibility: visible')
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`

        let fuelCheck = false;
        let cargoCheck = false;

        if (Number(fuelLevel) < 10000) {
            fuelStatus.innerHTML = `Fuel level too low for launch`
            fuelCheck = false;
        } else if (Number(fuelLevel) >= 10000) {
            fuelStatus.innerHTML = `Fuel level high enough for launch`
            fuelCheck = true;
        }

        if (Number(cargoLevel) > 10000) {
            cargoStatus.innerHTML = `Cargo mass too heavy for launch`
            cargoCheck = false;
        } else if (Number(cargoLevel) <= 10000) {
            cargoStatus.innerHTML = `Cargo mass low enough for launch`
            cargoCheck = true;
        }

        if (!fuelCheck || !cargoCheck) {
            launchStatus.innerHTML = `Shuttle Not Ready for Launch`
            launchStatus.setAttribute('style','color: red')
        } else if (fuelCheck && cargoCheck) {
            launchStatus.innerHTML = `Shuttle is Ready for Launch`
            launchStatus.setAttribute('style','color: green')
        }
    }
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