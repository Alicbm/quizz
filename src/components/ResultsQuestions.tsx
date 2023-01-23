import React from 'react'
import { AppContext } from './AppContext'
// import { useState } from '../hooks/useState'

export const ResultsQuestions = () => {
  const { score } = React.useContext(AppContext);
  // const { score } = useState();

  return (
    <div>
      <p>Tu obtuviste {score}</p>
    </div>
  )
}
