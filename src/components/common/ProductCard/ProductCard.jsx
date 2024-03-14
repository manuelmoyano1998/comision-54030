import "./ProductCard.css";

export const ProductCard = ({ image, title, description, price }) => {
  return (
    <div className="card">
      <img src={image} alt="" className="imgcard" />
      <h2>{title}</h2>
      <h3>{description} </h3>
      <h3>{price}$</h3>
    </div>
  );
};
