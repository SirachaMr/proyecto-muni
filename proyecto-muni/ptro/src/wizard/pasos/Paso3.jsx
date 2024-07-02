import React from 'react'

export default function Paso3() {
  return (
    <div>
      <h1 id="ja">Obra Social</h1>
    <p id="ja">Por favor complete con la información requerida</p>
    <form method="post" action=''>
      <fieldset>
        <label for="obra-social">Ingrese su obra social: <input id="obrs" name="obrs" type="text" required /></label>
        <label for="info-de-obrs">Ingrese la información de su obra social: <input id="i-obrs" name="i-obrs" type="text" required /></label>
      </fieldset>
    
      </form> 
    </div>
    )
}