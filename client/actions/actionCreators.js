import ACTION_TYPES from './constants';

export function cardFlip(index) {
    return {
        type: ACTION_TYPES.CARD_FLIP,
        payload: {
            index,
        },
    };
}

export function cardMatched(index) {
    return {
        type: ACTION_TYPES.CARD_MATCHED,
        payload: {
            index,
        },
    };
}

export function addNewDeck(deck) {
    return {
        type: ACTION_TYPES.ADD_NEW_DECK,
        payload: {
            deck,
        },
    };
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
        payload: {
            score,
        },
    };
}

export function updateNumberOfCards(numberOfCards) {
    return {
        type: ACTION_TYPES.UPDATE_NUMBER_OF_CARDS,
        payload: {
            numberOfCards,
        },
    };
}

export function updateCardsMatched(cardsMatched) {
    return {
        type: ACTION_TYPES.CARDS_MATCHED,
        payload: {
            cardsMatched
        }
    };
}