import { ProductCard } from "../../common/ProductCard";

const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
      <h3>Productos</h3>
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
  );
};

export default ItemList;
