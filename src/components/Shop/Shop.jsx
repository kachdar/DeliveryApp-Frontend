import { useSelector, useDispatch } from 'react-redux';
import { changeActiveShop } from '../../slices/cartSlice';
import styles from './Shop.module.css';

const Shop = ({ shop }) => {
  const { id, name } = shop;
  const { activeShopId, cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const changeActiveShopHandler = (shopId) => {
    dispatch(changeActiveShop(shopId));
  };

  let classes = `${styles['shop-btn']} `;

  if (activeShopId === id) classes += `${styles.active}`;
  else if (activeShopId !== id && cartItems.length !== 0)
    classes += `${styles.disable}`;

  return (
    <button
      className={classes}
      disabled={activeShopId !== id && cartItems.length !== 0}
      onClick={() => changeActiveShopHandler(id)}
    >
      {name}
    </button>
  );
};

export default Shop;
