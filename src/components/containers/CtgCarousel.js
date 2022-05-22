import React from 'react';
import { BsCaretLeftFill, BsCaretRightFill } from 'react-icons/bs';
import CtgContainer from './CtgContainer';
import styles from './containers.module.css';

const CtgCarousel = (props) => {
    return (
      <div className={styles.carousel}>
        <BsCaretLeftFill className={styles.iconSmall}/>
        <CtgContainer ctgs={props.ctgs}/>
        <BsCaretRightFill className={styles.iconSmall}/>
      </div>
    )

};
export default CtgCarousel;
