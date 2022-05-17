import React from 'react';
import { Link } from 'react-router-dom';
import BackTitle from '../components/containers/BackTitle';
import Header from '../components/containers/Header';
import Muffin from '../images/muffin.jpeg';
import Cookie from '../images/mm-cookies.jpeg';
import CartCard from '../components/cards/CartCard';
import Footer from '../components/containers/Footer';
import MainBtn from '../components/buttons/MainBtn';
import styles from './routes.module.css';


const cartItems = [
  {
    name: 'Blueberry Muffins',
    price: 4.95,
    qty: 2,
    image: Muffin,
  },
  {
    name: 'Candy Chip Cookies',
    price: 6.95,
    qty: 1,
    image: Cookie,
  },

];


function getTotal(items) {
  let total = 0;
  items.forEach((item) => {
    total += item.price;
  });
  return total;
}
function getTax(items) {
  const tax = getTotal(items) * 0.084;
  return tax;
}
function getDelivery() {
  return 2.95;
}
function subTotal(items) {
  const subtotal = getTotal(items) + getTax(items) + getDelivery();
  return Number(subtotal).toFixed(2);
}

const cart = () => {
  if(cartItems.length === 0) {
    return(
      <div className={styles.pageContainer}>
        <div>
          <Header />
          <BackTitle />
        </div>
        <div className={styles.center}>
            <h1>There's nothing in your cart!</h1>
            <p className={styles.textAlign}>Time to reward yourself!</p>
            <Link to={'/categories'} className={styles.textDecor}>
              <MainBtn btnText='Go Shopping'/>
            </Link>
          </div>
        <Footer />
      </div>
    )
  } else {
    return (
      <div className={styles.pageContainer}>
        <div>
          <Header />
          <BackTitle />
        </div>
        <h1 className={styles.heading}>Cart</h1>
        <div>
          {cartItems.map((item) => (
            <CartCard item={item} />
          ))}
        </div>
        
        <div className={styles.cart}>
        <div className={styles.cartDetail}>
          <p >TOTAL:</p>
          <p>{getTotal(cartItems)}</p>
        </div>
        <div className={styles.cartDetail}>
          <p>TAX:</p>
          <p>{getTax(cartItems)}</p>
        </div>
        <div className={styles.cartDetail}>
          <p>DELIVERY:</p>
          <p>{getDelivery()}</p>
        </div>
        <div className={styles.cartDetail}>
          <p>SUBTOTAL:</p>
          <p>{subTotal(cartItems)}</p>
        </div>
      </div>
      <div className={styles.linkContainer}>
        <Link to={'/checkout'} className={styles.textDecor}>
          <MainBtn btnText={'Checkout'}/>
        </Link>
      </div>
  
      <Footer />
    </div>
    )
  }
};
export default cart;
