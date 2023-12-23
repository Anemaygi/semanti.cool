import { useState } from 'react'



const useWordle = (solution: string) => {
  const [turn, setTurn] = useState(0) 
  const [currentGuess, setCurrentGuess] = useState('')
  const [guesses, setGuesses] = useState([...Array(6)]) 
  const [history, setHistory] =  useState<string[]>([]) 
  const [isCorrect, setIsCorrect] = useState(false)
//   const [usedKeys, setUsedKeys] = useState<{ [key: string]: string }>({})

 
  const formatGuess = () => {
    let solutionArray: any[] = [...solution.toUpperCase()]

    let formattedGuess = [...currentGuess].map((l) => {
      return {key: l, color: 'grey'}
    })
    
    formattedGuess.forEach((l,i) => {
        if (solutionArray[i] == l.key){
            formattedGuess[i].color = 'green'
            solutionArray[i] = null
        }
    })

    formattedGuess.forEach((l, i) => {
        if(solutionArray.includes(l.key) && l.color !== 'green'){
            formattedGuess[i].color = 'yellow'
            solutionArray[solutionArray.indexOf(l.key)] = null
        }

    })

    return formattedGuess
  }


  const addNewGuess = (formattedGuess: object) => {
    if (currentGuess.toLowerCase() === solution){
        setIsCorrect(true)
    }
    setGuesses((prevGuesses) => {
        let newGuesses = [...prevGuesses]
        newGuesses[turn] = formattedGuess
        return newGuesses
    })
    setHistory((prevHistory) => {
        return [...prevHistory, currentGuess]
    })
    setTurn((prevTurn) => {
        return prevTurn+1
    })
    
    // setUsedKeys((prevUsedKeys) => {
    //     let newKeys = {...prevUsedKeys}
        
    //     Object.entries(formattedGuess).forEach((letter:any)=>{
    //         const currentColor = newKeys[letter.key]
    //         if (letter.color === 'green'){
    //             newKeys[letter.key] = 'bg-green-300'
    //             return
    //         }
    //         if (letter.color === 'yellow' && currentColor !== 'green'){
    //             newKeys[letter.key] = 'bg-yellow-300'
    //             return
    //         }
    //         if (letter.color === 'grey' && currentColor !== 'green' && currentColor !== 'yellow'){
    //             newKeys[letter.key] = 'bg-gray-600'
    //             return
    //         }
    //     })
    //     console.log("a"+newKeys["E"])
    //     return newKeys
    // })
    setCurrentGuess('')
  }

  const handleKeyup = ({ key }: React.KeyboardEvent<HTMLInputElement>) => {
    
    if(key==='Enter'){

        if(turn > 5){
            console.log('use all guesses')
            return;
        }

        if(history.includes(currentGuess)){
            console.log('already tried')
            return
        }

        if(currentGuess.length !== 5){
            console.log('must be 5 letter long')
            return
        }
        const formatted =  formatGuess()
        addNewGuess(formatted)
    }
    if (key === 'ç') { key = "c" }
    if (/^[A-Za-z]$/.test(key)){
        if (currentGuess.length < 5){
            setCurrentGuess((prev) => {
                return prev + key.toUpperCase()
            })
        }
        console.log(key)
    }
    if (key === "Backspace" && currentGuess.length>=1){
        setCurrentGuess((prev)=>{
            return prev.slice(0, -1)
        })
    }
  }

  return {turn, currentGuess, guesses, isCorrect,handleKeyup} // N ESQUECER DO  usedKeys
}

export default useWordle