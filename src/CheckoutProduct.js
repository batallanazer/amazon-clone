import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './context/StateProvider';

function CheckoutProduct({id,item,title,image,price,rating}) {
    const [, dispatch] = useStateValue();

    const removeFromBasket = () =>{
        dispatch({type:"REMOVE_FROM_BASKET",payload:{ id:id}})
    };

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt={title}/>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {
                        Array(rating).fill().map(_ => (<p>&#x2605;</p>))
                    }
                </div>
                <button className="checkoutProduct__button" onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct