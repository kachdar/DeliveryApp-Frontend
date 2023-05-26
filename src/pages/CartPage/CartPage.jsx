import CartItems from '../../components/CartItems/CartItems';
import OrderForm from '../../components/OrderForm/OrderForm';
import styles from './CartPage.module.css';

const CartPage = () => {
  return (
    <div className={styles.cart}>
      <OrderForm />
      <CartItems />
      <p className={styles.total}>Total</p>
  
    </div>
  );
};

export default CartPage;
