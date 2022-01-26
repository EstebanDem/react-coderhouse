import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ItemDetail from "../ItemDetail";
import LoaderSpinner from "../LoaderSpinner";
import { getFirestore } from "../../firebase";


const ItemDetailContainer = ( () => {

    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState({});

    const { itemId } = useParams();

    useEffect( () => {
        setLoading(false);

        const bd = getFirestore();
        const itemsCollection = bd.collection("albums");
        itemsCollection.get().then( (value) => {
            let datos = value.docs.map( (e) => {
                return {...e.data(), id: e.id};
        });
            const found = datos.find( (item) => item.id === itemId)
            setProduct(found);
        });


    }, [itemId])

    

    return loading 
        ? <LoaderSpinner/>
        : <ItemDetail item={product}/>

} )

export default ItemDetailContainer;