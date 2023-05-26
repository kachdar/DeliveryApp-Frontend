import { useSelector } from 'react-redux';
import styles from './CartItems.module.css';
import CartItem from '../CartItem/CartItem';

const CartItems = () => {
  const { cartItems } = useSelector((state) => state.cart);

  if (cartItems.length === 0)
    return (
      <p className={styles.error}>
        Sorry, there are no items in your cart yet.
      </p>
    );
  else
    return (
      <div className={styles.items}>
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
    );
};

export default CartItems;
