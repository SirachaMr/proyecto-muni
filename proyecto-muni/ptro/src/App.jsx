import React, { useState } from 'react';
import './App.css';
import Wizard from './wizard/wizard';

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleStepChange = (step) => {
   if (step == 0){setCurrentStep("");}
   else{setCurrentStep(step);} 
  };

  return (
    <>
      <div className="header">
        <img 
          src="https://github.com/SirachaMr/proyecto-muni/assets/169813070/0fea0be4-f97e-4eca-81ef-743ce781863a" 
          alt="Logo" 
        />
        <div className="pasos"> {currentStep}</div>
      </div>
      
      <div id="pasos" className="content">
        <Wizard onStepChange={handleStepChange}></Wizard>
      </div>
    </>
  );
}

export default App;
