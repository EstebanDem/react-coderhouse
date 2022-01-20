import Button from "react-bootstrap/esm/Button";
import ButtonGroup from 'react-bootstrap/esm/ButtonGroup';
import { NavLink } from "react-router-dom";
import { useState } from "react";

const ItemCount = ({stock, onAdd}) => {

    const initial = 1;
    const [count, setCount] = useState(initial);
    const [display, setDisplay] = useState('hidden');

    const handleClickAdd = () => {
        count < stock ? setCount(count + 1) : setCount(count);
    }

    const handleClickRemove = () => {
        count === 1 ? setCount(1) : setCount(count-1);
    }

    const handleOnAdd = () => {
        onAdd(count);
        setCount(initial);
        setDisplay('block');
    }

    return (
        <>
            <ButtonGroup aria-label="Basic example">
                <Button onClick={handleClickRemove} variant="secondary">-</Button>
                <Button disabled variant="secondary">{count}</Button>
                <Button onClick={handleClickAdd} variant="secondary">+</Button>
            </ButtonGroup>
            <br></br>
            <br></br>
            {display === "block" ? (
                <ButtonGroup vertical>
                    <Button variant="secondary" as={NavLink} to="/cart">Ir al carrito</Button>
                    <Button variant="secondary" as={NavLink} to="/">Ver más discos</Button>
                </ButtonGroup>
            ): (
                <Button onClick={handleOnAdd} variant='primary'>
                    Agregar al carrito
                </Button>
            )}
            
        </>

      )
}

export default ItemCount;