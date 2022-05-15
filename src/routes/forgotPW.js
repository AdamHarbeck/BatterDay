import React, { useState } from 'react';
import Header from '../components/containers/Header';
import Footer from '../components/containers/Footer';
import BasicInput from '../components/inputs/BasicInput';
import MainBtn from '../components/buttons/MainBtn';
import auth_service from '../services/auth_service';
import routeCSS from './routes.module.css'

function ForgotPW() {
  const [email, setEmail] = useState({ email: '' })
  const send = () => {
    return auth_service.forgot_password(email)
  }
  return (
    <div>
      <Header />
      <div className={routeCSS.center}>
        <BasicInput type={'text'} placeholder={'Enter email'} onChange={e => {
            setEmail(e.target.value);
        }} />
        <MainBtn btnText={'Submit'} onClick={send}/>
      </div>

      <Footer />
    </div>
  )
}
export default ForgotPW;