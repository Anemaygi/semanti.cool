import { useEffect, useState } from 'react'
import './App.css'
import wordsData from './data/words.json'

function App() {
  const [solution, setSolution] = useState("");
  
  useEffect(() => {
    const randomWord = wordsData.solutions[Math.floor(Math.random() * wordsData.solutions.length)];
    setSolution(randomWord);
  }, []);


  return (
    <div>
      <div className="w-full p-8 flex flex-col items-center justify-center">
        <p>Semanti.cool</p>
        <br/>
        { solution }
      </div>
    </div>
  )
}

export default App
