import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectGoods} from '../store/goodsSlice';
import {selectCart} from '../store/cartSlice';

import Cart from '../components/Cart';
import { minusItem, deleteItem} from '../store/cartSlice';

function CartList() {
    const goods = useSelector(selectGoods);
    const cart = useSelector(selectCart);
    let dispatch = useDispatch();
   
    const goodsObj = goods.reduce((accum, item) => {
        accum[item['articul']] = item;
        return accum;
    }, {});
    
    let clickHandler = (event) => {
        event.preventDefault();
        let t = event.target;
      
        if(t.classList.contains('minus-to-cart')){
            dispatch(minusItem(t.getAttribute('data-key')))
        } else if(t.classList.contains('delete-to-cart')){
            dispatch(deleteItem(t.getAttribute('data-key')))
        } else {
            return true
        }
    }

    return (
        <div onClick={clickHandler}>
            <Cart goods={goodsObj} cart={cart}/>
        </div>
    );
}

export default CartList;