import { useEffect, useState } from "react";
import MockedCategories from "../../mock/MockedCategories";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import CategoryItemList from "../../components/CategoryItemList";
import LoaderSpinner from "../../components/LoaderSpinner";

const CategoryListContainer = () => {


    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);

    useEffect( () => {
        setLoading(true);
        setTimeout( () => {
            const categoryItemPromise = new Promise((res, rej) => {
                res(MockedCategories);
            })
    
            categoryItemPromise
                .then((res) => setItems(res))
                .finally( () => setLoading(false))
                
    
        }, 1000)
        
    }, [items]);

    return (
        loading
        ? <LoaderSpinner/>
        :
        <Container>
            <Row>
                <Col md="auto">
                    <CategoryItemList categoryItems={items}/>
                </Col>
            </Row>
        </Container>
    )
}

export default CategoryListContainer;