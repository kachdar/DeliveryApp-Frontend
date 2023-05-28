import styles from './ShopList.module.css';
import Card from '../shared/Card/Card';
import Loader from '../Loader/Loader';
import Message from '../Message/Message';
import { useGetShopsQuery } from '../../slices/shopsApiSlice';

import Shop from '../Shop/Shop';

const ShopList = () => {
  const { data, isLoading, error } = useGetShopsQuery();

  if (isLoading) return <Loader />;
  else if (error)
    return (
      <Message variant="danger">{error?.data?.message || error.error}</Message>
    );
  else if (data)
    return (
      <Card className={styles.shops}>
        <h2>Shops:</h2>
        <div className={styles['shop-list']}>
          {data.map((shop) => (
            <Shop key={shop.id} shop={shop} />
          ))}
        </div>
      </Card>
    );
};

export default ShopList;
