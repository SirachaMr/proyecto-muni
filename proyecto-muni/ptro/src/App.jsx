import './App.css'
import Wizard from './wizard/wizard'

function App() {


  return (
    <>
    
      <div class="header">
        <img src="https://github.com/SirachaMr/proyecto-muni/assets/169813070/0fea0be4-f97e-4eca-81ef-743ce781863a" alt="" />
       
        <h1 class="puto">acavaelcositoquenumeralospasos</h1>
      </div>

      <div id="pasos" className="content">
        <Wizard></Wizard>
      </div>    
      <footer><p className="footer">copiright by edgardo martines gomez vilca</p></footer>
    </>
  )
}
//para vincular a un espacio de la pagina se usa la etiqueta <a> con vinculo de id 

export default App
