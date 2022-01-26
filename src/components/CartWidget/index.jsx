import React from 'react';
/* Bootstrap Icons */
import { IoCartSharp } from "react-icons/io5";
import Badge from 'react-bootstrap/esm/Badge'
import { useCartContext } from '../../context/CartContext';

const CartWidget = () => {

    const {cartWidgetItems} = useCartContext();
    return (
        <>
            Carrito <IoCartSharp/>
            {cartWidgetItems()>0 ? (
                    <>  
                        {' '}
                        <Badge bg="warning">{cartWidgetItems()}</Badge>
                    </>
                ) : (
                    null
                )
            
        
            }
            
        </>
    )
}

export default CartWidget;

