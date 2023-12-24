import { useEffect, useState } from 'react'
import './App.css'
import wordsData from './data/words.json'
import Game from './components/Game';

function App() {
  const [solution, setSolution] = useState("");
 
  useEffect(() => {
    const randomWord = wordsData.solutions[Math.floor(Math.random() * wordsData.solutions.length)];
    setSolution(randomWord);
  }, []);


  return (
    <div>
      <div className="w-full p-8 flex flex-col items-center justify-center bg-[#3d3e5d] min-h-screen text-white">
        <p>Semanti.cool</p>
        <br/>
        { solution && <Game solution={solution} />}
      </div>
      
    </div>
  )
}

export default App
