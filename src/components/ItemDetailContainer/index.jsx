import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import MockedItems from "../../mock/MockedItems";
import ItemDetail from "../ItemDetail";
import LoaderSpinner from "../LoaderSpinner";


const ItemDetailContainer = ( () => {

    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState({});

    const { itemId } = useParams();

    useEffect( () => {
        setLoading(true);

        const getProducts = new Promise( (resolve) => {
            setTimeout( () => {
                const myData = MockedItems.find( (item) => item.id === itemId );
                resolve(myData);
            }, 1500)
        })

        getProducts
            .then((res) => {
                setProduct(res)
            })
            .finally(() => setLoading(false))

    }, [itemId])

    

    return loading 
        ? <LoaderSpinner/>
        : <ItemDetail item={product}/>

} )

export default ItemDetailContainer;