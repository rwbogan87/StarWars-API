// base url to build other fetches off of
url = 'https://swapi.co/api';
// variable to connect list to HTML
let swPeopleList = document.querySelector('.peopleList');
let swPlanetsList = document.querySelector('.planetsList');
let swStarshipsList = document.querySelector('.starshipsList');
let swSpeciesList = document.querySelector('.speciesList');

let swPeopleDetails = document.querySelector('.peopleDetails');
// clear button to erase list contents of specified List
function clearPeople() {
    document.querySelector('.peopleList').innerHTML="";
}
function clearPlanets() {
    document.querySelector('.planetsList').innerHTML="";
}
function clearStarships() {
    document.querySelector('.starshipsList').innerHTML="";
}
function clearSpecies() {
    document.querySelector('.speciesList').innerHTML="";
}

// People
peopleWrapper = () => {
fetch(url+'/people/?page='+1).then(function(response){
    return response.json()
    }).then(
        function(json) {
        console.log(json)
        let people = json.results;
        for (p of people) {
            let listItem = document.createElement('li');
            listItem.innerHTML = '<p><a href="#"><b>' + p.name + '</b></a></p>';
            swPeopleList.appendChild(listItem);
            // trying to parse url to fetch character info 
            // let charurl=p.url;
            // let listItem2 = document.createElement('li');
            // listItem2.innerHTML = '<p><a href="#"><b>' + p.url + '</b></a></p>';
            // swPeopleDetails.appendChild(listItem2);
            // return (charurl);
        }
        console.log(json.results[0].height)
        person = () => {
            document.querySelector('.peopleDetails').innerHTML="";
            for (p of people) {
            let listItem = document.createElement('li');
            let listItem2 = document.createElement('li');
            listItem.innerHTML = '<p>' + p.birth_year+ '</p>';
            listItem2.innerHTML = '<p>' + p.films + '</p>';
            swPeopleDetails.appendChild(listItem,listItem2);
            // console.log(json.results[0].height);
            }
        }
    })};
// attempts at displaying character details
    // for (x of luke) {
    // let listItem = document.createElement('li');
    //     listItem.innerHTML = '<a href="#">' +  + '</a>';
    //     swPeopleList.appendChild(listItem);
    // }

// detailsWrapper = () => {
// for (p of people) {
//     let listItem = document.createElement('li');
//     listItem.innerHTML = '<p>' + 
//     people[0]
//     + '</p>';
//     swPeopleDetails.appendChild(listItem);
// }
// end people

// Planets
planetsWrapper = () => {
    fetch(url+'/planets/').then(function(response){
    return response.json()
    }).then(
        function(json) {
        // console.log(json)
        let planets = json.results;

    for (p of planets) {
        let listItem = document.createElement('li');
        listItem.innerHTML = '<p><a href="#">' + p.name + '</a></p>';
        swPlanetsList.appendChild(listItem);
    }
})};
// end planets

// Starships
starshipsWrapper = () => {
    fetch(url+'/starships/').then(function(response){
    return response.json()
    }).then(
        function(json) {
        // console.log(json)
        let starships = json.results;

    for (p of starships) {
        let listItem = document.createElement('li');
        listItem.innerHTML = '<p><a href="#">' + p.name + '</a></p>';
        swStarshipsList.appendChild(listItem);
    }
})};
// end starships

// Species
speciesWrapper = () => {
    fetch(url+'/species/').then(function(response){
    return response.json()
    }).then(
        function(json) {
        // console.log(json)
        let species = json.results;
        
    for (p of species) {
        let listItem = document.createElement('li');
        listItem.innerHTML = '<p><a href="#">' + p.name + '</a></p>';
        swSpeciesList.appendChild(listItem);
    }
})};
// end species

