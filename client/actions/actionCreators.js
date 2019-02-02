// increment
export function cardFlip(index) {
    return {
        type: 'CARD_FLIP',
        index
    };
}

export function addNewDeck(deck) {
    return {
        type: 'ADD_NEW_DECK',
        deck
    }
}