import React, { useEffect } from 'react'
import useWordle from '../hooks/useWordle';
import Grid from './Grid';
import Keyboard from './Keyboard';

interface WordleProps {
  solution: string;
}

const Game: React.FC<WordleProps> = ({ solution }) => {

  const { currentGuess, handleKeyup, guesses, isCorrect, turn, letters, clickKey} = useWordle(solution)

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
  }, [handleKeyup, isCorrect, turn, clickKey])



  return (
    <div>
      Wordle: {solution}
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
      <Keyboard letters={letters} onClickKey={clickKey}/>
    </div>
  );
};

export default Game;