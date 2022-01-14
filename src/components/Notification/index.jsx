import Col from "react-bootstrap/esm/Col";
import Toast from "react-bootstrap/esm/Toast"
import Row from "react-bootstrap/esm/Row";
import Button from "react-bootstrap/esm/Button";
import ToastContainer from 'react-bootstrap/esm/ToastContainer'
import { useState } from "react";


const Notification = () => {
    const [show, setShow] = useState(false);
    return (
        
            <Row>
                <Col xs={6}>
                    <ToastContainer position='middle-center'>
                        <Toast onClose={() => setShow(false)} show={show} delay={500} autohide>
                            <Toast.Header>
                                <img
                                    src="holder.js/20x20?text=%20"
                                    className="rounded me-2"
                                    alt=""
                                />
                                <strong className="me-auto">¡Felicitaciones!</strong>
                            </Toast.Header>
                            <Toast.Body>Producto agregado al carrito</Toast.Body>
                        </Toast>
                    </ToastContainer>
                </Col>
                <Col xs={6}>
                    <Button onClick={() => setShow(true)}>Show Toast</Button>
                </Col>
            </Row>
  );
    
}

export default Notification;