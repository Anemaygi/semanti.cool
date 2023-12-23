import React from 'react'

interface GuessItem {
    key: string;
    color: 'grey' | 'green' | 'yellow';
}

interface RowProps{
    guess: Array<GuessItem> | undefined,
    currentGuess: string,
}

const Row: React.FC<RowProps> = ({guess, currentGuess}) =>{
    if (guess){
        return (
            <div className="text-center flex justify-center">
            {guess.map((l: any,i: any)=>{
                const color = l.color == "yellow" ? 'bg-yellow-300' : l.color == "green" ? 'bg-green-300' : 'bg-gray-300';
                                
                return <div className={`${color} flex items-center justify-center w-12 h-12 border border-gray-300 mx-1 my-4 text-centers uppercase font-semibold`} key={i}>{l.key}</div>
            })}
            </div>
        )
    }

    if(currentGuess){
        let separatedLetters = currentGuess.split('')
        return(
            <div className="text-center flex justify-center">
                {separatedLetters.map((letter, i)=>(
                    <div key={i} className="flex items-center justify-center w-12 h-12 border border-gray-300 mx-1 my-4 text-centers uppercase font-semibold">{letter}</div>
                ))}
                {[...Array(5 - separatedLetters.length)].map((_, i) => (
                    <div key={i} className="flex items-center justify-center w-12 h-12 border border-gray-300 mx-1 my-4 text-centers uppercase font-semibold"></div>
                ))}
            </div>
        )
    }
    
    return(
        <div className="text-center flex justify-center"> 
            {Array.from({ length: 5 }, (_, i) => (
        <div key={i} className="flex items-center justify-center w-12 h-12 border border-gray-300 mx-1 my-4 text-centers uppercase font-semibold"></div>
      ))}
         </div>
    )
}

interface GridProps{
    currentGuess: string,
    guesses: Array<Array<GuessItem>>,
    turn: number,
}

const Grid: React.FC<GridProps> = ({currentGuess, guesses, turn}) =>{
    return(
        <div>
            {guesses.map((guess, i)=>{
                if (turn === i ){
                    return <Row key={i} guess={undefined} currentGuess={currentGuess} />
                }
                return <Row key={i} guess={guess} currentGuess={""}/>
            })}
        </div>
    )
}

export default Grid;