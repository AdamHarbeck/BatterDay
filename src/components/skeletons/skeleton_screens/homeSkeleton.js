import React from "react";
import SkeletonElement from "../SkeletonElement";
import '../skeleton.css';
import imageCSS from '../../../images/images.module.css';
import containerCSS from '../../containers/containers.module.css';
import cardCSS from '../../cards/cards.module.css';
import buttonCSS from '../../buttons/buttons.module.css';
import Shimmer from "../Shimmer";

const HomeSkeleton = () => {
  return (
    <div className={'skeleton-wrapper'}>
      <div className={'skeleton-home'}>
        {/* Hero */}
        <div className={`${imageCSS.hero}`} style={{background: 'none', position: 'relative'}}>
          <SkeletonElement type={'thumbnail'} />
          <Shimmer />
        </div>
        {/* Carousel */}
        <div className={containerCSS.container} style={{background: '#eee', position: 'relative'}}>
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

        <div className={containerCSS.divContainer}>
          <div className="skeleton-wrapper" style={{width: '80rem', margin: '0 auto'}}>
            <SkeletonElement type={'title'}/>
            <Shimmer />
          </div>
        </div>

        {/* Pop-Prods */}
        <div className={containerCSS.popProd}>
          {[1,2,3].map((n) => (
            <div className={cardCSS.ppContainer} style={{position: 'relative', overflow: 'hidden'}} key={n}>
              <div className={imageCSS.popProd}>
                <SkeletonElement type={'thumbnail'} />
              </div>
              <div style={{display: 'flex'}}>
                <div className={buttonCSS.circleBtn}>
                  <SkeletonElement type={'avatar'} />
                </div>
                <div className={buttonCSS.circleBtn}>
                  <SkeletonElement type={'avatar'} />
                </div>
              </div>
              <SkeletonElement type={'title'} />
              <SkeletonElement type={'text'} />
              <Shimmer />
            </div>
          ))}
        </div>
        
        <div className={containerCSS.divContainer}>
          <div className="skeleton-wrapper" style={{width: '80rem', margin: '0 auto'}}>
            <SkeletonElement type={'title'}/>
            <Shimmer />
          </div>
        </div>

        <div className={containerCSS.divContainer}>
          <div className={buttonCSS.mainBtn} style={{position: 'relative'}}>
            <SkeletonElement type={'avatar'} />
            <Shimmer />
          </div>
        </div>
      </div>

    </div>
  )
}
export default HomeSkeleton;