import ItemCountContainer from "./components/common/ItemCount/ItemCountContainer";
import { Navbar } from "./components/layout/Navbar";
import { ItemDetailContainer } from "./components/pages/ItemDetail/itemDetailContainer";
import { ItemListContainer } from "./components/pages/ItemList/ItemListContainer";
import { FetchingDataContainer } from "./components/pages/fetchingData/fetchingDataContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
      {/* <FetchingDataContainer /> */}
    </>
  );
};

export default App;
