import React, {Component} from 'react';
import Header from '../components/containers/Header';
import BackTitle from '../components/containers/BackTitle';
import Footer from '../components/containers/Footer';
import imageCSS from '../images/images.module.css';
import routeCSS from './routes.module.css';
import AcctInput from '../components/inputs/AcctInput';
import { Link } from 'react-router-dom';
import MainBtn from '../components/buttons/MainBtn';
import auth_service from '../services/auth_service';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: auth_service.getUser()
    }
  }
  render() {
    const { user } = this.state;
    if(!user){
      window.location.assign('/login')
    } else {
      return(
        <div>
          <Header />
          <BackTitle value={'Profile'} />
          <h1>{`Welcome ${user.first_name}!`}</h1>
          <div className={routeCSS.center}>
            <div>
              <div className={imageCSS.category}></div>
            </div>
            <div>
              <h2>Profile Information</h2>
              <AcctInput value={user.first_name} />
              <AcctInput value={user.last_name} />
              <AcctInput value={user.email} />
            </div>
            <div className={routeCSS.flex}>
              <Link to={'#'}>Edit Profile </Link>
              <Link to={'#'}>Reset Password</Link>
          </div>
          <div>
            <h2>Recent Orders</h2>
          </div>
          <div>
  
          {/* This will need to logout a user */}
          <MainBtn btnText={'Logout'} onClick={auth_service.logout}></MainBtn>
          </div>
        </div>
        <Footer />
      </div>
      )
    }
    
  }
}
