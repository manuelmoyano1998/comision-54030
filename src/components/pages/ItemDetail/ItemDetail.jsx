import React from "react";
import { Link } from "react-router-dom";
import ItemCountContainer from "../../common/ItemCount/ItemCountContainer";
import "./ItemDetail.css";

export const ItemDetail = ({
  title,
  price,
  description,
  image,
  stock,
  category,
}) => {
  return (
    <div className="detailBg">
      <div className="detailCard">
        <div className="detailImage">
          <img src={image} alt="" />
        </div>
        <div className="detail">
          <p>Nombre: {title} </p>
          <p>Precio: {price}</p>
          <p>Color: {description} </p>
          <p>Talle: {category} </p>
          <p>Stock: {stock} </p>
          <div>
            <ItemCountContainer stock={stock} />
          </div>
        </div>
      </div>

      <Link to={"/"}>
        <button>Volver</button>
      </Link>
    </div>
  );
};
