import React, { memo } from 'react'
import PropTypes from 'prop-types'

export function Score (props = {}) {
  const { score } = props

  return (
    <div>
      <div className="score">
        <span class="label">Score: </span>
        <span class="score">{score}</span>
      </div>
      <div className="start-new-game">
        <button>New Game</button>
      </div>
    </div>
  )
}

Score.propTypes = {
  score: PropTypes.number,
}

export default memo(Score)
