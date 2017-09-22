import React from 'react'

const VoteScore = (props) => {
  const { voteScore } = props
  
  return (
    <div className='vote-score'>
      Score: <span className='vote-down'>-</span>{voteScore}<span className='vote-up'>+</span>
    </div>
  )
}

export default VoteScore