import Card from 'react-bootstrap/esm/Card'
import Col from 'react-bootstrap/esm/Col';
import './styles.css';

const Item = ({item}) => (

    <Col>
        <Card>
            <Card.Img variant="top" src={item.pictureUrl} />

            <Card.Body>
                <Card.Title>{item.title} </Card.Title>
                <Card.Text>{item.description} </Card.Text>
                <Card.Text>$ {item.price}</Card.Text>
            </Card.Body>
            <Card.Footer className="footer-card">
                <small className="text-muted">Last upd</small>
            </Card.Footer>
        </Card>
    </Col>

)

export default Item;