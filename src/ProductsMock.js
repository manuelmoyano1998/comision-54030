export let products = [
  {
    id: 1,
    title: "remera vans old school",
    price: 5000,
    description: "negro",
    image:
      "https://res.cloudinary.com/dfofaipbl/image/upload/v1709839988/158889-800-auto_akcjdd.jpg",
    stock: 20,
    category: "talle 41",
  },

  {
    id: 2,
    title: "zapatillas vans",
    price: 40000,
    description: "negro",
    image:
      "https://res.cloudinary.com/dfofaipbl/image/upload/v1709840255/s-l1200_c8b46g.webp",
    stock: 15,
    category: "talle 43",
  },

  {
    id: 3,
    title: "remera Vans",
    price: 8000,
    description: "negro",
    image:
      "https://res.cloudinary.com/dfofaipbl/image/upload/v1709839987/203257553-1-black_exlscp.jpg",
    stock: 10,
    category: "M",
  },
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    } else {
      reject("No hay productos");
    }
  });
};

export const getProduct = (id) => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      const item = products.find((product) => product.id === parseInt(id));
      setTimeout(() => {
        if (item) {
          resolve(item);
        } else {
          reject("No se encuentra el producto con el id " + id);
        }
      }, 2000);
    } else {
      reject("No hay productos");
    }
  });
};
