import './App.css'
import Wizard from './wizard/wizard'

function App() {


  return (
    <>

      <div class="header">
        <img src="" alt="" />
        <h1 class="titulo">Turnero</h1>
      </div>

      <div id="pasos" className="content">
        <Wizard></Wizard>
      </div>
    </>
  )
}
//para vincular a un espacio de la pagina se usa la etiqueta <a> con vinculo de id 

export default App
