import React, { useState } from "react";
import "./styles.css";
import { fetchOrder } from "./api/order";

const App = () => {
  const [id, setId] = useState();
  const [user, setUser] = useState({});
  const [products, setProducts] = useState([]);

  const handleInputChange = (e) => {
    const name = e.target.value;
    setId(name);
  };

  const findUserById = (e) => {
    e.preventDefault();
    fetchOrder(id)
      .then((res) => {
        setProducts(res.body.data.order.products);
        setUser(res.body.data.order.user);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div class="flex-container">
        <div class="input">
          <h3 class="get-order">Get Order By Id</h3>
          <form onSubmit={findUserById}>
            <input name="id" onChange={handleInputChange}></input>
            <button type="submit">Retrieve</button>
          </form>
        </div>
        <div class="information">
          <h3>Order Information</h3>
          <p>User: {user.name}</p>
          <br />
          <p>Products: </p>
          {products.map((product) => {
            return (
              <ul key={product.id}>
                <li>
                  ID: {product.id}, Quantity: {product.quantity}
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default App;
