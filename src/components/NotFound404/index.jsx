import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Lottie from 'react-lottie';
import animationData from '../../animations/36395-lonely-404';
import { NavLink } from 'react-router-dom';

const NotFound404 = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

    return (
            <Container>
                <Row className="justify-content-md-center my-4">
                    <Col xs lg="8" className="text-center ">
                        <h4>
                            La página a la que intentas acceder no existe 😭
                        </h4>
                        <p>
                            Verifica que has escrito bien la dirección o sino vuelve a la {' '}
                            <NavLink to='/'>
                                <strong>Pantalla principal</strong>
                            </NavLink>
                        </p>
                        <Lottie 
                            options={defaultOptions}                        
                            width={850}
                        />
                    </Col>
                </Row>
            </Container>
    )
}

export default NotFound404;