import styles from './ProductList.module.css';
import { useGetProductsByShopIdQuery } from '../../slices/shopsApiSlice';
import Product from '../Product/Product';
import Loader from '../Loader/Loader';
import Message from '../Message/Message';
import { useSelector } from 'react-redux';

const ProductList = () => {
  const { activeShopId } = useSelector((state) => state.cart);
  const { data, isLoading, error } = useGetProductsByShopIdQuery(activeShopId);

  if (isLoading) return <Loader />;
  else if (error)
    return (
      <Message variant="danger">{error?.data?.message || error.error}</Message>
    );
  else if (data.length === 0)
    return <p className={styles.error}>Sorry, there are no items available here. </p>;
  else
    return (
      <div className={styles.products}>
        {data.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    );
};

export default ProductList;
