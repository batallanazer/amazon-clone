import React from 'react'
import './Product.css'
import { useStateValue } from './context/StateProvider';

function Product({ id, title, price, rating, image }) {
    const [, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type:"ADD_TO_BASKET",
            payload:{ 
                id:id, 
                title:title, 
                price:price, 
                rating:rating, 
                image:image }
        });
    }
    return (
        <div className="product">
            <div className="product__info">
                <p className="product__title">{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating).fill().map(i => (<p key={i}>&#x2605;</p>))
                    }
                </div>
            </div>
            <img className="product__image" src={image} alt={title} />
            <button className="product__button" onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product
