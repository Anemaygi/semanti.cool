import React from 'react'
import { PiBackspaceLight } from "react-icons/pi";

interface Letter{
    key: string,
    color: string,
}

interface KeyboardProps{
    letters : Array<Letter>,
    onClickKey: (key: string) => void;
}

const Keyboard: React.FC<KeyboardProps> = ({ letters, onClickKey }) => {
    const getColorValue = (colorClass:string) => {
        // Map color classes to actual color values
        const colorMap : Record<string, string> = {
          'gray-200': '#e5e7eb',
          'gray-600': '#4b5563',
          'green-300': '#86efac',
          'yellow-300': '#fde047',
        };
      
        return colorMap[colorClass] || colorClass;
      };
    
    return (
        <div className="my-10 flex-col w-full ">
            <div className="flex items-center justify-center">
                {letters.slice(0, 10).map((letter) => (
                    <div className={`py-4 shadow-lg font-primary font-black px-3 text-sm m-1 border rounded flex items-center justify-center`} 
                    style={{ borderColor: getColorValue(letter.color) }}
                        key={letter.key}
                        onClick={()=>onClickKey(letter.key)}
                        >
                        {letter.key.toUpperCase()}
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-center">
                {letters.slice(10, 19).map((letter) => (
                    <div className={`py-4 shadow-lg font-primary font-black px-3 m-1 text-sm border rounded flex items-center justify-center`} key={letter.key}
                    style={{ borderColor: getColorValue(letter.color) }}    
                    onClick={()=>onClickKey(letter.key)}
                        >
                        {letter.key.toUpperCase()}
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-center">
                {letters.slice(19).map((letter) => (
                    <div className={`py-4 shadow-lg font-primary font-black px-3 m-1 text-sm border rounded flex items-center justify-center`} key={letter.key}
                    style={{ borderColor: getColorValue(letter.color) }}    
                    onClick={()=>onClickKey(letter.key)}
                        >
                        {letter.key == 'Backspace' ? <PiBackspaceLight size={17} /> : letter.key.toUpperCase()}
                    </div>
                ))}
            </div>
        </div>

    );
};

export default Keyboard;

