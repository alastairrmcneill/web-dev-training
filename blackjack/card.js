export default class Card {
  constructor(suit, rank) {
    this.suit = suit;
    this.rank = rank;
    this.pic = `${rank}-${suit[0]}.png`;
    this.value = 0;
    this.hidden = false;

    if (rank === "J" || rank === "Q" || rank === "K") {
      this.value = 10;
    } else if (rank === "A") {
      this.value = 11;
    } else {
      this.value = parseInt(rank);
    }
  }
}
