import { CartWidget } from "../common/CartWidget";

export const Navbar = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "lightblue",
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
        <li>inicio</li>
        <li>inmuebles</li>
        <CartWidget />
      </ul>
    </div>
  );
};
