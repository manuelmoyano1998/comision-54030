import { useEffect, useState } from "react";
import { products } from "../../../ProductsMock";
import ItemList from "./ItemList";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const tarea = new Promise((resolve, reject) => {
      resolve(products);
      // reject("Error, algo salio mal")
    });

    tarea
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {});
  }, []);

  return <>{items.length > 0 ? <ItemList items={items} /> : <h1>No hay</h1>}</>;
};
