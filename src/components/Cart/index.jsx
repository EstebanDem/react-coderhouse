import React from "react";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart";
import { NavLink } from 'react-router-dom';
import Button from "react-bootstrap/esm/Button";
import Container from 'react-bootstrap/esm/Container';
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Lottie from 'react-lottie';
import animationData from '../../animations/85557-empty'

const Cart = () => {

    const { cart, clearCart, cartWidgetItems, totalPrice } = useCartContext();
    const total = totalPrice();

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

    return(
        <>
            <Container className="mt-4 mb-4">
                {cartWidgetItems() > 0 ? (
                    cart.map((i) => (
                        <>
                            
                                <ItemCart 
                                    key = {i.item.id}
                                    id = {i.item.id}
                                    name = {i.item.title}
                                    price={i.item.price}
                                    quantity={i.quantity}
                                />
                            
                        </>
                    ))
                ) : (
                    <>
                        <Row className="justify-content-md-center my-4">
                            <Col xs lg="6" className="text-center mb-4">
                                <h4>
                                    Parece que aún no has elegido nada 😔
                                </h4>
                                <Lottie 
                                    options={defaultOptions}
                                    
                                    width={250}
                                />
                            </Col>
                        </Row>
                    </>
                )}
                {cartWidgetItems()>0 && (
                    <>

                        <h3>EL TOTAL ES DE : $ {total}</h3>
                        <Button as={NavLink} exact to="/">Ver más productos</Button>
                        
                        <Button onClick={clearCart} >Eliminar todo</Button>
                    </>
                )}
            </Container>
        </>
    )
}

export default Cart;