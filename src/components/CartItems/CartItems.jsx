import { useSelector } from 'react-redux';
import styles from './CartItems.module.css';
import Card from '../../shared/Card/Card';

const CartItems = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div className={styles.items}>
      {cartItems.map((item) => (
        <Card>
          <img src={item.imageUrl} alt="" />
          <h3>{item.name}</h3>
        </Card>
      ))}
    </div>
  );
};

export default CartItems;
