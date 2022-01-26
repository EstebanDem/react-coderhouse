import React from "react";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart";
import { NavLink } from 'react-router-dom';
import Button from "react-bootstrap/esm/Button";
import ButtonGroup from "react-bootstrap/esm/ButtonGroup";
import Container from 'react-bootstrap/esm/Container';
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Lottie from 'react-lottie';
import animationData from '../../animations/85557-empty'
import Table from "react-bootstrap/esm/Table";
import { IoBagCheckOutline, IoRemoveCircleOutline, IoAlbumsOutline } from "react-icons/io5";
import PaymentForm from "../PaymentForm";
import Modal from 'react-bootstrap/esm/Modal';
import { useState } from "react";


const Cart = () => {

    const { cart, clearCart, cartWidgetItems, totalPrice } = useCartContext();
    const total = totalPrice();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                <Row className="justify-content-md-center my-4">
                    <Col xs lg="6" className="text-center mb-4">
                    
                {cartWidgetItems() > 0 ? (
                    
                    <Table striped bordered hover size='sm'>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                    {cart.map((i) => (
                        <>
                                
                                <ItemCart 
                                    key = {i.item.id}
                                    id = {i.item.id}
                                    name = {i.item.title}
                                    price={i.item.price}
                                    quantity={i.quantity}
                                />
                            
                        </>
                    ))}
                        </tbody>
                    </Table>    
                    
                ) : (
                    <>
                        
                                <h4>
                                    Parece que aún no has elegido nada 😔
                                </h4>
                                <Lottie 
                                    options={defaultOptions}
                                    
                                    width={250}
                                />
                            
                    </>
                )}
                {cartWidgetItems()>0 && (
                    <>

                        <h4>El total de la compra es de : $ {total}</h4>
                        <ButtonGroup className='mt-3' vertical>
                            
                            {/* <PaymentForm cart={cart} total={total} clearCart={clearCart} /> */}
                            <Button className='mb-1'  onClick={handleShow} variant="warning">
                                <IoBagCheckOutline/> Finalizar compra
                            </Button>
                            <Button className='mb-1' variant="warning" as={NavLink} exact to="/">
                                <IoAlbumsOutline/> Ver más productos
                            </Button>
                            <Button className='mb-1' variant="warning" onClick={clearCart} >
                                <IoRemoveCircleOutline/> Eliminar todo
                            </Button>
                        </ButtonGroup>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Confirme sus datos personales</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <PaymentForm cart={cart} total={total} clearCart={clearCart} />
                            </Modal.Body>
                        </Modal>
                        
                    </>
                )}
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Cart;