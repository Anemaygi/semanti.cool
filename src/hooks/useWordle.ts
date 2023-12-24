import { useState } from 'react'
import wordsData from '../data/words.json'


const keys = [
    { key: 'q', color: 'white' },
    { key: 'w', color: 'white' },
    { key: 'e', color: 'white' },
    { key: 'r', color: 'white' },
    { key: 't', color: 'white' },
    { key: 'y', color: 'white' },
    { key: 'u', color: 'white' },
    { key: 'i', color: 'white' },
    { key: 'o', color: 'white' },
    { key: 'p', color: 'white' },
    { key: 'a', color: 'white' },
    { key: 's', color: 'white' },
    { key: 'd', color: 'white' },
    { key: 'f', color: 'white' },
    { key: 'g', color: 'white' },
    { key: 'h', color: 'white' },
    { key: 'j', color: 'white' },
    { key: 'k', color: 'white' },
    { key: 'l', color: 'white' },
    { key: 'Enter', color: 'white' },
    { key: 'z', color: 'white' },
    { key: 'x', color: 'white' },
    { key: 'c', color: 'white' },
    { key: 'v', color: 'white' },
    { key: 'b', color: 'white' },
    { key: 'n', color: 'white' },
    { key: 'm', color: 'white' },
    { key: 'Backspace', color: 'white' },
]

function removeAccentsAndUpperCase(str: string) {
    return str
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toUpperCase()
      .replace("Ç", "C");
  }
  const modifiedSolutions = wordsData.solutions.map(removeAccentsAndUpperCase);

const useWordle = (solution: string) => {
  const [turn, setTurn] = useState(0) 
  const [currentGuess, setCurrentGuess] = useState('')
  const [guesses, setGuesses] = useState([...Array(6)]) 
  const [history, setHistory] =  useState<string[]>([]) 
  const [isCorrect, setIsCorrect] = useState(false)
  const [letters, setLetters] = useState(keys);
  const [alertStatus, setAlertStatus] = useState("");

    function removeAccents(str:string) {
        return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    }
    
    

  const formatGuess = () => {
    let solutionArray: (string | null)[] = [...removeAccents(solution).toUpperCase()]
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


  const addNewGuess = (formattedGuess: Array<{key: string, color: string}>) => {
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

    setLetters((prev) => {
        let newKeys = [...prev]

        formattedGuess.map((letter: { key: string; color: string })=>{
            const searchLetter = letter.key.toLowerCase()
            const idx = newKeys.findIndex((item) => item.key === searchLetter);
            const currentColor = newKeys[idx].color
            let newColor = currentColor
            if (letter.color == "green") newColor="green-300"
            if (letter.color == "yellow" && currentColor != "green-300") newColor="yellow-300"
            if (letter.color === "grey" && currentColor != "green-300" && currentColor != "yellow-300") newColor="gray-600"
            newKeys[idx] = { key: searchLetter, color: newColor }
        })
        return newKeys
    })
    setCurrentGuess('')
  }


  

  const handleKeyup = ({ key }: KeyboardEvent) => {
    
    if(key==='Enter'){

        if(turn > 5){
            return
        }

        if(history.includes(currentGuess)){
            console.log('already tried '+currentGuess)
            setAlertStatus('sameWord')
            return
        }

        if(!modifiedSolutions.includes(currentGuess)){
            setAlertStatus('wordNotAccept')
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
    }
    if (key === "Backspace" && currentGuess.length>=1){
        setCurrentGuess((prev)=>{
            return prev.slice(0, -1)
        })
    }
  }


  const clickKey = ( key : string) => {

    if (isCorrect) return

    if(key==='Enter'){

        if(turn > 5){
            return;
        }

        if(!modifiedSolutions.includes(currentGuess)){
            setAlertStatus('wordNotAccept')
            return
        }

        if(history.includes(currentGuess)){
            setAlertStatus('sameWord')
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
    }
    if (key === "Backspace" && currentGuess.length>=1){
        setCurrentGuess((prev)=>{
            return prev.slice(0, -1)
        })
    }
  }

  return {turn, currentGuess, guesses, isCorrect, handleKeyup, clickKey, letters, setAlertStatus, alertStatus} // N ESQUECER DO  usedKeys
}

export default useWordle