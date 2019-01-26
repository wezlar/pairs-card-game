import React, { Component } from 'react';

class Card extends Component {
  render () {
    const { card: { image, name } } = this.props;

    const file = require(`../${image}`);

    return (
      <div>
        <div className="card__face">
        <g dangerouslySetInnerHTML={ { __html: file } } />
        </div>
        <div className="card__back">
          BACK { name }
        </div>
      </div>
    );
  }
};

export default Card;