// Write your JavaScript code here!

// const { pickPlanet } = require("./scriptHelper");
// const { myFetch } = require("./scriptHelper");
// const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {

    const form = document.querySelector('form')

    form.addEventListener('submit', function() {
        event.preventDefault()

        let list;
        const pilotInput = document.querySelector('input[name=pilotName]')
        const pilot = pilotInput.value;
        const copilotInput = document.querySelector('input[name=copilotName');
        const copilot = copilotInput.value;
        const fuelLevelInput = document.querySelector('input[name=fuelLevel');
        const fuelLevel = fuelLevelInput.value;
        const cargoLevelInput = document.querySelector('input[name=cargoMass');
        const cargoLevel = cargoLevelInput.value;

        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel)
    })

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        // console.log(listedPlanets);
    }).then(function () {
        // console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let selectedPlanet = pickPlanet(listedPlanets)
        // console.log(selectedPlanet)
        addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.image)
    })

    
 });