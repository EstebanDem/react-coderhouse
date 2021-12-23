import Card from "react-bootstrap/esm/Card";
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { NavLink } from "react-router-dom";
import './styles.css';

const CategoryItem = ({categoryItem}) => {
    
    return (
        <>
        
        <Row as={NavLink} to={`categorias/${categoryItem.id}`} className='mt-3'>
        <Col>
            <Card className="bg-dark text-white mt-6 CategoryItem__image CategoryItem__BorderAndShadow">
                <Card.Img  src={categoryItem.pictureUrl} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title className="display-6">{categoryItem.name}</Card.Title>
                    <Card.Text className="w-50 lh-lg">
                        {categoryItem.description}
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
        </Col>
        </Row>
        </>
    )
}

export default CategoryItem;