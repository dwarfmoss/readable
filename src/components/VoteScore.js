import React from 'react'
import vote from '../util/readableAPI'

function handleClick(event) {
  if(event.target.text === '-') {
    
  } else {
    
  }
}

const VoteScore = (props) => {
  const { voteScore } = props
  
  return (
    <div className='vote-score'>
      <span className='vote vote-down' onClick={handleClick}>-</span>
      {voteScore}
      <span className='vote vote-up' onClick={handleClick}>+</span>
    </div>
  )
}

export default VoteScore