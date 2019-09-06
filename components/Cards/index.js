// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardContainer = document.querySelector('.cards-container')

axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
    .then(response => {
        console.log('cards test', response);
        const ourCards = response.data.articles['bootstrap'];
        ourCards.forEach(item => {
        cardContainer.appendChild(newCards(item))
        });
    })
    .catch(error =>{
        console.log('cards error', error)
    })
function newCards(y){

    const cards = document.createElement('div'),
        headLine = document.createElement('div'),
        auth = document.createElement('div'),
            imgCont = document.createElement('div'),
                image1 = document.createElement('img'),
            byName = document.createElement('span');

    cards.classList.add('card')
    headLine.classList.add('headline')
    auth.classList.add('author')
    imgCont.classList.add('img-container')

    cards.appendChild(headLine);
    cards.appendChild(auth);
    auth.appendChild(imgCont);
    auth.appendChild(byName);
    imgCont.appendChild(image1);

    headLine.textContent = y;
    image1.src = y;
    byName.textContent = y


    return cards
}

