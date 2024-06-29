function ItemListContainer({ greetings }) {
  const categories = [
    {
      id: 1,
      name: "Blazers",
      img: "https://static.zara.net/assets/public/6ae1/7eb3/693d4516adad/9a4668c137fc/02439595811-e1/02439595811-e1.jpg?ts=1708016917920&w=414",
    },
    {
      id: 2,
      name: "Skirts",
      img: "https://static.zara.net/assets/public/44bd/e278/29f14bcca506/0a0585f4a4d9/02123318704-e1/02123318704-e1.jpg?ts=1705594260585&w=414",
    },
    {
      id: 3,
      name: "Dresses",
      img: "https://static.zara.net/assets/public/8660/6ee8/eded496aa643/90c523690713/04387047743-e1/04387047743-e1.jpg?ts=1713339562718&w=414",
    },
    {
      id: 4,
      name: "Jeans",
      img: "https://static.zara.net/assets/public/6054/8e5b/f2a84b51ad5a/e1e2f69e5886/06688011400-e1/06688011400-e1.jpg?ts=1708090670512&w=384",
    },
    {
      id: 5,
      name: "Accesories",
      img: "https://static.zara.net/assets/public/7f25/aff5/15b5407a89c9/926e2b4e424b/04646007802-e1/04646007802-e1.jpg?ts=1709050353927&w=414",
    },
  ];

  return (
    <>
      <ul>
        <hr/>
        <h2>{greetings}</h2>
        <hr/>
        {categories.map((category, index) => (
          <div
            key={category.id}
            className="card"
            style={{
              width: "18rem",
              display: "inline-block",
              margin: "50px 15px",
            }}
          >
            <img
              src={category.img}
              className="card-img-top"
              alt={category.name}
            />
            <div className="card-body">
              <h5 className="card-title">{category.name}</h5>
              <button href="#" className="btn btn-primary">
                Add{" "}
              </button>
            </div>
          </div>
        ))}
      </ul>
    </>
  );
}

export default ItemListContainer;
