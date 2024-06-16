import React from 'react'


export default function Paso3() {
  return (
    <div>
        <label for="referrer">Escoja un dia disponible.
          <select id="referrer" name="referrer">
            <option value="">(seleccione uno)</option>
            <option value="1">vienes 13/8</option>
            <option value="2">sabado 14/8</option>
            <option value="3">freeCodeCamp Forum</option>
            <option value="4">Other</option>
          </select>
        </label>
        <label for="referrer">Escoja un horario disponible.
          <select id="referrer" name="referrer">
            <option value="">(seleccione uno)</option>
            <option value="1">9am</option>
            <option value="2">15pm</option>
            <option value="3">freeCodeCamp Forum</option>
            <option value="4">Other</option>
          </select>
        </label>

      
    </div>
  )
}
