// any tips/comments are greatly appreciated
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
}

card = () => {

return (cardNumber() + " of " + cardSuit());
return (cardNumber() + " of " + cardSuit());
};

console.log("Your hand is " + card() + " & " + card());
console.log("The dealer's hand is " + card() + " & " + card());

console.log("The board is showing " + card() + ", " + card() + ", " + card() + ", " + card() + ", " + card() + " & " + card())

if (card === card) {
  console.log("Someone's cheating!")
} else {
  console.log("Who won?")
};
