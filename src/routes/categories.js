import React, { useEffect, useState } from 'react';
import Header from '../components/containers/Header';
import Footer from '../components/containers/Footer';
import CtgCarousel from '../components/containers/CtgCarousel';
import BackTitle from '../components/containers/BackTitle';
import CtgProdCard from '../components/cards/CtgProdCard';
import Axios from 'axios';
// import prodsDuxContainer from '../store/duxContainers/products/prodsDuxCont';
import ProductsSkeleton from '../components/skeletons/skeleton_screens/productsSkeleton';

const Categories = () => {
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
        }
      })
      await Axios(path2).then(res => {
        if(res.data !== undefined) {
          setProducts({
            loading: false,
            data: res.data
          })
          setLoading(false)
        }
      })
    }
    callAPI()
  }, []);
  return (
    <div>
      <Header />
      <BackTitle value={'Categories'}/>
      {loading ? 
      <ProductsSkeleton /> : 
      <div> 
        <CtgCarousel ctgs={categories.data} />
          <div>
            {products.data.map((item) => (
              <CtgProdCard item={item} />
            ))}
          </div>
        </div>
      }
      <Footer />
    </div>
  );
}
export default Categories;

// // Redux Class - worked as of 2/27/22
// class Categories extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { props };
//     props.fetchProds();
//     console.log(this.state);
//   }

//   render() {
//     const { products } = this.props;
//     console.log(this.props);

//     return (
//       <div>
//         <Header />
//         <BackTitle value={'Categories'}/>
//         {/* <CtgCarousel /> */}
//         <div>
//           {products.map((prod) => (
//             <CtgProdCard item={prod} />
//           ))}
//         </div>
//         <Footer />
//     </div>
//     );
//   }
// }
// export default prodsDuxContainer(Categories);
