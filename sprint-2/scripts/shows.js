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

// DOM appending function

function displayShows(shows){

    let showEl = document.querySelector('.shows__container');
        
        let divEl = document.createElement('div');
        divEl.classList.add('shows__container-wrapper')

        let dateEL = document.createElement('p');
        dateEL.classList.add('shows__header');
        dateEL.innerHTML = "DATE";
        divEl.appendChild(dateEL);

        let date = document.createElement('p');
        date.classList.add('shows__info');
        divEl.appendChild(date);

        let venueEl = document.createElement('p');
        venueEl.classList.add('shows__header')
        venueEl.innerHTML = "VENUE";
        divEl.appendChild(venueEl);

        let venue = document.createElement('p');
        venue.classList.add('shows__info')
        divEl.appendChild(venue);

        let locEl = document.createElement('p');
        locEl.classList.add('shows__header')
        locEl.innerHTML = "LOCATION"
        divEl.appendChild(locEl);

        let location = document.createElement('p');
        location.classList.add('shows__info')
        divEl.appendChild(location);

        let submit = document.createElement('input');
        submit.classList.add('shows__button')
        submit.setAttribute('type', 'submit')
        submit.setAttribute('value', 'BUY TICKETS')
        divEl.appendChild(submit);

        date.innerText = shows.date;
        venue.innerText = shows.place;
        location.innerText = shows.location;

        showEl.appendChild(divEl);
 }