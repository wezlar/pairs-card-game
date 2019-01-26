import React, { memo } from 'react'
import PropTypes from 'prop-types'

export function Score (props = {}) {
  const { score } = props

  return (
    <div className="score">
      {score}
    </div>
  )
}

Score.propTypes = {
  score: PropTypes.number,
}

export default memo(Score)
