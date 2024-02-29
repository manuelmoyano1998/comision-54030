import ItemCountContainer from "./components/common/ItemCount/ItemCountContainer";
import { Navbar } from "./components/layout/Navbar";
import { ItemListContainer } from "./components/pages/ItemList/ItemListContainer";

const App = () => {
  return (
    <>
      <Navbar />
      <ItemListContainer />
      <ItemCountContainer stock={10} />
    </>
  );
};

export default App;
