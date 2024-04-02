function cardNumber() {
    number = Math.ceil(Math.random() * 13);
      if (number === 1) {
        return "Ace";
      } else if (number === 2) {
        return 2;
      } else if (number === 3) {
        return 3;
      } else if (number === 4) {
        return 4;
      } else if (number === 5) {
        return 5;
      } else if (number === 6) {
        return 6;
      } else if (number === 7) {
        return 7;2
      } else if (number ===  8) {
        return 8;
      } else if (number === 9) {
        return 9;
      } else if (number === 10) {
        return 10;
      } else if (number === 11) {
        return "Jack";
      } else if (number === 12) {
        return "Queen";
      } else if (number === 13) {
        return "King";
      }
      };
  function cardSuit() {
     suit = Math.ceil(Math.random() * 4);
      if (suit === 1) {
        return "spades";
      } else if (suit === 2) {
        return "hearts";
      } else if (suit === 3) { 
        return "diamonds";
      } else if (suit === 4) {
        return "clubs";
      }
  };

  card = () => {
  return (cardNumber() + " of " + cardSuit()); 
    };

const deck = []; 
// i set the deck to make 300 cards so that when the uniqueDeck runs it will filter out 52 possible unique cards for a deck.  
 for (i = 0; i < 300; i++) {
      deck[i] = card();
};
const uniqueDeck = [...new Set(deck)];

   //cards were delt as the top card in deck or deck[0] being the top and alocated to each player in the order they would have been dealt in a game of holdem.  
  console.log(`Your hand is: ${deck[0]} & ${deck[2]}`);
  console.log(`The dealer's hand is: ${deck[1]} & ${deck[3]}`);
  
  console.log(`The board is showing ${deck[5]}, ${deck[6]}, ${deck[7]}, ${deck[9]} & ${deck[11]}`);
//added this to track the accuracy but I rather like it so I can see if the dealer is cheating for now. 
  console.log(deck);
