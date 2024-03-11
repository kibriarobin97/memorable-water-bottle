import './Bottle.css'

const Bottle = ({ bottle, handleAddToCart }) => {
    const { name, img, price, seller } = bottle;
    return (
        <div className="bottle">
            <img src={img} alt="" />
            <h3>Bottle: {name}</h3>
            <p>Price: ${price}</p>
            <p>Brand: {seller}</p>
            <button onClick={() => handleAddToCart(bottle)}>Purchase</button>
        </div>
    );
};

export default Bottle;