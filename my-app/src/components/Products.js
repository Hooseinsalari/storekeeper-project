import axios from 'axios';
import React, { useEffect } from 'react';

const Products = ({data, setData}) => {

    // useEffect(() => {
    //     const fetch = async () => {
    //         const {data} = await axios.get("http://localhost:3001/product")
    //         setData(data)
    //     }
    //     fetch()
    // }, [data])

    const getProduct = () => {
        axios.get("http://localhost:3001/product")
            .then((response) => console.log(response.data))
            .catch((error) => console.log(error))
    }

    getProduct()

    return (
        <div>
            {
                data.map((product) => (
                <div>
                    <p>{product.name}</p>
                    <p>{product.category}</p>
                    <p>{product.quantity}</p>
                </div>
                    ))
            }
        </div>
    );
};

export default Products;