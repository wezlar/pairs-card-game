import React, { Component } from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  position: relative;
  width: 150;
  height: 217px;
  margin-right: 10px;
  margin-bottom: 10px;
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
  z-index: 1;
`;

class Card extends Component {
  render () {
    const { card: { image, name } } = this.props;

    const file = require(`../${image}`);

    return (
      <CardWrapper>
        <CardBody>
          <CardBack className="card__back">
            BACK { name }
          </CardBack>
          <CardFront className="card__face">
            <div dangerouslySetInnerHTML={ { __html: file } } />
          </CardFront>
        </CardBody>
      </CardWrapper>
    );
  }
};

export default Card;