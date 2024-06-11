import './App.css'
import Wizard from './wizard/wizard'

function App() {
 

  return (
    <>

      <div class="header">
        <div className="container flex">
        <div id="instrucciones">
                                <img id="logo" class="img-responsive" src="http://turnero.tigre.gob.ar/assets/img/logo-prensa.png" alt="Logo Tigre"/>
                                <div class="clearfix"></div>
                                <p class="font-size-h3 mb-5 text-dark text-center">¿Cómo reservar tu turno?</p>
                                <ol class="text-dark">
                                    <li>Seleccioná el trámite que tenés que realizar.</li>
                                    <li>Elegí un día del calendario y un horario que se encuentre disponible.</li>
                                    <li>Completá tu información personal y una casilla de correo electrónico para recibir los detalles del turno solicitado.</li>
                                </ol>
                            </div>
        </div>
      </div>
      <div className="content">
        <Wizard></Wizard>
      </div>
    </>
  )
}
//para vincular a un espacio de la pagina se usa la etiqueta <a> con vinculo de id 

export default App
