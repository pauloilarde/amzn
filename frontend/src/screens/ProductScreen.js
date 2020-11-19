import React from 'react'
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';
import data from '../data'

export default function ProductScreen(props) {
    console.log(props)
    const product = data.products.find(p => p._id == props.match.params.id);
    console.log(product)
    if(!product){
        return (
            <>
                <h1>Product not found</h1>
            </>
        );
    }
    return (
        <>
            <Link to="/">Back to homepage</Link>
           <div className="row top">
               <div className="col-2">
                    <img className="large" src={product.image} alt=""/>
               </div>
               <div className="col-1">
                    <ul>
                        <li>
                            <h1>{product.name}</h1>
                        </li>
                        <li>
                            <Rating rating={product.rating} numReviews={product.numReviews} />
                        </li>
                        <li>
                            Price: ${product.price}
                        </li>
                        <li>
                            Description: <p>{product.description}</p>
                        </li>
                    </ul>
               </div>
               <div className="col-1">
                    <div className="card card-body">
                        <ul>
                            <li>
                                <div className="row">
                                    <div>Price</div>
                                    <div className="price">${product.price}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Status</div>
                                    <div >
                                        {product.countInStock > 0 ? (
                                            <span className="success"> in stock </span> 
                                        ) : (
                                            <span className="error">Unavailable</span>
                                        )}
                                    </div>
                                </div>
                            </li>
                            <li>
                                <button className="primary block"> Add to cart </button>
                            </li>
                        </ul>
                    </div>
               </div>
           </div>
        </>
    )
}
