import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CheckoutContext } from "../context/CheckoutContext";
import { AppPizzaContext } from "../context/AppPizzaContext";
import Button from "react-bootstrap/Button";
const ProductDetail = () => {
  const { id } = useParams();
  const { pizza } = useContext(AppPizzaContext);
  const { addItemToCart } = useContext(CheckoutContext);

  useEffect(() => {
    console.log(typeof id);
  }, [id, pizza]);
  
  return (
    <>
      {pizza
        .filter((product) => product.id === id)
        .map((product, i) => (
          <div key={i}>
            <section>
              <div>
                <img src={product.img} alt=""></img>
              </div>
              <div className="detailsPizza">
                <h1 className="productName">{product.name}</h1>
                <p>{product.desc}</p>
                <p>Ingredientes:</p>
                <p>ð{product.ingredients[0]}</p>
                <p>ð{product.ingredients[1]}</p>
                <p>ð{product.ingredients[2]}</p>
                <p>ð{product.ingredients[3]}</p>
                <h1>Precio: ${product.price}</h1>
                <Button
                variant="primary"
                onClick={() => addItemToCart(product.id)}
              >
                AÃ±adirðï¸
              </Button>
              </div>
            </section>
          </div>
        ))}
    </>
  );
};

export default ProductDetail;
