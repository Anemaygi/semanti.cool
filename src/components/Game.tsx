import React, { useEffect } from 'react'
import useWordle from '../hooks/useWordle';
import Grid from './Grid';
import Keyboard from './Keyboard';

interface WordleProps {
  solution: string;
}

const Game: React.FC<WordleProps> = ({ solution }) => {

  const { currentGuess, handleKeyup, guesses, isCorrect, turn} = useWordle(solution)

  useEffect(() => {
    window.addEventListener('keyup', handleKeyup)

    if (isCorrect){
      console.log('Ganhou!')
      window.removeEventListener('keyup', handleKeyup)
    }


    if (turn > 5){
      console.log('Perdeu!')
      window.removeEventListener('keyup', handleKeyup)
    }

    return () => window.removeEventListener('keyup', handleKeyup)
  }, [handleKeyup, isCorrect, turn])

  // useEffect(() => {
  //   console.log(guesses, turn, isCorrect)
  // }, [guesses, turn, isCorrect])

  return (
    <div>
      Wordle: {solution}
      <p>Current guess - {currentGuess}</p>
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
      <Keyboard />
    </div>
  );
};

export default Game;