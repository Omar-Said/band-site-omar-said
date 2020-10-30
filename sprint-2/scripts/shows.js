
// API get request API authorization key

axios.get('https://project-1-api.herokuapp.com/register')
    .then((response) => {

        let apiKey = response;

    }).catch((error) => {

        console.error(error);
        
    })

// API authorization key

let apiKeyAuth = "?api_key=ecb2eb23-84b4-4049-a3b3-5ac139a4c86f"; 

//  API get request for Band's show list

axios.get('https://project-1-api.herokuapp.com/showdates/' + apiKeyAuth) 
    .then ((response) => {

        showListArr = response.data;

        publishShows(showListArr)

    }).catch((error) => {

         console.log(error);

    })

// API Iterator

function publishShows(showListArr) {
    let commentContainer = document.querySelector('.commented__container');

    showListArr.forEach((element, i) => {
        displayShows(showListArr[i]);
    });
}

// For each function to append DOM with show times

function displayShows(shows){

    let showEl = document.querySelector('.shows__container');
        
        let divEl = document.createElement('div');
        divEl.classList.add('shows__container-wrapper')

        let dateEL = document.createElement('p');
        dateEL.classList.add('shows__container-header');
        dateEL.innerHTML = "DATE";
        divEl.appendChild(dateEL);

        let date = document.createElement('p');
        date.classList.add('shows__container-info');
        divEl.appendChild(date);

        let venueEl = document.createElement('p');
        venueEl.classList.add('shows__container-header')
        venueEl.innerHTML = "VENUE";
        divEl.appendChild(venueEl);

        let venue = document.createElement('p');
        venue.classList.add('shows__container-info')
        divEl.appendChild(venue);

        let locEl = document.createElement('p');
        locEl.classList.add('shows__container-header')
        locEl.innerHTML = "LOCATION"
        divEl.appendChild(locEl);

        let location = document.createElement('p');
        location.classList.add('shows__container-info')
        divEl.appendChild(location);

        let submit = document.createElement('input');
        submit.classList.add('shows__container-button')
        submit.setAttribute('type', 'submit')
        submit.setAttribute('value', 'BUY TICKETS')
        divEl.appendChild(submit);

        date.innerText = shows.date;
        venue.innerText = shows.place;
        location.innerText = shows.location;

        showEl.appendChild(divEl);
 }





    
//  Previous code for reference

// let showList = [{
//     dateHeader: "DATE",
//     date: "Mon Dec 17 2018",
//     venueHeader: "VENUE",
//     venue: "Ronald Lane",
//     locHeader: 'LOCATION',
//     location: "San Fancisco, CA"
// },
// {
//     dateHeader: "DATE",
//     date: "Tue Jul 18 2019",
//     venueHeader: "VENUE",
//     venue: "Pier 3 East",
//     locHeader: 'LOCATION',
//     location: "San Fancisco, CA"
// },
// {
//     dateHeader: "DATE",
//     date: "Fri Jul 22 2019",
//     venueHeader: "VENUE",
//     venue: "View Loungue",
//     locHeader: 'LOCATION',
//     location: "San Fancisco, CA"
// },
// {
//     dateHeader: "DATE",
//     date: "Sat Aug 12 2019",
//     venueHeader: "VENUE",
//     venue: "Hyatt Agency",
//     locHeader: 'LOCATION',
//     location: "San Fancisco, CA"
// },
// {
//     dateHeader: "DATE",
//     date: "Fri Sep 05 2019",
//     venueHeader: "VENUE",
//     venue: "Moscow Center",
//     locHeader: 'LOCATION',
//     location: "San Fancisco, CA"
// },
// {
//     dateHeader: "DATE",
//     date: "Wed Aug 11 2019",
//     venueHeader: "VENUE",
//     venue: "Pres Club",
//     locHeader: 'LOCATION',
//     location: "San Fancisco, CA"
// },
// ]

// window.addEventListener('load', publishShows(showList));

// function publishShows(showList) {
//     let showEl = document.querySelector('.shows__container');

//     showEl.innerHTML = '';

//     for (let i = 0; i < showList.length; i++) {
//         displayShows(showList[i]);
//     }
// }

// function displayShows(shows){
    
//     let showEl = document.querySelector('.shows__container');

//     let divEl = document.createElement('div');
//     divEl.classList.add('shows__container-wrapper')

//     let dateEL = document.createElement('p');
//     dateEL.classList.add('shows__container-header');
//     divEl.appendChild(dateEL);

//     let date = document.createElement('p');
//     date.classList.add('shows__container-info');
//     divEl.appendChild(date);

//     let venueEl = document.createElement('p');
//     venueEl.classList.add('shows__container-header')
//     divEl.appendChild(venueEl);

//     let venue = document.createElement('p');
//     venue.classList.add('shows__container-info')
//     divEl.appendChild(venue);

//     let locEl = document.createElement('p');
//     locEl.classList.add('shows__container-header')
//     divEl.appendChild(locEl);

//     let location = document.createElement('p');
//     location.classList.add('shows__container-info')
//     divEl.appendChild(location);

//     let submit = document.createElement('input');
//     submit.classList.add('shows__container-button')
//     submit.setAttribute('type', 'submit')
//     submit.setAttribute('value', 'BUY TICKETS')
//     divEl.appendChild(submit);

//     dateEL.innerText = shows.dateHeader;
//     date.innerText = shows.date;

//     venueEl.innerText = shows.venueHeader;
//     venue.innerText = shows.venue;

//     locEl.innerText = shows.locHeader,
//     location.innerText = shows.location;

//     showEl.appendChild(divEl);

// };