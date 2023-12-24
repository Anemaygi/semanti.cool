import React from 'react'

interface ButtonProps {
    text: string;
    action: () => void;
  }
  

const PrimaryButton: React.FC<ButtonProps> = ({text, action}) => {
    return (
        <div 
            className='cursor-pointer bg-white text-cyan-900 p-4 rounded shadow-lg font-bold'
            onClick={action}>
                    {text}
        </div>
    );
};

const SecondaryButton: React.FC<ButtonProps> = ({text, action}) => {
    return (
        <div 
            className='cursor-pointer font-black drop-shadow-lg  p-4 rounded '
            onClick={action}>
                    {text}
        </div>
    );
};

interface ModalProps{
    setModalState: React.Dispatch<React.SetStateAction<boolean>>;
    solution: string;
    turns: number;
    isCorrect: boolean;
}

interface ModalContent{
    setModalState: React.Dispatch<React.SetStateAction<boolean>>;
    solution: string;
    turns: number;
}

const ModalPerdeu: React.FC<ModalContent> = ({setModalState, solution}) => {

    return (
        
        <div className="w-full font-primary justify-center flex-col flex items-center">
            <p className="text-xl font-black p-2"> Poxa! :( </p>
            <div className="p-4">A palavra era <b>{solution.toUpperCase()}</b> </div>
            <div className="flex w-full justify-center mt-4 items-center">
                <div className="px-4"><PrimaryButton text={"Jogar novamente"} action={()=>location.reload()} /></div>
                <div className="px-4"><SecondaryButton text={"Cancelar"} action={()=>setModalState(false)}  /></div>
            </div>
        </div>

    );
};


const ModalGanhou: React.FC<ModalContent> = ({setModalState, solution, turns}) => {

    return (
        
        <div className="w-full font-primary justify-center flex-col flex items-center">
            <p className="text-xl font-black p-2"> Parabéns! Você acertou a palavra! </p>
            <div className="p-4">A palavra era <b>{solution.toUpperCase()}</b> e você acertou em <b>{turns}</b> turno!</div>
            <div className="flex w-full justify-center mt-4 items-center">
                <div className="px-4"><PrimaryButton text={"Jogar novamente"} action={()=>location.reload()} /></div>
                <div className="px-4"><SecondaryButton text={"Cancelar"} action={()=>setModalState(false)}  /></div>
            </div>
        </div>

    );
};

const Modal: React.FC<ModalProps> = ({setModalState, solution, turns, isCorrect}) => {

    return (
        
        <div className="absolute bg-gray-900/70 h-full w-full bottom-0 left-0 overflow-hidden">
            <div className="relative flex items-center justify-center w-full h-full">
                <div className="bg-cyan-900 p-16 m-4 rounded-lg text-white shadow-xl"> 
                    { isCorrect ?                        
                        <ModalGanhou solution={solution} setModalState={setModalState} turns={turns} /> :
                    <ModalPerdeu solution={solution} setModalState={setModalState} turns={turns} />}
                </div>
            </div>
        </div>

    );
};

export default Modal;

