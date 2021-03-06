import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Checkout from './routes/checkout';
import Product from './routes/product';
import Categories from './routes/categories';
import Home from './routes/home';
import Cart from './routes/cart';
import Purchased from './routes/purchased';
import Login from './routes/login';
import Register from './routes/register';
import Profile from './routes/profile';
import ForgotPW from './routes/forgotPW';
import Reset from './routes/resetPW';
import ProductForm from './components/forms/productForm';

// Import the store
import store from './store';

function App() {
  return (
    <div id='appDiv'>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path={'/'} element={ <Home /> } />
            <Route path={'/product/:id'} element={ <Product /> } />
            <Route path={'/product/new'} element={ <ProductForm />} />
            <Route path={'/product/edit/:id'} element={ <ProductForm />} />
            <Route path={'/cart'} element={ <Cart /> } />
            <Route path={'/checkout'} element={ <Checkout /> } />
            <Route path={'/categories'} element={ <Categories /> } />
            <Route path={'/purchased'} element={ <Purchased /> } />
            <Route path={'/login'} element={ <Login />} />
            <Route path={'/register'} element={ <Register /> } />
            <Route path={'/profile'} element={ <Profile /> } />
            <Route path={'/forgot_password'} element={ <ForgotPW /> } />
            <Route path={'/reset_pass/:id'} element={ <Reset /> } />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}
export default App;
