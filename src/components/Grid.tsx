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
            {guess.map((l: {key:string, color:string},i: number)=>{
                const color = l.color == "yellow" ? 'border-yellow-300' : l.color == "green" ? 'border-green-300' : 'border-gray-400';
                                
                return <div className={`${color} font-primary text-2xl flex items-center rounded justify-center w-12 h-12 border-2 border-gray-300 m-1.5 text-centers uppercase font-semibold`} key={i}>{l.key}</div>
            })}
            </div>
        )
    }

    if(currentGuess){
        let separatedLetters = currentGuess.split('')
        return(
            <div className="text-center flex justify-center">
                {separatedLetters.map((letter, i)=>(
                    <div key={i} className="flex font-primary  text-2xl rounded items-center justify-center w-12 h-12 border border-gray-300 m-1.5 text-centers uppercase font-semibold">{letter}</div>
                ))}
                {[...Array(5 - separatedLetters.length)].map((_, i) => (
                    <div key={i} className="flex font-primary  rounded text-2xl  items-center justify-center w-12 h-12 border border-gray-300 m-1.5 text-centers uppercase font-semibold"></div>
                ))}
            </div>
        )
    }
    
    return(
        <div className="text-center flex justify-center"> 
            {Array.from({ length: 5 }, (_, i) => (
        <div key={i} className="flex font-primary  rounded items-center text-2xl justify-center w-12 h-12 border border-gray-300 m-1.5 text-centers uppercase font-semibold"></div>
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