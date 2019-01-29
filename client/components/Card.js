import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CardWrapper = styled.div`
  position: relative;
  width: 180px;
  height: 261px;
  margin-right: 10px;
  margin-bottom: 10px;
  perspective: 800px;
`;

const CardBody = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  box-shadow: 3px 3px 3px rgba(0,0,0,0.2);
  transform-style: preserve-3d;
  transition: transform .3s ease-in-out;
`;

const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  backface-visibility: hidden;
  background: #333;
`;

const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transition-delay: .15s;
  z-index: 0;
`;

const SVGWrapper = styled.div`
  svg {
    width: 100%;
    height: 100%;
  }
`;

class Card extends Component {
  render () {
    const { 
      card: { image, name }, 
      isFlipped 
    } = this.props;

    const file = require(`../${image}`);

    const flippedStyle = isFlipped ? { transform: 'rotateY(-180deg)' } : {};
    const flippedFrontStyle = isFlipped ? { transform: 'rotateY(180deg)' } : {};

    return (
      <CardWrapper>
        <CardBody style={flippedStyle}>
          <CardBack className="card__back">
            BACK { name }
          </CardBack>
          <CardFront className="card__face" style={flippedFrontStyle}>
            <SVGWrapper dangerouslySetInnerHTML={ { __html: file } } />
          </CardFront>
        </CardBody>
      </CardWrapper>
    );
  }
};

Card.propTypes = {
  card: PropTypes.object,
  isFlipped: PropTypes.bool,
}

Card.defaultProps = {
  card: {},
  isFlipped: false,
}

export default Card;