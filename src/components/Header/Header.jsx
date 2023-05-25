import { Fragment } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

import logo from '../../images/logo.png';
import styles from './Header.module.css';
import { useSelector } from 'react-redux';

const Header = () => {
  const { totalAmount } = useSelector((state) => state.cart);
  return (
    <Fragment>
      <header className={styles.header}>
        <Link to="/">
          <img className={styles.logo} src={logo} alt="" />
        </Link>
        <nav className={styles.nav}>
          <NavLink to="/">Shop</NavLink>
          <NavLink to="/checkout">Shopping Cart {totalAmount}</NavLink>
        </nav>
      </header>
      <Outlet />
    </Fragment>
  );
};

export default Header;
