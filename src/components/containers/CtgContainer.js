import React from 'react';
import CtgCard from '../cards/CtgCard';
import styles from './containers.module.css';


// This will take the category cards
const CtgContainer = (props) => {
  const categories = props.ctgs
  return (
    <div className={styles.container}>
      {categories.map(cat => (
        <CtgCard src={require('../../' + cat.image)} ctgName={cat.name} key={cat.id} />
      ))}
    </div>
  )
};
export default CtgContainer;
