// this portion from line 2 - 54 will create a shuffled deck of 52 cards named uniqueDeck. 
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
        return 7;
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
  return (`${cardNumber()} of ${cardSuit()}`); 
    };

const deck = []; 
// i set the deck to make 300 cards so that when the uniqueDeck runs it will filter out 52 possible unique cards for a deck.  
 for (i = 0; i < 300; i++) {
      deck[i] = card();
};
const uniqueDeck = [...new Set(deck)];
// from 56 - 62 below I'll gather player information and assign them to seats at a 9 man poker table //  I will revisit this later and set it up for input features if I decide to turn i tinto an actual game later.

const newPlayer = ["Freddie", "Steve", "Bill Jr.", "Bill", "Gregg", "James", "Sharon", "Bob", "Dana", "Gerald"];
// 60-63 should pull a up to 9 names from the list of new players starting with the oldest 9 players in the list.  the extra players will be on a wait list so to speak. 
const player = [];
  for (i = 0; i < 9; i++) {
    player[i] = newPlayer[i];
  }; 
   //cards were delt as the top card in deck or deck[0] being the top and alocated to each player in the order they would have been dealt in a game of holdem. 
  console.log(`${player[0]} has ${uniqueDeck[0]} & ${uniqueDeck[10]}`);
  console.log(`${player[1]} has ${uniqueDeck[2]} & ${uniqueDeck[11]}`);
  console.log(`${player[2]} has ${uniqueDeck[3]} & ${uniqueDeck[12]}`);
  console.log(`${player[3]} has ${uniqueDeck[4]} & ${uniqueDeck[13]}`);
  console.log(`${player[4]} has ${uniqueDeck[5]} & ${uniqueDeck[14]}`);
  console.log(`${player[5]} has ${uniqueDeck[6]} & ${uniqueDeck[15]}`);
  console.log(`${player[6]} has ${uniqueDeck[7]} & ${uniqueDeck[16]}`);
  console.log(`${player[7]} has ${uniqueDeck[8]} & ${uniqueDeck[17]}`);
  console.log(`${player[8]} has ${uniqueDeck[9]} & ${uniqueDeck[18]}`);

  
  console.log(`The board is showing ${uniqueDeck[20]}, ${uniqueDeck[21]}, ${uniqueDeck[22]}, ${uniqueDeck[24]} & ${uniqueDeck[26]}`);

  console.log(uniqueDeck);

  console.log(player);
 
