import React, { Component } from 'react';
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

class Card extends Component {
  render () {
    const { 
      card: {
        image, 
        isFlipped,
        hasMatched,
      }, 
    } = this.props;

    const file = require(`!!raw-loader!../${image}`);

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

    // TODO: add hover state that slightly moves the card in opposite direction
    return (
      <CardWrapper onClick={this.props.onClick}>
        <CardBody style={flippedStyle}>
          <CardBack className="card__back" />
          <CardFront className="card__face" style={cardFrontStyle}>
            <SVGWrapper dangerouslySetInnerHTML={ { __html: file } } />
          </CardFront>
        </CardBody>
      </CardWrapper>
    );
  }
};

Card.propTypes = {
  card: PropTypes.object,
  onClick: PropTypes.func,
};

Card.defaultProps = {
  card: {},
};

export default Card;