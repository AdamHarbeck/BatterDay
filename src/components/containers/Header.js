import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsCart2, BsList, BsPersonCircle } from 'react-icons/bs';
import DropDown from '../menu/DropDown';
import contStyle from './containers.module.css';

function Header() {
  const [state, setState] = useState(false);

  function showHide() {
    if (state === true) {
      setState(false);
    } else {
      setState(true);
    }
  }
  
  // if(!localStorage.getItem('userCart')) {
  //   localStorage.setItem('userCart', [])
  // }

  return (
    <div className={contStyle.header}>
      <div className={contStyle.dropDownDiv}>
        <div onClick={showHide}><BsList className={contStyle.iconLarge}/></div>
        <DropDown menuShow={ state } onClose={ () => {
          setState(false);
        }} />
      </div>
      <div>
      <h1 className={contStyle.logo}>Batter Day</h1>
      </div>
      <div className={contStyle.navDiv}>
        <Link to={'/'} className={contStyle.link}>Home</Link>
        <Link to={'/categories'} className={contStyle.link}>Baked Goods</Link>
        <Link to={'/profile'} className={contStyle.link}>About</Link>
        <Link to={'/'} className={contStyle.link}>Contact</Link>
      </div>
      <div>
        <Link to={'/login'}>
          <BsPersonCircle className={contStyle.iconLarge}/>
        </Link>
        <Link to={'/cart'} >
          <BsCart2 className={contStyle.iconLarge} />
        </Link>
      </div>
    </div>
  );
}
export default Header;
