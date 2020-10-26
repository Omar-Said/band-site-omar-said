let showList = [{
    dateHeader: "DATE",
    date: "Mon Dec 17 2018",
    venueHeader: "VENUE",
    venue: "Ronald Lane",
    locHeader: 'LOCATION',
    location: "San Fancisco, CA"
},
{
    dateHeader: "DATE",
    date: "Tue Jul 18 2019",
    venueHeader: "VENUE",
    venue: "Pier 3 East",
    locHeader: 'LOCATION',
    location: "San Fancisco, CA"
},
{
    dateHeader: "DATE",
    date: "Fri Jul 22 2019",
    venueHeader: "VENUE",
    venue: "View Loungue",
    locHeader: 'LOCATION',
    location: "San Fancisco, CA"
},
{
    dateHeader: "DATE",
    date: "Sat Aug 12 2019",
    venueHeader: "VENUE",
    venue: "Hyatt Agency",
    locHeader: 'LOCATION',
    location: "San Fancisco, CA"
},
{
    dateHeader: "DATE",
    date: "Fri Sep 05 2019",
    venueHeader: "VENUE",
    venue: "Moscow Center",
    locHeader: 'LOCATION',
    location: "San Fancisco, CA"
},
{
    dateHeader: "DATE",
    date: "Wed Aug 11 2019",
    venueHeader: "VENUE",
    venue: "Pres Club",
    locHeader: 'LOCATION',
    location: "San Fancisco, CA"
},
]

window.addEventListener('load', publishShows(showList));

function publishShows(showList) {
    let showEl = document.querySelector('.shows__container');

    showEl.innerHTML = '';

    for (let i = 0; i < showList.length; i++) {
        displayShows(showList[i]);
    }
}

function displayShows(shows){
    
    let showEl = document.querySelector('.shows__container');

    let divEl = document.createElement('div');
    divEl.classList.add('shows__container-wrapper')

    let dateEL = document.createElement('p');
    dateEL.classList.add('shows__container-header');
    divEl.appendChild(dateEL);

    let date = document.createElement('p');
    date.classList.add('shows__container-info');
    divEl.appendChild(date);

    let venueEl = document.createElement('p');
    venueEl.classList.add('shows__container-header')
    divEl.appendChild(venueEl);

    let venue = document.createElement('p');
    venue.classList.add('shows__container-info')
    divEl.appendChild(venue);

    let locEl = document.createElement('p');
    locEl.classList.add('shows__container-header')
    divEl.appendChild(locEl);

    let location = document.createElement('p');
    location.classList.add('shows__container-info')
    divEl.appendChild(location);

    let submit = document.createElement('input');
    submit.classList.add('shows__container-button')
    submit.setAttribute('type', 'submit')
    submit.setAttribute('value', 'BUY TICKETS')
    divEl.appendChild(submit);

    dateEL.innerText = shows.dateHeader;
    date.innerText = shows.date;

    venueEl.innerText = shows.venueHeader;
    venue.innerText = shows.venue;

    locEl.innerText = shows.locHeader,
    location.innerText = shows.location;

    showEl.appendChild(divEl);

};



//  For future use

// let iframe = document.querySelector('.hero__container-right');

// let baby = document.createElement('iframe');
// baby.setAttribute('src', 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/893127532&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true');
// baby.classList.add('iframe');

// iframe.appendChild(baby);