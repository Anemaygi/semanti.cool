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

    
    return (
        <div className="my-10 flex-col w-full ">
            <div className="flex items-center justify-center">
                {letters.slice(0, 10).map((letter) => (
                    <div className={`py-4 font-primary font-black px-3 text-sm text-${letter.color} m-1 border-${letter.color} border rounded flex items-center justify-center`} 
                        key={letter.key}
                        onClick={()=>onClickKey(letter.key)}
                        >
                        {letter.key}
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-center">
                {letters.slice(10, 19).map((letter) => (
                    <div className={`py-4 font-primary font-black px-3 m-1 text-sm border-${letter.color} text-${letter.color} border rounded flex items-center justify-center`} key={letter.key}
                        onClick={()=>onClickKey(letter.key)}
                        >
                        {letter.key}
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-center">
                {letters.slice(19).map((letter) => (
                    <div className={`py-4 font-primary font-black px-3 m-1 text-sm border-${letter.color} text-${letter.color} border rounded flex items-center justify-center`} key={letter.key}
                        onClick={()=>onClickKey(letter.key)}
                        >
                        {letter.key == 'Backspace' ? <PiBackspaceLight size={17} /> : letter.key}
                    </div>
                ))}
            </div>
        </div>

    );
};

export default Keyboard;

