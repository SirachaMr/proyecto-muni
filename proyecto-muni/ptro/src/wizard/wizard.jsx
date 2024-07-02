import React, { useState, useEffect } from 'react';
import './paso1.css';
import Paso1 from './pasos/Paso1';
import Paso2 from './pasos/Paso2';
import Paso3 from './pasos/Paso3';
import Paso4 from './pasos/paso4';
import Paso5 from './pasos/Paso5';

export default function Wizard({ onStepChange }) {
    const [currStep, setCurrStep] = useState(0);


    const validate = () => {
        if(currStep == 0 || currStep == 4) {
            return true
        }
        

        return false;
    }

    useEffect(() => {
        onStepChange(currStep);
    }, [currStep, onStepChange]);

    const handleNext = () => {
        setCurrStep(next => next + 1);
    };

    const handlePrev = () => {
        setCurrStep(prev => prev - 1);
    };

    const handleNew = () => {
        setCurrStep(0);
    };

    const renderContent = (step) => {
        switch(step) {
            case 0:
                return <Paso1 />;
            case 1:
                return <Paso2 />;
            case 2:
                return <Paso3 />;
            case 3:
                return <Paso4 />;  
            case 4:
                return <Paso5 />; 
         
        }
    };

    return (
        <>
            <div className="container">
                {renderContent(currStep)}
            </div>
            <div className="flex">
                <button 
                    className="anterior"
                    onClick={handlePrev}
                    hidden={currStep === 0 || currStep === 4}
                >
                    Anterior
                </button>
                <button 
                    className="siguiente"
                    onClick={handleNext}
                    hidden={currStep === 4}
                >
                    Siguiente
                </button>

                <button
                    className='Nuevo'
                    onClick={handleNew}
                    hidden={currStep !== 4}>
                    Nuevo
                </button>
            </div>
        </>
    );
}

