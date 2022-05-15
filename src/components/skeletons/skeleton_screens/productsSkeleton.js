import React from "react";
import SkeletonElement from "../SkeletonElement";
import '../skeleton.css';
import imageCSS from '../../../images/images.module.css';
import containerCSS from '../../containers/containers.module.css';
import cardCSS from '../../cards/cards.module.css';
import buttonCSS from '../../buttons/buttons.module.css'
import counterCSS from '../../counters/counters.module.css';
import inputCSS from '../../inputs/inputs.module.css';
import Shimmer from "../Shimmer";

const ProductsSkeleton = () => (
  <div>
    {/* Carousel */}
    <div className={`${containerCSS.container} skeleton-wrapper`} style={{background: '#eee', margin: '0 auto'}}>
      {[1,2,3].map((n) => (
        <div className={cardCSS.ctgContainer} key={n}>
          <div className={imageCSS.category}>
            <SkeletonElement type={'avatar'} />
          </div>
          <SkeletonElement type={'text'} />
        </div>
      ))}
      <Shimmer />
    </div>
    {[1,2,3].map(item => (
      <div className="skeleton-wrapper">
        <div className={cardCSS.ctgProdCard} style={{background: '#eee'}}>
          <div className={cardCSS.textCont}>
            <div style={{width: '20rem'}}>
              <SkeletonElement type='text' />
            </div>
            <div style={{width: '8rem'}}>
              <SkeletonElement type='text' />
            </div>
          </div>
          <div className={cardCSS.textCont}>
            <div className={imageCSS.prodCard}>
              <SkeletonElement type='thumbnail' />
            </div>
            <div className={cardCSS.rating}>
              <div className={inputCSS.container}>
                <SkeletonElement type='text' />
              </div>
              <div className={cardCSS.counterBtn}>
                <div className={counterCSS.container}>
                  <SkeletonElement type='title' />
                </div>
                <div className={buttonCSS.mainBtnSml} style={{position: 'relative'}}>
                  <SkeletonElement type={'avatar'} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Shimmer />
      </div>
    ))}
    
  </div>
);
export default ProductsSkeleton;