import { useContext } from "react";
import { CheckoutContext } from "../context/CheckoutContext";
const Checkout = () => {
  const { product } = useContext(CheckoutContext);

  return (
    <>
      <h1>Detalles del pedido:</h1>
      {product.map((products, index) => (
        <div className="cartProducts" key={index}>
          <div className="firstItem">
            <img
              src={products.img}
              className="imageDetail"
              alt={products.name}
            ></img>
            <p>{products.name}</p>
            
          </div>
          <div className="secondItem">
            <p className="totalPrice">Totel: ${products.cantidad * products.price}</p>
            <p>Cantidad: {products.cantidad}</p>
            
          </div>
        </div>
      ))}
    </>
  );
};

export default Checkout;
