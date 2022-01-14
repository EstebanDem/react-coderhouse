import React from "react";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart";
import { NavLink } from 'react-router-dom';
import Button from "react-bootstrap/esm/Button";
import Container from 'react-bootstrap/esm/Container';
import Row from "react-bootstrap/esm/Row";

const Cart = () => {

    const { cart, clearCart, cartWidgetItems, totalPrice } = useCartContext();
    const total = totalPrice();

    return(
        <>
            <Container className="mt-4 mb-4">
                <h4>Esta sería la parte donde está el carrito</h4>
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
                        <h3>
                            No hay nada.
                        </h3>
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