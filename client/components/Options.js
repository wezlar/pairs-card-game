import React from 'react';
import PropTypes from 'prop-types';

export function Options (props = {}) {
  const { score, isGameComplete, startNewGame } = props;

  return (
    <div className="options">
      { isGameComplete && <div className="game-complete">
          Yay! All cards matched!
        </div>
      }
      <div className="score">
        <span className="label">Score: </span>
        <span className="score">{score}</span>
      </div>
      <div className="start-new-game">
        <button onClick={startNewGame}>New Game</button>
      </div>
    </div>
  );
}

Options.propTypes = {
  score: PropTypes.number,
};

export default Options;
