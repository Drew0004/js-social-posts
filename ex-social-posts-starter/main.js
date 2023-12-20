const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "25-06-2021"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "03-09-2021"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "15-05-2021"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": "https://unsplash.it/300/300?image=40"
        },
        "likes": 56,
        "created": "03-04-2021"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "05-03-2021"
    }
];

const myContainer = document.getElementById('container');


// Ciclo for sull'array che stampa gli oggetti

for (let i = 0; i < posts.length; i++){
    
    myContainer.innerHTML+= `
    <div class="post">
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    <img class="profile-pic" src="${posts[i]['author']['image']}" alt="Phil Mangione">                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${posts[i]['author']['name']}</div>
                    <div class="post-meta__time">${posts[i]['created']}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${posts[i]['content']}</div>
        <div class="post__image">
            <img src="${posts[i]['media']}" alt="Picture post">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="#nogo" data-postid="${posts[i]['id']}">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-${posts[i]['id']}" class="js-likes-counter">${posts[i]['likes']}</b> persone
                </div>
            </div> 
        </div>            
    </div>
    `;

}

const myLikeButton = document.querySelectorAll('.js-like-button');

const myLikeCounter = document.querySelectorAll('.js-likes-counter')

const postLikeCount = [];


for (let j = 0; j < myLikeButton.length; j++){
    myLikeButton[j].addEventListener('click', function(){


        console.log(myLikeButton[j]);

        if(!myLikeButton[j].classList.contains('like-button--liked')){
            posts[j]['likes']++;

            console.log (posts[j]['likes']);
        }else{
            posts[j]['likes']--;
        }
        myLikeButton[j].classList.toggle('like-button--liked');
        myLikeCounter[j].innerHTML = posts[j]['likes'];
    });
}

