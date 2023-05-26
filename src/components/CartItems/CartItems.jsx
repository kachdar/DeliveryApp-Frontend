import { useSelector } from 'react-redux';
import styles from './CartItems.module.css';
import CartItem from '../CartItem/CartItem';

const CartItems = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div className={styles.items}>
      {cartItems.map((item) => (
        <CartItem item={item} />
      ))}
    </div>
  );
};

export default CartItems;
