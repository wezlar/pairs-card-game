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
  border-radius: 7px;
`;

const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  backface-visibility: hidden;
  background-color:#fff;
  background-image: radial-gradient(closest-side, transparent 98%, red 99%),
    radial-gradient(closest-side, transparent 98%, black 99%);
  background-size:5vmin 5vmin;
  background-position:0 0, 2.5vmin 2.5vmin;
  border:solid 2.5vmin #fff;
  border-radius: 7px;
  /* overflow: hidden; */
`;

const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transition-delay: .15s;
  z-index: 0;
  border-radius: 7px;
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
      card: { 
        image, 
        name,
        isFlipped,
      }, 
    } = this.props;

    const file = require(`../${image}`);

    const flippedStyle = isFlipped ? { transform: 'rotateY(-180deg)' } : {};
    const flippedFrontStyle = isFlipped ? { transform: 'rotateY(180deg)' } : {};

    // TODO: add hover state that slightly moves the card in opposite direction
    return (
      <CardWrapper onClick={this.props.onClick}>
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
  onClick: PropTypes.func,
}

Card.defaultProps = {
  card: {},
}

export default Card;