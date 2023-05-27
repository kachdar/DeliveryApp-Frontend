import { useState } from 'react';
import Card from '../../shared/Card/Card';
import Input from '../../shared/Input/Input';
import SimpleMap from '../GoogleMap/GoogleMap';
import styles from './OrderForm.module.css';

const isValidEmail = (email) => {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return regex.test(String(email).toLowerCase());
};

const OrderForm = () => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const validationRules = {
    name: !!userInfo.name && userInfo.name.match(/^ *$/) === null,
    email: isValidEmail(userInfo.email),
    phone: userInfo.phone.match(
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
    ),
    address: !!userInfo.address && userInfo.address.match(/^ *$/) === null,
  };

  const validate = (field) => {
    return userInfo[field] && !validationRules[field] ? 'error' : undefined;
  };

  const updateUserInfo = (e) => {
    const field = e.currentTarget;

    setUserInfo({ ...userInfo, [field.name]: field.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const isValidForm = Object.values(validationRules).every((key) => key);

    if (isValidForm) {
      console.log('done');
    }
  };

  return (
    <Card className={styles.form}>
      <SimpleMap />
      <form id="cart-form" onSubmit={submitHandler}>
        <Input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          onChange={updateUserInfo}
          className={validate('name')}
        />
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          onChange={updateUserInfo}
          className={validate('email')}
        />
        <Input
          type="phone"
          id="phone"
          name="phone"
          placeholder="Enter your phone number"
          onChange={updateUserInfo}
          className={validate('phone')}
        />
        <Input
          type="text"
          id="address"
          name="address"
          placeholder="Enter delivery address"
          onChange={updateUserInfo}
          className={validate('address')}
        />
      </form>
    </Card>
  );
};

export default OrderForm;
