import styles from './CartItem.module.css';
import Card from '../../shared/Card/Card';
import { FaPlus, FaMinus } from 'react-icons/fa';

const CartItem = ({ item }) => {
  const { imageUrl, name, price, qty } = item;
  return (
    <Card className={styles.item}>
      <img src={imageUrl} alt="" />
      <div className={styles['item-info']}>
        <h3>{name}</h3>
        <span>{price}</span>
        <div className={styles['item-form']}>
          <button>
            <FaMinus />
          </button>
          <input type="text" value={qty} />
          <button>
            <FaPlus />
          </button>
        </div>
      </div>
    </Card>
  );
};

export default CartItem;
