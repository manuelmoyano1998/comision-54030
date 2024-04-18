import { CartWidget } from "../common/CartWidget";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <img
        src="https://res.cloudinary.com/dfofaipbl/image/upload/v1709841539/fashion-logo-clothes-hanger-logo-letter-v-logo-tailor-emblem-wardrobe-icon-design-free-vector_n6616n.jpg"
        alt=""
        style={{ width: "7rem" }}
      />
      <ul
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Link to="/">
          <li>Home</li>
        </Link>
        <li>Remeras</li>
        <li>Zapatillas</li>
        <CartWidget />
      </ul>
    </div>
  );
};
