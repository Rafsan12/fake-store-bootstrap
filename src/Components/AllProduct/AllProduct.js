import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import "./AllProduct.css"

const AllProduct = (props) => {
    const {setCartCount} = props;
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>setProducts(data))
    },[])
    console.log( products)
    return (
        <div>
            <h2 className="title"> All Product</h2>
            <div className="row container">
            {
                products.map(product => <Product
                    key={product.id}
                    product={product}
                    setCartCount={setCartCount}
                ></Product>)
            }
            </div>
           
        </div>
    );
};

export default AllProduct;