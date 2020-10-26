let commentList = [
    {
    name: "Micheal Lyons",
    comment: "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.",
    date: "12/18/2018"
},
{
    name: "Gary Wong",
    comment: "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!.",
    date: "12/12/2018"
},
{
    name: "Theodore Duncan",
    comment: "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
    date: "11/15/2018"
}

];

window.addEventListener('load', publishComments(commentList));

let formEl = document.querySelector('.form');

formEl.addEventListener('submit', handleFormSubmit);


function handleFormSubmit(event) {
    event.preventDefault();

    let comment__nameVal = event.target.comment__name.value;
    let comment__commentVal = event.target.comment__comment.value;

    commentList.unshift({
        name: comment__nameVal,
        comment: comment__commentVal,
        date: new Date().toLocaleDateString()
})
    publishComments(commentList);
    formEl.reset();
}


function publishComments(commentList) {
    let commentContainer = document.querySelector('.commented__container');

    commentContainer.innerHTML = '';

    for (let i = 0; i < commentList.length; i++) {
        
        displayComment(commentList[i]);

    }

}

function displayComment(comment) {

    let commentContainer = document.querySelector('.commented__container');

        let divEl = document.createElement('div');
        divEl.classList.add('commented__wrapper-left');

        let emptyDiv = document.createElement('div');
        divEl.appendChild(emptyDiv);

        let imgEl = document.createElement('div');
        imgEl.classList.add('comment__img', 'commented__avatar')
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

        let LineBr = document.createElement("hr");
        LineBr.classList.add("solid-inner")
        commentContainer.appendChild(LineBr);


        nameEL.innerText = comment.name;
        commentEl.innerText = comment.comment;
        dateEl.innerText = comment.date;

        commentContainer.appendChild(divEl); 

}

