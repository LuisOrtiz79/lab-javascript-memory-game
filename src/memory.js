class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    // ... write your code here
    if(!this.cards){
      return undefined;
    }else{
      for(let i = this.cards.length - 1 ; i > 0; i--) {
        let random = Math.floor(Math.random() * (i + 1));
        let temp = this.cards[i];
        this.cards[i] = this.cards[random];
        this.cards[random] = temp;
      }
    }
    
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked++;

    if(card1 === card2){
      this.pairsGuessed++;
      return true;
    }
    
    return false;
  }

  checkIfFinished() {
    // ... write your code here
    if(this.pairsGuessed === 0){
      return false;
    }else if(this.pairsGuessed !== 12){
      return false;
    }else{
      return true;
    }
  }
}
