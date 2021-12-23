import Spinner from 'react-bootstrap/Spinner'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';



const LoaderSpinner = () => {
    return(
        <Container>
            
            <Row className="justify-content-center mt-4 mb-4">
                    <Spinner animation="border" variant="warning"/>
                    <h2 className="text-center">Cargando</h2>
            </Row>
            
        </Container>
    )
    
}

export default LoaderSpinner;