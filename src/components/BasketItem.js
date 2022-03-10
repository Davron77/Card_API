import React from "react";

function BasketItem(props) {
  const {
    id,
    name,
    price,
    quantity,
    removeFromBasket,
    incrementQuantity,
    decrementQuantity,
  } = props;
  return (
    <li className="collection-item" id={id}>
      {name} x{quantity} = {price}
      <b>$</b>
      <span className="secondary-content">
        <a
          className="waves-effect waves-light btn btnq"
          onClick={() => incrementQuantity(id)}
        >
          <i className="material-icons left">exposure_plus_1</i>add
        </a>
        <a
          className="waves-effect waves-light btn btnq"
          onClick={() => decrementQuantity(id)}
        >
          <i className="material-icons left">exposure_minus_1</i>remove
        </a>
        <i
          className="material-icons basker-delete"
          onClick={() => removeFromBasket(id)}
        >
          delete_forever
        </i>
      </span>
    </li>
  );
}

export default BasketItem;
