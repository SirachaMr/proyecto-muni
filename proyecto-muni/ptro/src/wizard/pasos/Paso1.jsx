import React from 'react'
import './Paso1.css'

export default function Paso1() {
  return (
        <div id="instrucciones">
          <img id="logo"  src="http://turnero.tigre.gob.ar/assets/img/logo-prensa.png" alt="Logo Tigre"/>
            <p class="lista">¿Cómo reservar tu turno?</p>
            <ol class="lista">
              <li>Completá tu información personal y una casilla de correo electrónico para recibir los detalles del turno solicitado.</li>
              <li>Indique su obra social con toda la información requerida.</li>
              <li>Escoga la especialidad</li>
              <li>Elegí un día del calendario y un horario que se encuentre disponible.</li>
            </ol>
        </div>
  )
}
