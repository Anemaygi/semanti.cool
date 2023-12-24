
interface AlertProps{
    alertStatus:string;
}

const Alert: React.FC<AlertProps> = ({alertStatus}) => {

    switch(alertStatus){
        case 'wordNotAccept':
            return (  
                <div className="bg-red-800 shadow-lg p-4 mb-4 font-primary text-center rounded-lg font-black">
                    Essa palavra não é aceita
                </div>
            );
        case 'sameWord':
            return (  
                <div className="bg-red-800 shadow-lg p-4 mb-4 font-primary text-center rounded-lg font-black">
                    Essa palavra já foi utilizada
                </div>
            );
        default:
            return null
    }
    
};

export default Alert;
