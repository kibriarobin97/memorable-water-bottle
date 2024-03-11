import PropTypes from 'prop-types';
import './Cart.css'

const Cart = ({cart}) => {
    return (
        <div className="cart-container">
            <h2>Cart: {cart.length}</h2>
            {
                cart.map(bottle => <img key={bottle.id} src={bottle.img}></img>)
            }
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.array.isRequired
}

export default Cart;