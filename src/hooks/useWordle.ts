import { useState } from 'react'

const keys = [
    { key: 'q', color: 'bg-gray-200' },
    { key: 'w', color: 'bg-gray-200' },
    { key: 'e', color: 'bg-gray-200' },
    { key: 'r', color: 'bg-gray-200' },
    { key: 't', color: 'bg-gray-200' },
    { key: 'y', color: 'bg-gray-200' },
    { key: 'u', color: 'bg-gray-200' },
    { key: 'i', color: 'bg-gray-200' },
    { key: 'o', color: 'bg-gray-200' },
    { key: 'p', color: 'bg-gray-200' },
    { key: 'a', color: 'bg-gray-200' },
    { key: 's', color: 'bg-gray-200' },
    { key: 'd', color: 'bg-gray-200' },
    { key: 'f', color: 'bg-gray-200' },
    { key: 'g', color: 'bg-gray-200' },
    { key: 'h', color: 'bg-gray-200' },
    { key: 'j', color: 'bg-gray-200' },
    { key: 'k', color: 'bg-gray-200' },
    { key: 'l', color: 'bg-gray-200' },
    { key: 'Enter', color: 'bg-gray-200' },
    { key: 'z', color: 'bg-gray-200' },
    { key: 'x', color: 'bg-gray-200' },
    { key: 'c', color: 'bg-gray-200' },
    { key: 'v', color: 'bg-gray-200' },
    { key: 'b', color: 'bg-gray-200' },
    { key: 'n', color: 'bg-gray-200' },
    { key: 'm', color: 'bg-gray-200' },
    { key: 'Backspace', color: 'bg-gray-200' },
]

const useWordle = (solution: string) => {
  const [turn, setTurn] = useState(0) 
  const [currentGuess, setCurrentGuess] = useState('')
  const [guesses, setGuesses] = useState([...Array(6)]) 
  const [history, setHistory] =  useState<string[]>([]) 
  const [isCorrect, setIsCorrect] = useState(false)
  const [letters, setLetters] = useState(keys);
//   const [usedKeys, setUsedKeys] = useState<{ [key: string]: string }>({})

function removeAccents(str:string) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  } 

  const formatGuess = () => {
    let solutionArray: any[] = [...removeAccents(solution).toUpperCase()]

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
    console.log("giane ->", formattedGuess)

    setLetters((prev) => {
        let newKeys = [...prev]
        
        formattedGuess.map(wordl => {
            console.log(wordl)
            // TO DO
        })

        return newKeys
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


  const clickKey = ( key : string) => {
    
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

  return {turn, currentGuess, guesses, isCorrect, handleKeyup, clickKey, letters} // N ESQUECER DO  usedKeys
}

export default useWordle