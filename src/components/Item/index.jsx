import Card from 'react-bootstrap/esm/Card'
import Col from 'react-bootstrap/esm/Col';
import Badge from 'react-bootstrap/esm/Badge';
import { NavLink } from 'react-router-dom';
import { IoPeople, IoArrowRedoCircleOutline } from "react-icons/io5";
import './styles.css';

const Item = ({item}) => (

    <Col> 
        <Card>
            <Card.Header className='text-muted fs-6'>
                {item.category} {' '}
                {item.expertsChoice ?  <Badge bg="secondary">Album Recomendado</Badge> : null}
            </Card.Header>  
            <Card.Img variant="top" src={item.pictureUrl} />
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text> <IoPeople/> {item.artist} </Card.Text>
                <Card.Text>  $ {item.price}</Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted Item__link" as={NavLink} to={`/discos/${item.id}`}>
                <IoArrowRedoCircleOutline/>
                <small className="text-black"> Ver detalles</small>
            </Card.Footer>
        </Card>
    </Col>

)

export default Item;