import CartItems from '../../components/CartItems/CartItems';
import OrderForm from '../../components/OrderForm/OrderForm';
import styles from './CartPage.module.css';
import { useSelector } from 'react-redux';

const CartPage = () => {
  const { totalPrice, cartItems } = useSelector((state) => state.cart);

  return (
    <div className={styles.cart}>
      <OrderForm />
      <CartItems />
      <div className={styles.total}>
        <p>Total price: {totalPrice}$</p>
        <button
          type="submit"
          form="cart-form"
          disabled={cartItems.length === 0}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
