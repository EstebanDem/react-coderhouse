import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Image from 'react-bootstrap/Image'
import './styles.css';
import { IoPeople, IoMusicalNotesSharp, IoPulseOutline, IoPricetag } from "react-icons/io5";

const ItemDetail = ( ({item} ) => {
    return (
        <Container className="mt-4 mb-4">
            <Row>
                <Col xs lg="4">
                    <Image src={item.pictureUrl} fluid />
                </Col>
                <Col xs lg="6">
                    <h1>{item.title}</h1>
                    <p>
                        <IoPeople/>
                        <strong>
                            {item.artist}
                        </strong> 
                    </p>
                    <p>
                        <IoMusicalNotesSharp/>
                        {item.category}
                    </p>
                    <p className='ItemDetail__justify-text'>
                        <IoPulseOutline/>
                        {item.longDescription}
                    </p>
                    <p>
                        <IoPricetag/>
                        $ {item.price}
                    </p>
                </Col>
            </Row>
        </Container>
        
      )
})

export default ItemDetail;