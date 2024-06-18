import React from 'react'
import './Paso2.css'

export default function Paso2() {
  return (
    <div>
      <h1 id="ja">Registration Form</h1>
    <p id="ja">Please fill out this form with the required information</p>
    <form method="post" action=''>
      <fieldset>
        <label for="first-name">Ingrese el nombre del paciente: <input id="first-name" name="first-name" type="text" required /></label>
        <label for="last-name">Ingrese el apellido del paciente: <input id="last-name" name="last-name" type="text" required /></label>
        <label for="email">Ingrese Email: <input id="email" name="email" type="email" required /></label>
        <label for="age">Ingrese la edad : <input id="age" type="number" name="age" min="13" max="120" /></label>
      </fieldset>
      <label for="terms-and-conditions">
        <input class="inline" id="terms-and-conditions" type="checkbox" required name="terms-and-conditions" /> I accept the <a href="https://www.freecodecamp.org/news/terms-of-service/">terms and conditions</a>
      </label>
      </form> <input type="submit" value="Comprobar Informacion" />
    </div>
    )
}
