import { useCartContext } from "../../context/CartContext";
import Button from "react-bootstrap/esm/Button";
import { IoRemoveCircleOutline } from "react-icons/io5";

const ItemCart = ( { name, price, url, id, quantity}) => {
    const { removeItem } = useCartContext();
    const handleRemove = () => removeItem(id);
    return(
        <>  
            <tr>
                <td>{name}</td>
                <td>{'$'}{price}</td>
                <td>{quantity}</td>
                <td>
                    <Button variant="warning" onClick={handleRemove}>
                        <IoRemoveCircleOutline/>
                    </Button>
                </td>
            </tr>
        </>
    )
}

export default ItemCart;