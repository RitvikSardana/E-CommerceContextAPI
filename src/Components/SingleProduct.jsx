import React,{useEffect} from "react";
import { Button, Card } from "react-bootstrap";
import { CartState } from "../context/Context";
import Rating from "./Rating";

const SingleProduct = ({ prod }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const addToCartHandler = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: prod,
    });
  };

  const removeFromCartHandler = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: prod,
    });
  };


  

  return (
    <div className="products">
      <Card>
        <Card.Img variant="top" src={prod.image} alt={prod.name} />
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>₹ {prod.price.split(".")[0] * 3}</span>
            {prod.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>4 Days Delivery</div>
            )}
            <Rating rating={prod.ratings} />
          </Card.Subtitle>
          {
            //helps us to check whether it exists or not in the cart
            cart.some((p) => p.id === prod.id) ? (
              <Button variant="danger" onClick={removeFromCartHandler}>
                Remove from cart
              </Button>
            ) : (
              <Button disabled={!prod.inStock} onClick={addToCartHandler}>
                {!prod.inStock ? "Out Of Stock" : "Add To Cart"}
              </Button>
            )
          }
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
