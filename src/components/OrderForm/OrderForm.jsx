import Card from '../../shared/Card/Card';
import Input from '../../shared/Input/Input';
import styles from './OrderForm.module.css';

const OrderForm = () => {
  return (
    <Card className={styles.form}>
      <h2>Please fill in all fields</h2>
      <form id="user-info">
        <Input type="text" placeholder="Enter your name" />
        <Input type="email" placeholder="Enter your email" />
        <Input type="phone" placeholder="Enter your phone number" />
        <Input type="text" placeholder="Enter delivery address" />
      </form>
    </Card>
  );
};

export default OrderForm;
