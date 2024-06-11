import { useState } from 'react'
import './paso1.css'
import Paso1 from './pasos/Paso1';
import Paso2 from './pasos/Paso2';

export default function Wizard() {
    const [currStep, setCurrStep] = useState(0);

    const handleNext = () => {
        setCurrStep(next => next + 1);
    }

    const handlePrev = () => {
        setCurrStep( prev => prev - 1);
    }

    const renderContent = (step) => {
        switch(step){
            case 0:
                return <Paso1></Paso1>
            case 1:
                return <Paso2></Paso2>
        }
    }

    return(
<>
        <div className="container">
            {
                renderContent(currStep)
            }
        </div>
        <div className="flex">
            <button 
                onClick={handlePrev}
                disabled={currStep === 0}
            >
                Anterior
            </button>
            <button 
                onClick={handleNext}
                disabled={currStep === 1}
            >
                Siguiente
            </button>
        </div>
</>
    )
}