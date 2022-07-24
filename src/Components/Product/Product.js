import React from 'react';
import Modals from '../Modals/Modals';

const Product = (props) => {
    console.log(props.product)
    const {setCartCount} = props;
    return (
        <div 
        data-aos="flip-up" 
        data-aos-easing="linear"
        data-aos-duration="1500"
         className="col-md-4  border ">
            <div className="card p-2">
                <img className='w-50 mx-auto' src={props.product.image} alt="" />
                
                <h2>{props.product.title.slice(0,10)}</h2>
            </div>
           <div className='d-flex justify-content-around'>
           <button onClick={setCartCount} className="btn btn-primary">Add To Cart</button>
            {/* <button className="btn btn-info">Details</button> */}
            <Modals 
            product={props.product}
            ></Modals>
            <button className="btn btn-danger">Delete</button>
           </div>

        </div>
    );
};

export default Product;