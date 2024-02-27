import ItemCountContainer from "./components/common/ItemCount/ItemCountContainer";
import { Navbar } from "./components/layout/Navbar";
import { ItemListContainer } from "./components/pages/ItemListContainer";

const App = () => {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting={"Bienvenidos a Inmobiliaria Moyano"} />
      <ItemCountContainer stock={10} />
    </>
  );
};

export default App;
