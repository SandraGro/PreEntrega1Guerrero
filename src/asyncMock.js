const products = [
    {
      id: 1,
      name: "Blazers",
      price: 150,
      category: "clothing",
      img: "https://static.zara.net/assets/public/6ae1/7eb3/693d4516adad/9a4668c137fc/02439595811-e1/02439595811-e1.jpg?ts=1708016917920&w=414",
      stock: 20,
      description: "Stylish blazers for formal occasions."
    },
    {
      id: 2,
      name: "Skirts",
      price: 80,
      category: "clothing",
      img: "https://static.zara.net/assets/public/44bd/e278/29f14bcca506/0a0585f4a4d9/02123318704-e1/02123318704-e1.jpg?ts=1705594260585&w=414",
      stock: 15,
      description: "Trendy skirts suitable for any event."
    },
    {
      id: 3,
      name: "Dresses",
      price: 120,
      category: "clothing",
      img: "https://static.zara.net/assets/public/8660/6ee8/eded496aa643/90c523690713/04387047743-e1/04387047743-e1.jpg?ts=1713339562718&w=414",
      stock: 10,
      description: "Elegant dresses for special occasions."
    },
    {
      id: 4,
      name: "Jeans",
      price: 100,
      category: "clothing",
      img: "https://static.zara.net/assets/public/6054/8e5b/f2a84b51ad5a/e1e2f69e5886/06688011400-e1/06688011400-e1.jpg?ts=1708090670512&w=384",
      stock: 25,
      description: "Comfortable jeans for everyday wear."
    },
    {
      id: 5,
      name: "Accesories",
      price: 200,
      category: "accessories",
      img: "https://static.zara.net/assets/public/7f25/aff5/15b5407a89c9/926e2b4e424b/04646007802-e1/04646007802-e1.jpg?ts=1709050353927&w=414",
      stock: 30,
      description: "Stylish accessories to complement any outfit."
    },
    {
        id: 6,
        name: "Accesories",
        price: 200,
        category: "accessories",
        img: "https://static.zara.net/assets/public/7b56/7cb7/11a04fc1a298/a67dcc8f7515/01903202760-e1/01903202760-e1.jpg?ts=1722327256174&w=210",
        stock: 0,
        description: "Stylish accessories to complement any outfit."
      },
  ];

  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 1000);
    });
  };
  
  export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.filter((prod) => prod.category === categoryId));
      }, 1000);
    });
  };
  
  export const getProductById = (productoId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find((prod) => prod.id === productoId));
      }, 1000);
    });
  };
  