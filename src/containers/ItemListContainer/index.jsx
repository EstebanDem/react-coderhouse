// llamada a la api, o la promesa (en este caso)
// manejo de estados

// vamos a traer 1 itemList.-
// ese itemList va a mapear item, y devolverlos como lista.

import { useEffect, useState } from "react";
import MockedItems from "../../mock/MockedItems";
import ItemList from "../../components/ItemList";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

const ItemListContainer = () => {

    // aca vamos a hacer la promesa

    const [items, setItems] = useState([]);

    useEffect( () => {
        
        setTimeout( () => {
            const itemPromise = new Promise((res, rej) => {
                res(MockedItems);
            })
    
            itemPromise.then((res) => setItems(res));
    
        }, 2000)
        
    }, [items]);

    return (
        <Container>
            <Row>
                <Col md="auto">
                    <ItemList items={items}/>
                </Col>
            </Row>
        </Container>
    )
}

export default ItemListContainer;