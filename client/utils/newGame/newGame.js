function selectRandomCards (cards, numberOfCards) {
  const indexes = [];
  
  for (let i = 0; i < numberOfCards; i++) {
    let index;
    do {
      index = Math.floor((Math.random() * cards.length));
    } while (indexes.includes(index));
    indexes.push(index);
  }

  return indexes;
}

function shuffleCards (cards, deck) {
  const shuffledDeck = [];
  const initialDeckSize = deck.length;

  for (let i = 0; i < initialDeckSize; i++) {
    const random = Math.floor((Math.random() * deck.length));

    const selectedCard = {
      cardIndex: deck[random],
      ...cards[deck[random]],
      isFlipped: false,
      hasMatched: false,
    };

    shuffledDeck.push(selectedCard);
    deck.splice(random, 1);
  }

  return shuffledDeck;
}

export default function newGame (cards, numberOfCards) {
  //check everythings valis
  if (typeof cards === undefined || !cards.length) {
    return [];
  }

  // select the random cards
  numberOfCards += numberOfCards % 2; // cannot be odd number
  const indexes = selectRandomCards(cards, (numberOfCards / 2));
  
  // create pairs
  const cardDeck = [
    ...indexes,
    ...indexes,
  ];

  // randomise order
  const shuffledDeck = shuffleCards(cards, cardDeck);

  // return deck
  return shuffledDeck;
}