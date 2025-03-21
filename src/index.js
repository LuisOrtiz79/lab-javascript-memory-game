const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);

window.addEventListener('load', (event) => {
  memoryGame.shuffleCards();

  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  let clickedSpan = document.getElementById('pairs-clicked')
  let guessedSpan = document.getElementById('pairs-guessed')


  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      // TODO: write some code here
      if(memoryGame.pickedCards.length < 2){
        card.classList.toggle('turned');
        memoryGame.pickedCards.push(card);

        if(memoryGame.pickedCards.length === 2){
          let card1 = memoryGame.pickedCards[0].getAttribute('data-card-name');
          let card2 = memoryGame.pickedCards[1].getAttribute('data-card-name');

          if(memoryGame.checkIfPair(card1, card2) === true){
            clickedSpan.innerText = `${memoryGame.pairsClicked}`;
            guessedSpan.innerText = `${memoryGame.pairsGuessed}`;

            memoryGame.pickedCards = [];
          
            if(memoryGame.checkIfFinished() === true){
              setTimeout(() => {
              alert("Congratulations! You've won!");
              }, 1000)
            }
          }
        }else{
          clickedSpan.innerText = `${memoryGame.pairsClicked}`;
          setTimeout(() => {
            memoryGame.pickedCards[0].classList.toggle('turned');
            memoryGame.pickedCards[1].classList.toggle('turned');
            memoryGame.pickedCards = [];
          }, 1000)
        }
      }

      //console.log(`Card clicked: ${card}`);
    });
  });
});


// add card to pickedCards array
// only turn if you have less than 2 cards in the pickedCards
// when you have two, checkIfPair
//if checkIfPair === true, cards remain flipped and checkIfFinished
//otherwise flip back
//