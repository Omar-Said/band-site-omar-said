// API key

let apiKeyAuth = "?api_key=ecb2eb23-84b4-4049-a3b3-5ac139a4c86f"; 

// API get request for default comments

const getComments = () => {axios.get('https://project-1-api.herokuapp.com/comments/' + apiKeyAuth)
.then((response) => {

    commentListArr = response.data;

    publishComments(commentListArr);

    }).catch ((error) => {
        console.log(error);
    })
}

// API iterator

let commentContainer = document.querySelector('.commented__container');

function publishComments(commentListArr) {
    let commentContainer = document.querySelector('.commented__container');

    commentContainer.innerHTML = '';

    commentListArr.sort((a, b) => b.timestamp - a.timestamp).forEach((element, i) => {
        
        displayComments(commentListArr[i]);

    });
}

// DOM appending function

function displayComments(comment){ 
    
    let commentContainer = document.querySelector('.commented__container');
    
        let divEl = document.createElement('div');
        divEl.classList.add('commented__wrapper-left');
        
        let emptyDiv = document.createElement('div');
        divEl.appendChild(emptyDiv);
        
        let imgEl = document.createElement('div');
        imgEl.classList.add('commented__img', 'commented__avatar')
        emptyDiv.appendChild(imgEl);
        
        let wrapEl = document.createElement('div');
         wrapEl.classList.add('commented__wrapper')
        divEl.appendChild(wrapEl);
        
        let wrapTopEl = document.createElement('div');
        wrapTopEl.classList.add('commented__wrapper-top')
        wrapEl.appendChild(wrapTopEl);
        
        let nameEL = document.createElement('p');
        nameEL.classList.add('commented__name');
        wrapTopEl.appendChild(nameEL);
        
        let dateEl = document.createElement('p');
        dateEl.classList.add('commented__date');
        wrapTopEl.appendChild(dateEl);
        
        let commentEl = document.createElement('p');
        commentEl.classList.add('commented__comment');
        wrapEl.appendChild(commentEl);
        
        nameEL.innerText = comment.name;
        commentEl.innerText = comment.comment;
        dateEl.innerText =  new Date (comment.timestamp).toLocaleDateString();

        commentContainer.appendChild(divEl); 
}; 
   
// Post request headers

const header = {
    'Content-Type': 'application/json'
};

//  Form submit function handler

let formEl = document.querySelector('.form');

formEl.addEventListener('submit', handleFormSubmit);

const formValue = {};

function handleFormSubmit(event) {
    event.preventDefault();

    let commentName = event.target.comment__name.value;
    let commentVal = event.target.comment__comment.value;

    formValue.name = commentName;
    formValue.comment = commentVal;

    post();
}

// Post request

const post = () => 
{axios.post('https://project-1-api.herokuapp.com/comments/' + apiKeyAuth, formValue, header)
.then((response) => {

        commentContainer.innerHTML = '';
        formEl.reset();
        getComments();

    })
}

getComments();