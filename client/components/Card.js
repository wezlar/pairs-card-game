import React from 'react';

class Card extends Component {
  render () {
    const { card: { image, name } } = this.props;

    return (
      <div>
        <div className="card__face">
          <img 
            src={ image } 
            title={ name } 
            alt={ name } />
        </div>
        <div className="card__back">
          BACK { name }
        </div>
      </div>
    );
  }
};

export default Card;