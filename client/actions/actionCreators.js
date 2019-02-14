import ACTION_TYPES from './constants'

export function cardFlip(index) {
    return {
        type: ACTION_TYPES.CARD_FLIP,
        index
    };
}

export function cardMatched(index) {
    return {
        type: ACTION_TYPES.CARD_MATCHED,
        index
    };
}

export function addNewDeck(deck) {
    return {
        type: ACTION_TYPES.ADD_NEW_DECK,
        deck
    }
}

export function updateLastCard(index, name) {
    return {
        type: ACTION_TYPES.CARD_SELECTED,
        payload: {
            index,
            name,
        }
    };
}

export function updateScore(score) {
    return {
        type: ACTION_TYPES.UPDATE_SCORE,
        score
    };
}

export function updateNumberOfCards(numberOfCards) {
    return {
        type: ACTION_TYPES.UPDATE_NUMBER_OF_CARDS,
        numberOfCards
    };
}

export function updateCardsMatched(cardsMatched) {
    return {
        type: ACTION_TYPES.CARDS_MATCHED,
        cardsMatched
    };
}