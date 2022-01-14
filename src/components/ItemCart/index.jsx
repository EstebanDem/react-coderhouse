import { useCartContext } from "../../context/CartContext";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

//<Row xs lg="8" className="justify-content-md-center">

const ItemCart = ( { name, price, url, id, quantity}) => {
    const { removeItem } = useCartContext();
    const handleRemove = () => removeItem(id);
    console.log("EL ID ES")
    console.log(id);
    return(
        <>  
            <Row xs={2} md={4} lg={6}>
                <Col xs lg="6">
                    <h3>Nombre del disco: {name}</h3>
                    <h3>Precio{price}</h3>
                    <h3>Cantidad {quantity}</h3>
                </Col>
                <Col xs lg="2">
                    <button onClick={handleRemove}>
                        Remover!!
                    </button>
                </Col>
            </Row>
            <hr/>
        </>
    )
}

export default ItemCart;