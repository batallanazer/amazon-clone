import React from 'react';
import { useStateValue } from './context/StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import SubTotal from './SubTotal';

function Checkout() {
    const [{ basket }] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout__ad"
                    src="https://lh3.googleusercontent.com/proxy/ktKhCzAlmaP0HoH5JfVlW62Y2YcQzvz-tVkWqdcr2PdfJ-UmISufSelkVkoOjgkR3kPg6GmOFuJrdYVzHoyP4Q87PlVYIxcTwduy2wFP_Lc7iO_NHfkNkV0BdR8gT8V0nXvjSrDLhMIidi8PQQ"
                    alt="ad" />
                {!(basket?.length) ? (
                    <div>
                        <h2>Your Shopping Basket is empty</h2>
                        <p>You have no items in your basket</p>
                    </div>
                ) : (
                        <div>
                            <h2 className="checkout__title">Your Shopping Basket</h2>
                            {basket?.map(item => (
                                <CheckoutProduct
                                    key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))}
                        </div>
                    )}
            </div>
            {basket?.length > 0 && (
                <div className="checkout__right">
                    <SubTotal></SubTotal>
                </div>
            )}
        </div>
    )
}

export default Checkout;
