import { useEffect, useState } from "react";
import MockedItems from "../../mock/MockedItems";
import ItemList from "../../components/ItemList";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { useParams } from "react-router-dom";
import LoaderSpinner from "../../components/LoaderSpinner";

const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { catId } = useParams();

    useEffect( () => {

        setLoading(true);

        const itemPromise = new Promise((res, rej) => {
            
            setTimeout( () => {
                const myData = catId
                ? MockedItems.filter( (item)  => item.categoryId === catId)
                : MockedItems;
                
                
                res(myData);
            }, 1000)
        })
        
        itemPromise
            .then((res) => {
                setItems(res)  
            })
            .finally( () => setLoading(false));
         

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