import React, { useEffect, useState } from 'react'
import useWordle from '../hooks/useWordle';
import Grid from './Grid';
import Keyboard from './Keyboard';
import Modal from './Modal';

interface WordleProps {
  solution: string;
}

const Game: React.FC<WordleProps> = ({ solution }) => {

  const { currentGuess, handleKeyup, guesses, isCorrect, turn, letters, clickKey} = useWordle(solution)
  const [modalState, setModalState] = useState(false)

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

  useEffect(() => {
    if (isCorrect) setModalState((prev) => !prev)
    if (turn > 5) setModalState((prev) => !prev)
    }, [isCorrect, turn])

  return (
    <div>
      { modalState ? <Modal setModalState={setModalState} solution={solution} turns={turn} isCorrect={isCorrect}  /> : <></>}
      {/* <p className="text-center m-5 font-primary">{solution}</p> */}
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
      <Keyboard letters={letters} onClickKey={clickKey}/>
    </div>
  );
};

export default Game;