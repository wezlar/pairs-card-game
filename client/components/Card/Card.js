import React, { memo } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const cardWidth = '138px';
const cardHeight = '200px';

const CardWrapper = styled.div`
  position: relative;
  width: ${cardWidth};
  height: ${cardHeight};
  margin-right: 10px;
  margin-bottom: 10px;
  perspective: 800px;
`;

const CardBody = styled.div`
  position: absolute;
  width: ${cardWidth};
  height: ${cardHeight};
  box-shadow: 3px 3px 3px rgba(0,0,0,0.2);
  transform-style: preserve-3d;
  transition: transform .3s ease-in-out;
  border-radius: 5px;
  transform: rotateY(0);
`;

const CardBack = styled.div`
  position: absolute;
  width: ${cardWidth};
  height: ${cardHeight};
  z-index: 2;
  backface-visibility: hidden;
  background-color:#fff;
  background-image: radial-gradient(closest-side, transparent 98%, red 99%),
    radial-gradient(closest-side, transparent 98%, black 99%);
  background-size: 30px 30px;
  background-position: 0 0, 15px 15px;
  border:solid 10px #fff;
  border-radius: 5px;
`;

const CardFront = styled.div`
  position: absolute;
  width: ${cardWidth};
  height: ${cardHeight};
  transition-delay: .15s;
  z-index: 0;
  border-radius: 5px;
`;

const SVGWrapper = styled.div`
  svg {
    width: ${cardWidth};
    height: ${cardHeight};
  }
`;

export function Card (props = {}) {
  const { 
    card: {
      image, 
      isFlipped,
      hasMatched,
    },
    onClick,
  } = props;

  const file = image 
    ? require(`!!raw-loader!../../${image}`)
    : '';

  const flippedStyle = isFlipped 
    ? { transform: 'rotateY(-180deg)' } 
    : {};
  
  const flippedFrontStyle = isFlipped 
      ? { transform: 'rotateY(180deg)' } 
      : {};
      
  const hasMatchedStyle = hasMatched 
    ? { boxShadow: '0 0 1px 2px #099f09' } 
    : { boxShadow: '0 0 1px 2px #00000000' };

  const cardFrontStyle = Object.assign({}, flippedFrontStyle, hasMatchedStyle);

  const cardFront = () =>
    <CardFront className="card__front" style={cardFrontStyle}>
      <SVGWrapper dangerouslySetInnerHTML={ { __html: file } } />
    </CardFront>;
  
  const cardBack = () => 
    <CardBack className="card__back" />;

  const cardBody = () => 
    <CardBody className="card__body" style={flippedStyle}>
      {cardBack()}
      {cardFront()}
    </CardBody>;

  // TODO: add hover state that slightly moves the card in opposite direction
  return <CardWrapper className="card__wrapper" onClick={onClick}>
      {cardBody()}
    </CardWrapper>;
};

Card.propTypes = {
  card: PropTypes.object,
  onClick: PropTypes.func,
};

Card.defaultProps = {
  card: {},
};

export default memo(Card);