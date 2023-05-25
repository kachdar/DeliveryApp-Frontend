import ProductList from '../../components/ProductList/ProductList';
import ShopList from '../../components/ShopList/ShopList';
import styles from './ShopPage.module.css';

const ShopPage = () => {
  return (
    <div className={styles.content}>
      <ShopList />
      <ProductList />
    </div>
  );
};

export default ShopPage;
