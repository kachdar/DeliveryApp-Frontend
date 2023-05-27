import { useSelector } from 'react-redux';
import CartItems from '../../components/CartItems/CartItems';
import OrderForm from '../../components/OrderForm/OrderForm';
import styles from './CartPage.module.css';
import { useCreateOrderMutation } from '../../slices/ordersApiSlice';

const CartPage = () => {
  const { totalPrice, cartItems } = useSelector((state) => state.cart);

  return (
    <div className={styles.cart}>
      <OrderForm />
      <CartItems />
      <div className={styles.total}>
        <p>Total price: {totalPrice}$</p>
        <button type="submit" form="cart-form">
          Chechout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
