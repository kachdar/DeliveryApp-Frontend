import styles from './CartItem.module.css';
import Card from '../shared/Card/Card';
import { FaPlus, FaMinus, FaTrash, FaTrashAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import {
  increaseItemQuantity,
  decreaseItemQuantity,
  removeFromCart,
} from '../../slices/cartSlice';

const CartItem = ({ item }) => {
  const { id, imageUrl, name, price, qty } = item;

  const dispatch = useDispatch();

  return (
    <Card className={styles.item}>
      <FaTrashAlt
        className={styles.trash}
        onClick={() => dispatch(removeFromCart(id))}
      />
      <img src={`${process.env.PUBLIC_URL}/${imageUrl}`} alt="" />
      <div className={styles['item-info']}>
        <h3>{name}</h3>
        <span>{price}</span>
        <div className={styles['item-form']}>
          <button onClick={() => dispatch(decreaseItemQuantity(id))}>
            <FaMinus
              style={
                item.qty === 1
                  ? { color: 'grey', cursor: 'not-allowed' }
                  : { color: '#8db55f' }
              }
            />
          </button>
          <input type="text" value={qty} readOnly />
          <button onClick={() => dispatch(increaseItemQuantity(id))}>
            <FaPlus />
          </button>
        </div>
      </div>
    </Card>
  );
};

export default CartItem;
