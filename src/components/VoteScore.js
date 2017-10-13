import React from 'react'

const VoteScore = (props) => {
  const { voteScore } = props
  
  return (
    <div className='vote-score'>
      Score: <span className='vote vote-down'>-</span>{voteScore}<span className='vote vote-up'>+</span>
    </div>
  )
}

export default VoteScore