import Item from '../Item';
import Row from 'react-bootstrap/esm/Row';
const ItemList = ({items}) => {
  
    return (
        <>
        <Row md={4} className="g-4 mt-2 mb-4">

            {items.map( (item) => {
                return <Item key={item.id} item={item}/>
            })}

        </Row>
      </>
      )
  
}

export default ItemList;