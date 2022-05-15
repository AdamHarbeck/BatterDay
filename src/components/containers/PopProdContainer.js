import React from 'react';
import styles from './containers.module.css';
import PopProdCard from '../cards/PopProdCard';

const PopProdContainer = (props) => {
  const items = props.products
  return (
    // map the incoming data using the PopProdCards
    <div className={styles.popProd}>
      {items.map(item => <PopProdCard item={item} key={item.id}/>)}
    </div>
  );
}
export default PopProdContainer;
