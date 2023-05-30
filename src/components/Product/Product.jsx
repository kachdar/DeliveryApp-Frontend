import styles from './Product.module.css';
import Card from '../shared/Card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { FaShoppingCart, FaCartPlus } from 'react-icons/fa';
import { addToCart } from '../../slices/cartSlice';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
  const { imageUrl, name, price } = product;
  const { cartItems } = useSelector((state) => state.cart);

  const [isAdded, setIsAdded] = useState(
    cartItems.find((x) => x.id === product.id)?.inCart || false
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addToCartHandler = () => {
    setIsAdded(!isAdded);
    dispatch(addToCart({ ...product, qty: 1, inCart: true }));
  };

  const goToCartHandler = () => {
    navigate('/checkout');
  };

  return (
    <Card className={styles.product}>
      <img src={`${process.env.PUBLIC_URL}/${imageUrl}`} alt="" />
      <h3>{name}</h3>
      <div>
        <p className={styles.price}>{price}$</p>
        {!isAdded && (
          <button className={styles['cart-btn']} onClick={addToCartHandler}>
            <FaShoppingCart />
          </button>
        )}
        {isAdded && (
          <button className={styles['cart-btn']} onClick={goToCartHandler}>
            <FaCartPlus />
          </button>
        )}
      </div>
    </Card>
  );
};

export default Product;
