import React from 'react';
import Card from '../index';

const cardDetails = {
  cardIndex: 1,
  hasMatched: false,
  image: 'images/svg-cards/3_of_hearts.svg',
  isFlipped: false,
  name: '3 of hearts',
};

export default { title: 'Card' };

export const cardBack = () => <Card card={cardDetails} />;

export const cardFront = () => <Card card={{ ...cardDetails, isFlipped: true }} />;