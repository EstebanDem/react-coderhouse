import { useEffect, useState } from "react";
import MockedItems from "../../mock/MockedItems";
import ItemList from "../../components/ItemList";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { useParams } from "react-router-dom";
import LoaderSpinner from "../../components/LoaderSpinner";
import { getFirestore } from "../../firebase";

const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { catId } = useParams();

    useEffect( () => {
        setLoading(false);
        const bd = getFirestore();
        const itemsCollection = bd.collection("albums");
        itemsCollection.get().then( (value) => {
            let datos = value.docs.map( (e) => {
                return {...e.data(), id: e.id};
            });
            console.log(datos);
            const datosFiltrados = catId
             ? datos.filter( (item) => item.categoryId === catId)
             : datos;
            console.log(datosFiltrados);
            setItems(datosFiltrados);
        });
    }, [catId]);


    return loading 
            ? (
                <LoaderSpinner/>
              )
            : (
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