import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from './PlacedOrderPage.module.css';

const PlacedOrder = () => {
  return (
    <div className={styles.result}>
      <FaCheckCircle className={styles.icon} />
      <h3>Order placed successfully</h3>
      <p>To search and view your order, follow the link below </p>
      <Link to="/">Search Orders</Link>
    </div>
  );
};

export default PlacedOrder;
