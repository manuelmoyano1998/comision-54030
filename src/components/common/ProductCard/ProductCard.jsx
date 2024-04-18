import "./ProductCard.css";
import { Link } from "react-router-dom";

export const ProductCard = ({ id, image, title, price }) => {
  return (
    <div className="card">
      <img src={image} alt="" className="imgcard" />
      <h2>{title}</h2>
      <h3>{price}$</h3>
      <Link to={`/item/${id}`}>
        <button>Detalle</button>
      </Link>
    </div>
  );
};
