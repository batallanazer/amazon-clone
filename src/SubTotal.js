import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './context/StateProvider';
import './SubTotal.css'
import { getBasktTotal } from './context/reducer';
function SubTotal() {
    const [{basket}] = useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value)=>(
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>{`${value}`}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasktTotal(basket)}
                displayType={"text"}
                thousandSeperator={true}
                prefix={"$"}
            />
            <button>Procedd to Checkout</button>
        </div>
    )
}

export default SubTotal
