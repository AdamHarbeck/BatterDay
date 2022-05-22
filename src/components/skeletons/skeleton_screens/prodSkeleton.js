import React from "react";
import SkeletonElement from "../SkeletonElement";
import '../skeleton.css';
import imageCSS from '../../../images/images.module.css';
import containerCSS from '../../containers/containers.module.css';
import cardCSS from '../../cards/cards.module.css';
import buttonCSS from '../../buttons/buttons.module.css'
import counterCSS from '../../counters/counters.module.css';
import inputCSS from '../../inputs/inputs.module.css';
import routeCSS from '../../../routes/routes.module.css'
import Shimmer from "../Shimmer";

const ProdSkeleton = () => {
    
  return (
    <div className="skeleton-product">
        <div className="skeleton-wrapper">
          <div className={containerCSS.backTitle}>
            <SkeletonElement type={'title'} />
          </div>
          <Shimmer />
        </div>

        <div className="skeleton-wrapper">
          <div className={routeCSS.prodImage}>
            <SkeletonElement type={'thumbnail'} />
          </div>
          <Shimmer />
        </div>

        <div className={`${cardCSS.basicInfo} skeleton-product skeleton-wrapper`}>
          <div className={cardCSS.block}>
            <div className={cardCSS.textInfo}>
              <div style={{width: '30rem'}}>
                <SkeletonElement type={'title'} />
              </div>
              <div style={{width: '10rem'}}>
                <SkeletonElement type={'text'} />
              </div>
            </div>
            <div className={cardCSS.prodCard}>
              <div className={inputCSS.container}>
                <SkeletonElement type={'text'} />
              </div>
              <div className={counterCSS.container}>
                <SkeletonElement type={'title'} />
              </div>
            </div>
          </div>
          <Shimmer />
        </div>

        <div className={containerCSS.divContainer}>
          <div className={buttonCSS.mainBtn} style={{position: 'relative'}}>
            <SkeletonElement type={'avatar'} />
            <Shimmer />
          </div>
        </div>
        {[1,2,3].map(item => (
          <div className={routeCSS.titleText}>
            <SkeletonElement type={'title'} />
            <SkeletonElement type={'text'} />
           </div>
        ))}


    </div>
  )
}
export default ProdSkeleton;