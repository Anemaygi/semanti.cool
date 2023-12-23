import React, { useState } from 'react'
import { PiBackspaceLight } from "react-icons/pi";

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
    { key: 'ENTER', color: 'bg-gray-200' },
    { key: 'z', color: 'bg-gray-200' },
    { key: 'x', color: 'bg-gray-200' },
    { key: 'c', color: 'bg-gray-200' },
    { key: 'v', color: 'bg-gray-200' },
    { key: 'b', color: 'bg-gray-200' },
    { key: 'n', color: 'bg-gray-200' },
    { key: 'm', color: 'bg-gray-200' },
    { key: 'BACKSPACE', color: 'bg-gray-200' },
]

// interface KeyboardProps{
//     usedKeys : any,
// }

const Keyboard: React.FC = () => {
    const [letters, setLetters] = useState(keys);
    return (
        <div className="m-2 flex-col w-full">
            <div className="flex items-center justify-center">
                {letters.slice(0, 10).map((letter) => (
                    <div className={`py-4 px-3 m-1 bg-gray-200 rounded flex items-center justify-center`} key={letter.key}>
                        {letter.key}
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-center">
                {letters.slice(10, 19).map((letter) => (
                    <div className={`py-4 px-3 m-1 bg-gray-200 rounded flex items-center justify-center`} key={letter.key}>
                        {letter.key}
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-center">
                {letters.slice(19).map((letter) => (
                    <div className={`py-4 px-3 m-1 bg-gray-200 rounded flex items-center justify-center`} key={letter.key}>
                        {letter.key == 'BACKSPACE' ? <PiBackspaceLight size={25} /> : letter.key }
                    </div>
                ))}
            </div>
        </div>

    );
};

export default Keyboard;

