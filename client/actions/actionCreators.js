// increment
export function cardFlip(index) {
    return {
        type: 'CARD_FLIP',
        index
    };
}

export function cardMatched(index) {
    return {
        type: 'CARD_MATCHED',
        index
    };
}

export function addNewDeck(deck) {
    return {
        type: 'ADD_NEW_DECK',
        deck
    }
}

export function updateLastCard(index, name) {
    return {
        type: 'CARD_SELECTED',
        payload: {
            index,
            name,
        }
    };
}

export function updateScore(score) {
    return {
        type: 'UPDATE_SCORE',
        score
    };
}

export function updateNumberOfCards(numberOfCards) {
    return {
        type: 'UPDATE_NUMBER_OF_CARDS',
        numberOfCards
    };
}

export function updateCardsMatched(cardsMatched) {
    return {
        type: 'CARDS_MATCHED',
        cardsMatched
    };
}