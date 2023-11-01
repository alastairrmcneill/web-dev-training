import Card from "./card.js";

export default class Game {
  constructor() {
    this.reset();
  }

  reset() {
    this.gameState = "player";
    this.deck = [];
    this.playerHand = [];
    this.dealerHand = [];
    this.setupDeck();
    this.dealInitialHands();
    this.updateDisplay();
  }

  setupDeck() {
    var suits = ["SPADES", "CLUBS", "DIAMONDS", "HEARTS"];
    var ranks = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
      "A",
    ];

    for (var i = 0; i < suits.length; i++) {
      for (var j = 0; j < ranks.length; j++) {
        this.deck.push(new Card(suits[i], ranks[j]));
      }
    }

    this.deck.sort(() => Math.random() - 0.5);
  }

  dealInitialHands() {
    this.playerHand.push(this.deck.pop());
    this.dealerHand.push(this.deck.pop());

    this.playerHand.push(this.deck.pop());
    this.dealerHand.push(this.deck.pop());

    this.dealerHand[1].hidden = true;
  }

  hit() {
    this.playerHand.push(this.deck.pop());
    let value = this.checkScore(this.playerHand);

    if (value > 21) {
      this.gameState = "bust";
    }
  }

  async stick() {
    this.gameState = "dealer";
    this.updateDisplay();

    await new Promise((r) => setTimeout(r, 1000));

    await this.dealerPlay();

    this.gameState = "handComplete";
    this.updateDisplay();
  }

  checkScore(hand) {
    var value = 0;

    hand.forEach((card) => {
      value += card.value;
    });
    if (value > 21) {
      if (this.checkAces(hand)) {
        this.changeAces(hand);
        value = this.checkScore(hand);
      }
    }
    return value;
  }

  checkAces(hand) {
    for (var i = 0; i < hand.length; i++) {
      if (hand[i].value == 11) {
        return true;
      }
    }

    return false;
  }

  changeAces(hand) {
    for (var i = 0; i < hand.length; i++) {
      if (hand[i].value == 11) {
        hand[i].value = 1;
        return;
      }
    }
  }

  async dealerPlay() {
    this.dealerHand[1].hidden = false;
    this.updateDisplay();

    let value = this.checkScore(this.dealerHand);

    while (value < 15) {
      await new Promise((r) => setTimeout(r, 1000));
      this.dealerHand.push(this.deck.pop());

      value = this.checkScore(this.dealerHand);
      this.updateDisplay();
    }
  }

  updateDisplay() {
    const dealerHandEl = document.getElementById("dealerHand");
    const playerHandEl = document.getElementById("playerHand");
    const hitButton = document.getElementById("hitButton");
    const stickButton = document.getElementById("stickButton");
    const nextHandButton = document.getElementById("nextHandButton");
    const newGameButton = document.getElementById("newGameButton");

    // Show cards on screen
    var dealerHandHTML = ``;
    for (var i = 0; i < this.dealerHand.length; i++) {
      if (!this.dealerHand[i].hidden) {
        dealerHandHTML += `<img src="cards/${this.dealerHand[i].pic}"/>`;
      } else {
        dealerHandHTML += `<img src="cards/BACK.png"/>`;
      }
    }

    dealerHandEl.innerHTML = dealerHandHTML;

    var playerHandHTML = ``;
    for (var i = 0; i < this.playerHand.length; i++) {
      playerHandHTML += `<img src="cards/${this.playerHand[i].pic}"/>`;
    }
    playerHandEl.innerHTML = playerHandHTML;

    // Set correct buttons to display
    if (this.gameState === "player") {
      hitButton.style.display = "inline";
      stickButton.style.display = "inline";

      nextHandButton.style.display = "none";
      newGameButton.style.display = "none";
    } else if (this.gameState === "dealer") {
      hitButton.style.display = "none";
      stickButton.style.display = "none";

      nextHandButton.style.display = "none";
      newGameButton.style.display = "none";
    } else if (this.gameState === "handComplete") {
      var playerScore = this.checkScore(this.playerHand);
      var dealerScore = this.checkScore(this.dealerHand);

      if (dealerScore > 21 || playerScore > dealerScore) {
        setTimeout(function () {
          alert("You won!");
        }, 100);
      } else {
        setTimeout(function () {
          alert("You lost");
        }, 100);
      }

      hitButton.style.display = "none";
      stickButton.style.display = "none";

      nextHandButton.style.display = "inline";
      newGameButton.style.display = "inline";
    } else if (this.gameState === "bust") {
      setTimeout(function () {
        alert("You went bust!");
      }, 100);
      hitButton.style.display = "none";
      stickButton.style.display = "none";

      nextHandButton.style.display = "inline";
      newGameButton.style.display = "inline";
    }
  }
}
