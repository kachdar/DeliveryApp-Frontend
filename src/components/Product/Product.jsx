import styles from './Product.module.css';
import Card from './../../shared/Card';
import { useDispatch, useSelector } from 'react-redux';
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
      <img src={imageUrl} alt="" />
      <h3>{name}</h3>
      <p>{price}</p>
      {!isAdded && <button onClick={addToCartHandler}>Add to Cart</button>}
      {isAdded && <button onClick={goToCartHandler}>Open Cart</button>}
    </Card>
  );
};

export default Product;
