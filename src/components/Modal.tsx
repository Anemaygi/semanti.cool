import React from 'react'

interface ButtonProps {
    text: string;
    action: () => void;
  }
  

const PrimaryButton: React.FC<ButtonProps> = ({text, action}) => {
    return (
        <div onClick={action}>
                    {text}
        </div>
    );
};

const SecondaryButton: React.FC<ButtonProps> = ({text, action}) => {
    return (
        <div onClick={action}>
                    {text}
        </div>
    );
};

interface ModalProps{
    setModalState: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalGanhou: React.FC<ModalProps> = ({setModalState}) => {

    return (
        
        <div>
                    Ganhou 
                    <PrimaryButton text={"Jogar dnv"} action={()=>console.log("a")} />
                    <SecondaryButton text={"Cansei"} action={()=>setModalState(false)}  />
        </div>

    );
};

const Modal: React.FC<ModalProps> = ({setModalState}) => {

    return (
        
        <div className="absolute bg-red-500/50 h-full w-full bottom-0 left-0 overflow-hidden">
            <div className="relative flex items-center justify-center w-full h-full">
                <div className="bg-red-700 p-5 rounded text-white"> 
                    <ModalGanhou setModalState={setModalState} />
                </div>
            </div>
        </div>

    );
};

export default Modal;

