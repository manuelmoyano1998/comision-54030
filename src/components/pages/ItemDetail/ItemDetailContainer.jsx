import { useEffect, useState } from "react";
import { getProduct, products } from "../../../ProductsMock";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [itemsDet, setItemsDet] = useState(null);

  useEffect(() => {
    getProduct(id).then((resp) => setItemsDet(resp));
  }, []);

  return <>{itemsDet && <ItemDetail {...itemsDet} />}</>;
};
