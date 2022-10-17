import { useContext } from "react";
import Card from "react-bootstrap/Card";
import { AppPizzaContext } from "../context/AppPizzaContext";
import { CheckoutContext } from "../context/CheckoutContext";
import { useNavigate } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import Button from "react-bootstrap/Button";
import banner from '../img/banner.png'
const Home = () => {
  const navigate = useNavigate();
  const { pizza } = useContext(AppPizzaContext);

  const navigatePizza = (id) => {
    navigate(`/pizza/${id}`);
  };
  const { addItemToCart } = useContext(CheckoutContext);

  return (
    <>
    <Carousel>
    <Carousel.Item>
      <img
        className="imgBanner"
        src={banner}
        alt="Banner de pizza"
      />
      <Carousel.Caption>
        <h3>Pizzería Mamma Mía!</h3>
        <p>Tenemos las mejores pizzas que puedes encontrar!</p>
      </Carousel.Caption>
    </Carousel.Item>
    </Carousel>
   
    <div className="productsCards">
      {pizza.map((products, index) => (
        <Card key={index} style={{ width: "20rem" }}>
          <Card.Img variant="top" src={products.img} alt="{products.name" />
          <Card.Body>
            <Card.Title>{products.name}</Card.Title>
            
            <h5 className="ingredientsPizza">Ingredientes:</h5>
            <p>🍕{products.ingredients[0]}</p>
            <p>🍕{products.ingredients[1]}</p>
            <p>🍕{products.ingredients[2]}</p>
            <p>🍕{products.ingredients[3]}</p>
            <h3 className="priceProduct">${products.price}</h3>
            <Button
              onClick={() => navigatePizza(products.id)}
              variant="primary"
            >
              Ver Más😺
            </Button>{" "}
            <Button
              variant="primary"
              onClick={() => addItemToCart(products.id)}
            >
              Añadir🛍️
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
    </>
  );
};

export default Home;
