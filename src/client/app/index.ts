import "../css/style.css";

import Deck from "deck-of-cards";

const container = document.getElementById("container");
const deck = Deck();

deck.mount(container);

deck.shuffle();
deck.flip();
deck.fan();

deck.cards.forEach((card) => {
	card.enableDragging();
});
