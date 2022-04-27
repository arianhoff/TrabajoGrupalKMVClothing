import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import "../ItemCart/index.css";

const ItemCart = ({ item }) => {
  const { deleteItemCart, addItemToCart } = useContext(CartContext);

  return (
    <div className="cartItem">
      <img src={item.img} alt={item.name} />
      <div className="dataContainer">
        <div>
          <div className="left">
          <h3>{item.info}</h3>
          </div>
          <div className="buttons">
            <button onClick={() => addItemToCart(item)} className="buttonOne">AGREGAR</button>
            <button onClick={() => deleteItemCart(item)} className="buttonOne">SACAR</button>
          </div>
        </div>
        <div className="rigth">
          <div>Cantidad: {item.amount}</div>
          <div>
          <p>Total: ${item.amount * item.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
