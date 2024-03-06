import ItemCountContainer from "./components/common/ItemCount/ItemCountContainer";
import { Navbar } from "./components/layout/Navbar";
import { ItemListContainer } from "./components/pages/ItemList/ItemListContainer";
import { FetchingDataContainer } from "./components/pages/fetchingData/fetchingDataContainer";

const App = () => {
  return (
    <>
      <Navbar />
      <ItemListContainer />
      <ItemCountContainer stock={10} />
      <FetchingDataContainer />
    </>
  );
};

export default App;
