import React from "react";
/* Bootstrap */
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ItemListContainer = (props) => (
    <Container className="mt-4">
        <Row>
            <Col md="auto">
                Hola {props.name}!
            </Col>
        </Row>
    </Container>
);

export default ItemListContainer;