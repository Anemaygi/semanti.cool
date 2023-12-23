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
        <div className="m-2 flex-col w-full">
            <div className="flex items-center justify-center">
                {letters.slice(0, 10).map((letter) => (
                    <div className={`py-4 px-3 m-1 ${letter.color} rounded flex items-center justify-center`} 
                        key={letter.key}
                        onClick={()=>onClickKey(letter.key)}
                        >
                        {letter.key}
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-center">
                {letters.slice(10, 19).map((letter) => (
                    <div className={`py-4 px-3 m-1 ${letter.color} rounded flex items-center justify-center`} key={letter.key}
                        onClick={()=>onClickKey(letter.key)}
                        >
                        {letter.key}
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-center">
                {letters.slice(19).map((letter) => (
                    <div className={`py-4 px-3 m-1 ${letter.color} rounded flex items-center justify-center`} key={letter.key}
                        onClick={()=>onClickKey(letter.key)}
                        >
                        {letter.key == 'Backspace' ? <PiBackspaceLight size={25} /> : letter.key }
                    </div>
                ))}
            </div>
        </div>

    );
};

export default Keyboard;

