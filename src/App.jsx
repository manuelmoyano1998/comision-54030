import {Navbar} from "./components/layout/Navbar"
import { ItemListContainer } from "./components/pages/ItemListContainer"

const App = ()=>{

  return (
      <div> 
        <Navbar/>
        <ItemListContainer greeting={"Bienvenidos a Inmobiliaria Moyano"} />

      </div>
  )
    
}

export default App
 