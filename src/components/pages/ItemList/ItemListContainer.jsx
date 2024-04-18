import { useEffect, useState } from "react";
import { getProducts, products } from "../../../ProductsMock";
import ItemList from "./ItemList";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProducts().then((resp) => {
      setItems(resp);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {isLoading ? <h2>Cargando Productos..</h2> : <ItemList items={items} />}
    </>
  );
};
