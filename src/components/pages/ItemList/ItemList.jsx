import { ProductCard } from "../../common/ProductCard/ProductCard";
import "./ItemList.css";

const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div className="product-list">
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        {items.map(({ id, image, title, price }) => {
          return (
            <ProductCard
              key={id}
              id={id}
              image={image}
              title={title}
              price={price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ItemList;
