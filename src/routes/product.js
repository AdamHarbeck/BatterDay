import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../components/containers/Header';
import Footer from '../components/containers/Footer';
import MainBtn from '../components/buttons/MainBtn';
import BackTitle from '../components/containers/BackTitle';
import styles from './routes.module.css';
import ProdCard from '../components/cards/ProdCard';
import ReviewCard from '../components/cards/ReviewCard';
import axios from 'axios';
import ProdSkeleton from '../components/skeletons/skeleton_screens/prodSkeleton';

const Product = () => {
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState({
    loading: true,
    data: {}
  })

  const id = useParams().id

  function setPath () {
    if (process.env.DATABASE_URL !== undefined) {
      return process.env.DATABASE_URL + '/products/';
    } else {
      return 'http://localhost:4000/products/'
    }
  }

  useEffect(() => {
    async function getItem() {
      await axios.get(setPath() + id).then(res => {
        console.log(res.data)
        if(res.data !== undefined) {
          setItem({
            loading: false,
            data: res.data
          })
          setLoading(false)
        }
      })
    }
    getItem()
  }, []);

  return (
    <div>
      <Header />
      {loading ? <ProdSkeleton /> : <div>
        <BackTitle value={item.data.name}/>
        <div className={styles.container}>
          <img src={require(`../` + item.data.image)} alt={item.data.name} className={styles.prodImage} />
        </div>
        <ProdCard item={item.data}/>
        <div className={styles.linkContainer}>
          <Link to={'/cart'} className={styles.textDecor}>
            <MainBtn btnText={'Add to Cart'}/>
          </Link>
        </div>
        <div className={styles.prodInfo}>
          <div className={styles.titleText}>
            <h1 className={styles.heading}>Description</h1>
            <p className={styles.textAlign}>{item.data.description}</p>
          </div>
          <div className={styles.titleText}>
            <h1 className={styles.heading}>Baking</h1>
            <p className={styles.textAlign}>{item.data.bake_time}</p>
          </div>
          <h1 className={styles.heading}>Reviews</h1>
          {item.data.reviews ? item.data.reviews.map((review) => (
            <ReviewCard review={review}/>
          )): <p className={styles.textAlign}>Be the first to review this product!</p>}
        </div>
        </div>
      }
      <Footer />
    </div>
  );
};
export default Product;
