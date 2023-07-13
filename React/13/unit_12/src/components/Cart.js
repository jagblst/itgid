import './cart.css';;

function Cart (data) {
    let totalSum = Object.keys(data.cart).map(item => +(data.goods[item]['cost'] * data.cart[item])).reduce((acc, elem)=>{return acc + elem}, 0);

    return (
        <table className = {Object.keys(data.cart).length ? 'table' : 'hide'}>
            <tbody>
                <tr>
                    <th>Title</th> 
                    <th>Cost</th>
                    <th>Amount</th>
                    <th>Sum</th>
                    <th>Img</th> 
                </tr>
                    {Object.keys(data.cart).map((item,index) => 
                <tr key={index}>
                    <td>
                        {data.goods[item]['title']}
                    </td>
                    <td>
                        {data.goods[item]['cost']}
                    </td>
                    <td>
                        {data.cart[item]}
                    </td>
                    <td>
                        {data.goods[item]['cost'] * data.cart[item]}
                    </td>
                    <td>
                        <img style={{width:'30px',height:'30px'}} src={data.goods[item]['image']} alt={data.goods[item]['title']}/>
                    </td>
                    <td>
                        <button className="minus-to-cart" data-key={data.goods[item]['articul']}>-</button>
                    </td>
                    <td>
                        <button className="delete-to-cart" data-key={data.goods[item]['articul']}>X</button>
                    </td>
                </tr>
                )}
                <tr>
                    <th className="total" colSpan="7">Total: {totalSum}</th> 
                </tr>
            </tbody>
        </table>
    );  
}

export default Cart;