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
        {items.map(({ id, image, title, description, price }) => {
          return (
            <ProductCard
              key={id}
              image={image}
              title={title}
              description={description}
              price={price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ItemList;
