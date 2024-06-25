import React, { useState, useEffect } from 'react';
import './paso1.css';
import Paso1 from './pasos/Paso1';
import Paso2 from './pasos/Paso2';
import Paso3 from './pasos/Paso3';

export default function Wizard({ onStepChange }) {
    const [currStep, setCurrStep] = useState(0);

    useEffect(() => {
        onStepChange(currStep);
    }, [currStep, onStepChange]);

    const handleNext = () => {
        setCurrStep(next => next + 1);
    };

    const handlePrev = () => {
        setCurrStep(prev => prev - 1);
    };

    const renderContent = (step) => {
        switch(step) {
            case 0:
                return <Paso1 />;
            case 1:
                return <Paso2 />;
            case 2:
                return <Paso3 />;
         
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
                    disabled={currStep === 0}
                >
                    Anterior
                </button>
                <button 
                    className="siguiente"
                    onClick={handleNext}
                    disabled={currStep === 2}
                >
                    Siguiente
                </button>
            </div>
        </>
    );
}

