import React from 'react'
import './Paso2.css'

export default function Paso2() {
  return (
    <div>
      <h1 id="ja">Formulario de registro</h1>
    <p id="ja">Por favor complete con la información requerida</p>
    <form method="post" action=''>
      <fieldset>
        <label for="first-name">Ingrese el nombre del paciente: <input id="first-name" name="first-name" type="text" required /></label>
        <label for="last-name">Ingrese el apellido del paciente: <input id="last-name" name="last-name" type="text" required /></label>
        <label for="email">Ingrese Email: <input id="email" name="email" type="email" required /></label>
        <label for="age">Ingrese la edad : <input id="age" type="date" name="age" /></label>
      </fieldset>
    
      </form> 
    </div>
    )
}
