import CategoryItem from "../CategoryItem";
import Row from 'react-bootstrap/esm/Row';

const CategoryItemList = ({categoryItems}) => {
    return (
        <>
            <Row md={1} className="g-4 mt-2 mb-4">
                {categoryItems.map( (item) => {
                    return <CategoryItem key={item.id} categoryItem={item}/>
                })}
            </Row>
        </>)
}

export default CategoryItemList;