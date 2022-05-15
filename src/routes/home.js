import React, { useEffect, useState } from 'react';
import Axios from 'axios'
import Header from '../components/containers/Header';
import CtgCarousel from '../components/containers/CtgCarousel';
import Footer from '../components/containers/Footer';
import MainBtn from '../components/buttons/MainBtn';
import style from '../images/images.module.css';
import '../App.css';
import styles from './routes.module.css';
import PopProdContainer from '../components/containers/PopProdContainer';
import containers from '../components/containers/containers.module.css';
import HomeSkeleton from '../components/skeletons/skeleton_screens/homeSkeleton';
import { Link } from 'react-router-dom';
import routeCss from './routes.module.css';

// This needs to acquire the categoreis from the DB and the Products
const Home = () => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState({
    loading: true,
    data : []
  });
  const [products, setProducts] = useState({
    loading: true,
    data : []
  })

  useEffect(() => {
    // Call on the categories and products, save them to states
    async function callAPI() {
      const mainPath = "https://bdapi-stage.herokuapp.com/";
      const path1 = mainPath + 'categories';
      const path2 = mainPath + 'products'

      await Axios(path1).then(res => {
        if(res.data !== undefined) {
          setCategories({
            loading: false,
            data: res.data
          })
          setLoading(false)
        }
      })
      await Axios(path2).then(res => {
        if(res.data !== undefined) {
          setProducts({
            loading: false,
            data: res.data
          })
        }
      })

      if(!categories.loading && !products.loading) {
        setLoading(false)
      }
    }
    callAPI()
  }, []);
  return (
    <div className={'container'}>
      <Header />
      {loading ? <HomeSkeleton /> : <div>
      <div className={style.hero}></div>
      <CtgCarousel ctgs={categories.data} />
      <div className={containers.divContainer}>
      <h1 className={styles.heading}>Popular Products</h1>
      </div>
      <PopProdContainer products={products.data}/>
      <div className={containers.divContainer}>
        <h1 className={styles.heading}>Sign up for sweet deals!</h1>
      </div>
      <Link to={'/register'} className={routeCss.textDecor}><MainBtn btnText={'Join Now'} /></Link>

      </div>}
      <Footer />
    </div>
  )
  
};
export default Home;
